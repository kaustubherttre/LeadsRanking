const e = require("express");
// const sqlHelper = require("../../Libs/sqlHelper");
// const HadoopHelper = require("../Hadoopdb/Helper");


async function getFactsDataSql(key, datasource) {
  try {

    let response = {}, result=null;
    
    let RuleEngineDB = ruleenginedb;
    let data = await RuleEngineDB.collection('FactValues')
                .find({ key }).toArray();
    response.key = key;
    if( data !== null && data.length > 0) {
      response.data = data[0].data;
    }
     
    return response;

  } catch (err) {
    console.log(err);
    return null;
  }
}


module.exports = {
  getFactsDataSql: getFactsDataSql,
};
