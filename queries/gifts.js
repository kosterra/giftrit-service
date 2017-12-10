var promise = require('bluebird');

var options = {
    // Initialization Options
    promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432';
var db = pgp(connectionString);

function getAllGifts(req, res, next) {
    db.any('SELECT * FROM gifts')
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ALL gifts'
                });
        })
        .catch(function (err) {
            return next(err);
        });
}


module.exports = {
    getAllGifts: getAllGifts
};