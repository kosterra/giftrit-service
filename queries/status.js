const promise = require('bluebird');

const options = {
    // Initialization Options
    promiseLib: promise
};

const pgp = require('pg-promise')(options);
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432';
const db = pgp(connectionString);

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