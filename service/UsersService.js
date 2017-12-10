'use strict';


/**
 * adds a user item
 * Adds a user to the system
 *
 * user User User to add (optional)
 * no response value expected for this operation
 **/
exports.addUser = function(user) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete user
 * This can only be done by the logged in user.
 *
 * id String The name that needs to be deleted
 * no response value expected for this operation
 **/
exports.deleteUser = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * get a user by id
 * By passing in the appropriate options, you get a user 
 *
 * id BigDecimal ID of user to return
 * returns List
 **/
exports.getUser = function(id) {
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
 * Get user by user name
 * 
 *
 * username String The name that needs to be fetched. Use user1 for testing.  (optional)
 * returns User
 **/
exports.getUserByName = function(username) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
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
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * get donations from a user
 * By passing in the appropriate options, you get a list of donations made by a user 
 *
 * id BigDecimal ID of user to return
 * returns List
 **/
exports.getUserDonations = function(id) {
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
 * get gifts from a user
 * By passing in the appropriate options, you get a list of gifts made by a user 
 *
 * id BigDecimal ID of user to return
 * returns List
 **/
exports.getUserGifts = function(id) {
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
 * Logs user into the system
 * 
 *
 * username String The username for login
 * password String The password for login in clear text
 * returns String
 **/
exports.loginUser = function(username,password) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Logs out current logged in user session
 * 
 *
 * no response value expected for this operation
 **/
exports.logoutUser = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update user
 * This can only be done by the logged in user.
 *
 * id String id that need to be updated
 * body User Updated user object
 * no response value expected for this operation
 **/
exports.updateUser = function(id,body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

