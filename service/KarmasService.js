'use strict';


/**
 * Get karmas by optional query parameter
 * 
 *
 * minamount BigDecimal The minamount that needs to be fetched. (optional)
 * gkp BigDecimal The good karma points that needs to be fetched. (optional)
 * returns Karma
 **/
exports.getKarmas = function(minamount,gkp) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : 1234,
  "minamount" : 5.0,
  "gkp" : 150.0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

