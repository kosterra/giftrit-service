'use strict';

var utils = require('../utils/writer.js');
var Gifts = require('../service/GiftsService');

module.exports.addGift = function addGift (req, res, next) {
  var gift = req.swagger.params['gift'].value;
  Gifts.addGift(gift)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteGift = function deleteGift (req, res, next) {
  var id = req.swagger.params['id'].value;
  Gifts.deleteGift(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getGift = function getGift (req, res, next) {
  var id = req.swagger.params['id'].value;
  Gifts.getGift(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getGiftDonations = function getGiftDonations (req, res, next) {
  var id = req.swagger.params['id'].value;
  Gifts.getGiftDonations(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getGiftImages = function getGiftImages (req, res, next) {
  var id = req.swagger.params['id'].value;
  Gifts.getGiftImages(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.searchGift = function searchGift (req, res, next) {
  var searchString = req.swagger.params['searchString'].value;
  var skip = req.swagger.params['skip'].value;
  var limit = req.swagger.params['limit'].value;
  Gifts.searchGift(searchString,skip,limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateGift = function updateGift (req, res, next) {
  var id = req.swagger.params['id'].value;
  var body = req.swagger.params['body'].value;
  Gifts.updateGift(id,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.uploadImage = function uploadImage (req, res, next) {
  var id = req.swagger.params['id'].value;
  var additionalMetadata = req.swagger.params['additionalMetadata'].value;
  var file = req.swagger.params['file'].value;
  Gifts.uploadImage(id,additionalMetadata,file)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
