const postalService = require('../service/postal.service');

module.exports.getDistance = (request, response, next) => postalService.distance(request, response, next);