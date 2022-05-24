const expressionParser = (str, obj) => {

  let expression = str;
  let arr = expression.split(' ');

  let modified_expression ="";
  arr.forEach(function(part, index, res) {
    let reg = /^[A-Za-z]+$/
    let value = res[index];
    if(reg.test(value)){
      modified_expression+= "${" + value + "}";
      modified_expression+= " ";
    } else {
      modified_expression+= value;
      modified_expression+=" ";
    }
  });

  const interpolate = (str, obj) => str.replace(
    /\${([^}]+)}/g,
    (_, prop) => obj[prop]
  );

  let result = interpolate(modified_expression, obj);
  return result;

}

module.exports = {
  expressionParser: expressionParser
}