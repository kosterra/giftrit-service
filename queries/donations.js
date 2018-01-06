const promise = require('bluebird');

const options = {
    // Initialization Options
    promiseLib: promise
};

const pgp = require('pg-promise')(options);
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432';
const db = pgp(connectionString);

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
    const donationId = parseInt(req.params.id);
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
    req.body.created = new Date(req.body.created);
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