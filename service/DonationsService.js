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
    console.log('before pg connection');
    return pg.connect(connectionString, function(err, client, done) {
        if(err) {
            return console.error('Could not fetch client from pool', err);
        } else {
            console.log('before query');

            return client.query('SELECT * FROM hello_world', function(err, result) {
                done();
                if (err) {
                    console.error(err);
                    resolve();
                } else {
                    console.log(result);
                    return resolve(result[Object.keys(result)[0]]);
                }
            });
        }
    });
  });
}

