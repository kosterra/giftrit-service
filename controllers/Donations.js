'use strict';

var utils = require('../utils/writer.js');
var Donations = require('../service/DonationsService');

module.exports.addDonation = function addDonation (req, res, next) {
  var donation = req.swagger.params['donation'].value;
  Donations.addDonation(donation)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getDonation = function getDonation (req, res, next) {
  var id = req.swagger.params['id'].value;
  Donations.getDonation(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
