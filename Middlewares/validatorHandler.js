const boom = require('@hapi/boom');
// middleware dinamico
function validatorHandler(schema, property) { //clousures
  return (req, res, next) => {
    const data = req[property]; // puede venir en body, params, o query
    const { error } = schema.validate(data, { abortEarly: false });
    if(error){
      next(boom.badRequest(error));
    }
    next();
  }
}

module.exports = validatorHandler;
