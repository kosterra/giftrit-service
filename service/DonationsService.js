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
    pg.connect(connectionString, function(err, client, done) {
        client.query('SELECT * FROM hello_world', function(err, result) {
            done();
            if (err) {
              console.error(err);
              resolve();
            } else {
              console.log(result);
              return resolve(result[Object.keys(result)[0]]);
            }
        });
    });
  });
}

