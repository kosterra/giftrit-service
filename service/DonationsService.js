'use strict';

var pg = require('pg');
var connectionString = process.env.DATABASE_URL;

/**
 * adds a donation item
 * Adds a donation to the system
 *
 * donation Donation Donation to add (optional)
 * no response value expected for this operation
 **/
exports.addDonation = function(donation) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * get donation
 * By passing in the appropriate options, you can search for available gifts in the system 
 *
 * id BigDecimal ID of donation to return
 * returns List
 **/
exports.getDonation = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "karma" : 180.0,
  "giftId" : 1234,
  "amount" : 25.0,
  "releaseDate" : "2016-08-29T09:12:33.001Z",
  "id" : 1234,
  "userId" : 1234,
  "user" : {
    "karma" : 180.0,
    "firstname" : "Ralph",
    "password" : "password",
    "phone" : "phone",
    "id" : 1234,
    "avatar" : "2016-08-29T09:12:33.001Z",
    "email" : "email",
    "lastname" : "Koster",
    "username" : "username",
    "status" : 0
  }
}, {
  "karma" : 180.0,
  "giftId" : 1234,
  "amount" : 25.0,
  "releaseDate" : "2016-08-29T09:12:33.001Z",
  "id" : 1234,
  "userId" : 1234,
  "user" : {
    "karma" : 180.0,
    "firstname" : "Ralph",
    "password" : "password",
    "phone" : "phone",
    "id" : 1234,
    "avatar" : "2016-08-29T09:12:33.001Z",
    "email" : "email",
    "lastname" : "Koster",
    "username" : "username",
    "status" : 0
  }
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

