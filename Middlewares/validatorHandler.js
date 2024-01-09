const { ne } = require('@faker-js/faker');
const boom = require('@hapi/boom');
// middleware dinamico
function validatorHandler(schema, property) { //clousures
  return (req, res, next) => {
    const date = req[property]; // puede venir en body, params, o query

    const { error } = schema.validate(data);
    if(error){
      next(boom.badRequest(error));
    }
    next();
  }
}

module.exports = validatorHandler;
