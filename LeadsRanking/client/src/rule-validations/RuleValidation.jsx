import { Engine } from 'json-rules-engine';


export const processEngine = (fact, conditions) => {
    const engine = new Engine(conditions, { allowUndefinedFacts: true });
    
    // custom operators
    engine.addOperator("DateGreaterThan", (factValue, jsonValue) => {
      if (!factValue) return false;

      let factDate = Date.parse(factValue);
      let jsonDate = Date.parse(jsonValue);

      if(factDate > jsonDate){
        return true;
      } else {
        return false;
      }
    });

    engine.addOperator("DateLessThan", (factValue, jsonValue) => {
      if (!factValue) return false;

      let factDate = Date.parse(factValue);
      let jsonDate = Date.parse(jsonValue);

      if(factDate < jsonDate){
        return true;
      } else {
        return false;
      }
    });

    engine.addOperator("DateLessThanInclusive", (factValue, jsonValue) => {
      if (!factValue) return false;

      let factDate = Date.parse(factValue);
      let jsonDate = Date.parse(jsonValue);

      if(factDate <= jsonDate){
        return true;
      } else {
        return false;
      }
    });

    engine.addOperator("DateGreaterThanInclusive", (factValue, jsonValue) => {
      if (!factValue) return false;

      let factDate = Date.parse(factValue);
      let jsonDate = Date.parse(jsonValue);

      if(factDate >= jsonDate){
        return true;
      } else {
        return false;
      }
    });
  
    return engine.run(fact)
        .then(results => {
          return results.events
        })
        .catch((e) => {
          console.error('Problem occured when processing the rules', e);
          return Promise.reject({ error: e.message });
        });
};
  
export const validateRuleset = async (facts, conditions) => {
    const result = await processEngine(facts, conditions);
    return result;
}