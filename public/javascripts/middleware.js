var dateFormat = require('dateformat');

const logger =  function (req, res, next) {
  console.log(dateFormat(Date.now(), "dd/mm/yyyy HH:MM:ss") + " : request - %j", req.body)
  next()
}

module.exports = logger;
