'use strict';

var utils = require('../utils/writer.js');
var Karmas = require('../service/KarmasService');

module.exports.getKarmas = function getKarmas (req, res, next) {
  var minamount = req.swagger.params['minamount'].value;
  var gkp = req.swagger.params['gkp'].value;
  Karmas.getKarmas(minamount,gkp)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
