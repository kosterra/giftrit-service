var promise = require('bluebird');

var options = {
    // Initialization Options
    promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432';
var db = pgp(connectionString);

function getAllDonations(req, res, next) {
    db.any('SELECT * FROM donations')
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ALL donations'
                });
        })
        .catch(function (err) {
            return next(err);
        });
}

function getSingleDonation(req, res, next) {
    var donationId = parseInt(req.params.id);
    db.one('SELECT * FROM donations WHERE id = $1', donationId)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ONE donation'
                });
        })
        .catch(function (err) {
            return next(err);
        });
}

function createDonation(req, res, next) {
    req.body.amount = parseFloat(req.body.amount);
    req.body.giftId = parseInt(req.body.giftId);
    req.body.userId = parseInt(req.body.userId);
    req.body.karma = parseInt(req.body.karma);
    db.none('INSERT INTO donations(amount, created, giftId, userId, karma)' +
        'values(${amount}, ${created}, ${giftId}, ${userId}, ${karma})',
        req.body)
        .then(function () {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Inserted one donation'
                });
        })
        .catch(function (err) {
            return next(err);
        });
}


module.exports = {
    getAllDonations: getAllDonations,
    getSingleDonation: getSingleDonation,
    createDonation: createDonation
};