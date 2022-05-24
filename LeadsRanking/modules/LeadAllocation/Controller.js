// const tblList = require("../constants");
let fs = require('fs');
const path = require("path");
const { Rule, Fact, Engine } = require('json-rules-engine');
const { ObjectID, ObjectId } = require('mongodb');
let engine = new Engine();
const { expressionParser } = require('./expressionParser');
const { evaluate, ConstantNodeDependencies } = require('mathjs');
// const sqlHelper = require("../../Libs/sqlHelper");
const SQLMethods = require("./SQLMethods");
var _ = require('underscore');
const Controller = require("./Controller");


async function getRules(req, res) {
  try {
    let RuleEngineDB = ruleenginedb;
    let data = await RuleEngineDB.collection("RulesHackathon")
      .find({})
      .toArray();
    res.send({
      status: 200,
      data: data,
      message: "Success"
    });

  } catch (err) {
    //console.log(err);
    res.send({
      status: 500,
      error: err
    });
  }
  finally {
    //await RuleEngineDB.close();
  }
}

async function getRulebyId(req, res) {
  try {
    let RuleEngineDB = ruleenginedb;
    let data = await RuleEngineDB.collection("RulesHackathon")
      .find({ _id: ObjectID(req.query._id) })
      .toArray();

    res.send({
      status: 200,
      data: data,
      message: "Success"
    });

  } catch (err) {
    //console.log(err);
    res.send({
      status: 500,
      error: "Please enter correct inputs."
    });
  }
  finally {

  }
}


async function SaveCondition(req, res) {
  try {

    var newvalues = { $set: { conditions: req.body.conditions } };
    let RuleEngineDB = ruleenginedb;
    var collection = RuleEngineDB.collection("RulesHackathon");

    collection.updateOne({ _id: ObjectID(req.body._id) }, newvalues, function (err, results) {

      res.send({
        status: 200,
        data: results.result,
        message: "Success"
      });
    });
  } catch (err) {

    res.send({
      status: 500,
      error: err
    });
  }
  finally {
    // await collection.close();
  }
}

async function SaveRule(req, res) {
  try {

    let RuleEngineDB = ruleenginedb;
    var type = req.body.type;
    let rule = {
      ruleName: req.body.ruleName,
      fact: req.body.fact,
      isActive: true,
      conditions: {
        all: [{
          fact: req.body.fact,
          operator: req.body.operator,
          value: req.body.value,
        }]
      },
      event: [{
        type: req.body.eventType,
        eventName: req.body.eventMessage
      }],
      // AIAgentId: "HealthChatbot"
    }
    let id = req.body._id;
    console.log("id");
    console.log(id);
    //let ro = new Rule(rule);
    //let jsonString = ro.toJSON();
    //var bodyJson = JSON.parse(jsonString);
    var collection = RuleEngineDB.collection("RulesHackathon");
    if (id) {
      collection.updateOne({ _id: ObjectID(id) }, { $set: rule }, { upsert: true });
    }
    else {
      collection.insertOne(rule);
    }


    res.redirect("/list.html");
  } catch (err) {

    res.send({
      status: 500,
      error: err
    });
  }
  finally {
    // await collection.close();
  }
}

async function factCheck(req, res) {
  try {
    let option = req.body.factCheck;
    let value = req.body.value;

    engine.addRule({
      conditions: {
        any: [{
          all: [{
            fact: "sampleFact",
            operator: "equal",
            value: true
          }]
        }]
      },
      event: {  // define the event to fire when the conditions evaluate truthy
        type: 'Display Message',
        params: {
          message: 'Print Message'
        }
      }
    });
    //let fax = new Fact("any", req.body.factCheck, req.body.value);
    let fac = {
      option: value
    }

    engine
      .run(fac)
      .then(results => {
        results.events.map(event => console.log(event.params.message))
      });

    res.send({
      status: 200,
      message: "Success"
    });

  } catch (err) {

    res.send({
      status: 500,
      error: err
    });
  }
  finally {
    // await collection.close();
  }
}



async function resolve(body) {

  let errorStatus = 0;
  try {
    //collection = client.db("RuleEngine").collection("Rules");
    let RuleEngineDB = ruleenginedb;
    let collection = RuleEngineDB.collection("RulesHackathon");

    if (collection == null) {
      console.log("mongo not connected");

    } else {
      let { facts, searchKeys, criteria } = body;

      // creating engine instance with allowing undefined facts
      let engine = new Engine([], { allowUndefinedFacts: true });

      // custom operators
      engine.addOperator("DateGreaterThan", (factValue, jsonValue) => {
        if (!factValue) return false;

        let factDate = Date.parse(factValue);
        let jsonDate = Date.parse(jsonValue);

        if (factDate > jsonDate) {
          return true;
        } else {
          return false;
        }
      });

      engine.addOperator("DateLessThan", (factValue, jsonValue) => {
        if (!factValue) return false;

        let factDate = Date.parse(factValue);
        let jsonDate = Date.parse(jsonValue);

        if (factDate < jsonDate) {
          return true;
        } else {
          return false;
        }
      });

      engine.addOperator("DateLessThanInclusive", (factValue, jsonValue) => {
        if (!factValue) return false;

        let factDate = Date.parse(factValue);
        let jsonDate = Date.parse(jsonValue);

        if (factDate <= jsonDate) {
          return true;
        } else {
          return false;
        }
      });

      engine.addOperator("DateGreaterThanInclusive", (factValue, jsonValue) => {
        if (!factValue) return false;

        let factDate = Date.parse(factValue);
        let jsonDate = Date.parse(jsonValue);

        if (factDate >= jsonDate) {
          return true;
        } else {
          return false;
        }
      });

      // searching rules based on keys { product, incentive month } and isActive flag
      let rules = [];
      if (searchKeys !== undefined && criteria !== undefined) {
        rules = await RuleEngineDB.collection("RulesHackathon")
          .find({
            searchKeys: searchKeys,
            criteria: criteria,
            isActive: true
          })
          .toArray();
  
      } else {
        rules = await RuleEngineDB.collection("RulesHackathon")
          .find({
            isActive: true
          })
          .toArray();        
      }

      console.log('len', rules.length);
      
      // adding rules to the engine
      rules.forEach(rule => {
        let ruleName = rule.name;
        let priority = rule.priority;
        rule.decisions.forEach(value => {
          engine.addRule({
            conditions: value.conditions,
            event: value.event,
            priority: priority,
            name: ruleName
          });
        });
      });

      // running engine instance based on facts 
      let result = engine
        .run(facts)
        .then(async (results) => {
          console.log('events', results.events);

          let data = null;
          if (results.events.length === 0) {
            data = null;
          } else {

            let rank;
            for (let index = 0; index < results.events.length; index++) {
              let event = results.events[index];
              // let { LeadRank } = event.params;
              // rank = LeadRank;

              // let params = event.params;
              // let obj = { ...params, ...facts };
              // let parsedExpression = expressionParser(EXPRESSION, obj);
              // let result = evaluate(parsedExpression).toFixed(2);
              // event.params.value = parsedExpression + " = " + result;
              // event.params.parsedExpression = parsedExpression;
              // facts.ape = result;
              // if(flag == 1){
              //   finalIncentive= parseFloat(finalIncentive) + parseFloat(result);
              // } else {
              //   finalIncentive = result;
              // }

            }

            data = {
              rules: results,
              events: results.events,
              // result: rank,
              facts: facts
            }

          }
          return data;
        });
      return result;
    }
   

  } catch (err) {
console.log(err);
    errorStatus = 1;
    return { errorStatus, err };
  }
  finally {
    // await collection.close();
  }
}



async function resolveRules(req, res) {
  try {

    let result = await resolve(req.body);

    if (result && result.errorStatus === undefined) {
      res.status(200).json({
        status: 200,
        message: 'resolve success',
        data: result
      });
    } else if (result && result.errorStatus !== undefined) {
      console.log(result);
      res.status(500).send({
        status: 500,
        error: result.err
      });
    } else {
      res.status(404).send({
        status: 404,
        error: "No Rules applied"
      });
    }

  } catch (err) {
    console.log(err);
    res.status(500).send({
      status: 500,
      error: err
    });
  }

}



async function getFacts(req, res) {
  try {
    let RuleEngineDB = ruleenginedb;
    let facts = await RuleEngineDB.collection('FactsHackathon')
      .find({})
      .toArray();

    res.status(200).json({
      status: 200,
      message: 'success',
      data: facts
    });

  } catch (err) {

    res.status(500).json({
      status: 500,
      message: err
    })
  }
}


async function addRule(req, res) {
  try {
    let RuleEngineDB = ruleenginedb;
    let rule = req.body;
    rule.priority = 1;
    let result = await RuleEngineDB.collection('RulesHackathon')
      .insertOne(rule);

    res.status(200).json({
      status: 200,
      message: 'success',
      data: result
    });

  } catch (err) {

    res.status(500).json({
      status: 500,
      message: err
    })
  }
}


async function editRule(req, res) {
  try {
    let RuleEngineDB = ruleenginedb;
    let body = req.body;
    let ruleId = req.params.id;
    let result = await RuleEngineDB.collection('RulesHackathon')
      .updateOne(
        { _id: ObjectId(ruleId) },
        {
          $set: {
            decisions: body,
            isActive: true
          }
        }
      );

    res.status(200).json({
      status: 200,
      message: 'success',
      data: result
    });

  } catch (err) {

    res.status(500).json({
      status: 500,
      message: err
    })
  }
}


async function editRuleDetails(req, res) {
  try {
    let RuleEngineDB = ruleenginedb;
    let body = req.body;
    let ruleId = req.params.id;

    let result = await RuleEngineDB.collection('RulesHackathon')
      .updateOne(
        { _id: ObjectId(ruleId) },
        {
          $set: {
            "name": body.name,
            "description": body.description,
            // "searchKeys.1.value": body.incentiveMonth,
            "isActive": body.isActive,
            "priority": body.priority
          }
        }
      );

    res.status(200).json({
      status: 200,
      message: 'success',
      data: result
    });

  } catch (err) {

    res.status(500).json({
      status: 500,
      message: err
    })
  }
}

async function getRuleParams(req, res) {
  try {
    let RuleEngineDB = ruleenginedb;
    let params = await RuleEngineDB.collection('RuleParamsHackathon')
      .find({})
      .toArray();

    res.status(200).json({
      status: 200,
      message: 'success',
      data: params
    });

  } catch (err) {

    res.status(500).json({
      status: 500,
      message: err
    })
  }
}



async function getFactsData(req, res) {
  try {
    let { key, datasource } = req.query;
    let result = await SQLMethods.getFactsDataSql(key, datasource);

    res.status(200).json({
      status: 200,
      message: 'success',
      data: result
    });

  } catch (err) {

    res.status(500).json({
      status: 500,
      message: err
    })
  }
}

async function toggleFactIsActive(req, res) {
  try {
    let RuleEngineDB = ruleenginedb;
    let body = req.body;
    console.log('body', body)
    let factId = body.id;
    let result = await RuleEngineDB.collection('FactsHackathon')
      .updateOne(
        { _id: ObjectId(factId) },
        {
          $set: {
            "isActive": body.newActiveState
          }
        }
      );
    res.status(200).json({
      status: 200,
      message: 'success',
    });

  } catch (err) {

    res.status(500).json({
      status: 500,
      message: err
    })
  }
}

async function processLeadRankingAllocation(req, res) {
  try {
    let RuleEngineDB = ruleenginedb;
    
    let Leads = await RuleEngineDB.collection('LeadData').
                  find({}).
                  toArray();

    for (let i = 0; i < Leads.length; i++) {
      let lead = Leads[i];
      let productId = lead.ProductID;
      let leadId = lead.LeadID;
      let searchKeys = [
        {
          key: 'Product',
          value: productId
        }
      ];

      let facts = lead;

      let body = { facts, searchKeys, criteria: 'leadallocation'};
      
      let resolveResult = await resolve(body);
      let event = {}, params = null, events = [];
      if(resolveResult !== null) {
        events = resolveResult.events;
      }
       
      if(events.length > 0) {
        event = events[0];
        params = event.params;
      }

      if( params !== null && params.LeadRank !== undefined) {

        let res = await RuleEngineDB.collection('LeadData').
                    updateOne(
                      { LeadID: leadId },
                      { $set : { LeadRank: parseInt(params.LeadRank) }}
                    );
      
      }
    }

    let updatedLeads = await RuleEngineDB.collection('LeadData').
                  find({}).
                  toArray();

    
     
    res.status(200).json({
      status: 200,
      message: 'success',
      data: updatedLeads
    });

  } catch (err) {
console.log(err);
    res.status(500).json({
      status: 500,
      message: err
    })
  }
}



async function processGroupAllocation(req, res) {
  try {
    let RuleEngineDB = ruleenginedb;
    
    let Leads = await RuleEngineDB.collection('LeadData').
                  find({}).
                  toArray();

    for (let i = 0; i < Leads.length; i++) {
      let lead = Leads[i];
      let productId = lead.ProductID;
      let leadId = lead.LeadID;
      let searchKeys = [
        {
          key: 'Product',
          value: productId
        }
      ];

      let facts = lead;
      
      let body = { facts, searchKeys, criteria: 'groupallocation'};

      let resolveResult = await resolve(body);
      let event = {}, params = null, events = [];
      if(resolveResult !== null) {
        events = resolveResult.events;
      }

      if(events.length > 0) {
        event = events[0];
        params = event.params;
      }

      if( params !== null && params.Group !== undefined) {
        let obj = {};

        for(key in params) {
          obj[key] = params[key];
        }

        let res = await RuleEngineDB.collection('LeadData').
                    updateOne( 
                      { LeadID: leadId },
                      { $set : obj }
                    );
      
      }
    }

    let updatedLeads = await RuleEngineDB.collection('LeadData').
                        find({}).
                        toArray();
     
    res.status(200).json({
      status: 200,
      message: 'success',
      data: updatedLeads
    });

  } catch (err) {

    res.status(500).json({
      status: 500,
      message: err
    })
  }
}


async function getLeadsData(req, res) {
  try {
    let RuleEngineDB = ruleenginedb;
   
    let Leads = await RuleEngineDB.collection('LeadData')
      .find({})
      .toArray();
      

    res.status(200).json({
      status: 200,
      message: 'success',
      data: Leads
    });

  } catch (err) {

    res.status(500).json({
      status: 500,
      message: err
    })
  }
}


module.exports = {
  getRules: getRules,
  getRulebyId: getRulebyId,
  SaveCondition: SaveCondition,
  SaveRule: SaveRule,
  factCheck: factCheck,
  resolveRules: resolveRules,
  getFacts: getFacts,
  addRule: addRule,
  editRule: editRule,
  getRuleParams: getRuleParams,
  getFactsData: getFactsData,
  editRuleDetails: editRuleDetails,
  resolve: resolve,
  toggleFactIsActive : toggleFactIsActive,
  processLeadRankingAllocation: processLeadRankingAllocation,
  processGroupAllocation: processGroupAllocation,
  getLeadsData: getLeadsData
};
