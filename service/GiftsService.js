'use strict';


/**
 * adds a gift item
 * Adds a gift to the system
 *
 * gift Gift Gift to add (optional)
 * no response value expected for this operation
 **/
exports.addGift = function(gift) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete gift
 * This can only be done by the logged in user.
 *
 * id String The giftId that needs to be deleted
 * no response value expected for this operation
 **/
exports.deleteGift = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * get a gift by id
 * By passing in the appropriate options, you get a gift 
 *
 * id BigDecimal ID of gift to return
 * returns List
 **/
exports.getGift = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
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
}, {
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
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * searches donations for a gift
 * Returns all donations for a gift 
 *
 * id String ID of the gift
 * returns List
 **/
exports.getGiftDonations = function(id) {
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


/**
 * Returns images of a gift
 * 
 *
 * id Long ID of gift to return images
 * returns List
 **/
exports.getGiftImages = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
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
}, {
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
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * searches gifts
 * By passing in the appropriate options, you can search for available gifts in the system 
 *
 * searchString String pass an optional search string for looking up a gift (optional)
 * skip Integer number of records to skip for pagination (optional)
 * limit Integer maximum number of records to return (optional)
 * returns List
 **/
exports.searchGift = function(searchString,skip,limit) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "amount" : 1499.9,
  "donations" : {
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
  },
  "releaseDate" : "2016-08-29T09:12:33.001Z",
  "name" : "Smart TV",
  "description" : "Panasonic Smart TV 75\"",
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
  "amount" : 1499.9,
  "donations" : {
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
  },
  "releaseDate" : "2016-08-29T09:12:33.001Z",
  "name" : "Smart TV",
  "description" : "Panasonic Smart TV 75\"",
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


/**
 * Update gift
 * This can only be done by the logged in user.
 *
 * id String id that need to be updated
 * body Gift Updated gift object (optional)
 * no response value expected for this operation
 **/
exports.updateGift = function(id,body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * uploads an image to a gift
 * 
 *
 * id Long ID of gift to upload a file
 * additionalMetadata String Additional data to pass to server (optional)
 * file File file to upload (optional)
 * no response value expected for this operation
 **/
exports.uploadImage = function(id,additionalMetadata,file) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

