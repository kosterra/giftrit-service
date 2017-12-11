var promise = require('bluebird');

var options = {
    // Initialization Options
    promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432';
var db = pgp(connectionString);

function getAllStatus(req, res, next) {
    db.any('SELECT * FROM status')
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ALL status'
                });
        })
        .catch(function (err) {
            return next(err);
        });
}


module.exports = {
    getAllStatus: getAllStatus
};