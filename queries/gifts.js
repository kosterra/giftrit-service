var promise = require('bluebird');

var jwt = require('../helpers/jwt');

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

function getSingleGift(req, res, next) {
    var giftId = parseInt(req.params.id);
    db.one('SELECT * FROM gifts WHERE id = $1', giftId)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ONE gift'
                });
        })
        .catch(function (err) {
            return next(err);
        });
}

function createGift(req, res, next) {
    jwt.authenticate();

    req.body.amount = parseFloat(req.body.amount);
    req.body.created = new Date(req.body.created);
    req.body.modified = new Date(req.body.modified);
    req.body.userId = parseInt(req.body.userId);
    req.body.karma = parseInt(req.body.karma);
    db.none('INSERT INTO gifts(title, description, amount, created, modified, userId, karma)' +
        'VALUES(${title}, ${description}, ${amount}, ${created}, ${modified}, ${userId}, ${karma})',
        req.body)
        .then(function () {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Inserted one gift'
                });
        })
        .catch(function (err) {
            return next(err);
        });
}

function updateGift(req, res, next) {
    db.none('UPDATE gifts SET title=$1, description=$2, amount=$3, modified=$4, karma=$5 where id=$6',
        [req.body.title, req.body.description, parseFloat(req.body.amount),
            new Date(req.body.modified), parseInt(req.body.karma), parseInt(req.params.id)])
        .then(function () {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Updated gift'
                });
        })
        .catch(function (err) {
            return next(err);
        });
}

function removeGift(req, res, next) {
    var giftId = parseInt(req.params.id);
    db.result('DELETE FROM gifts WHERE id = $1', giftId)
        .then(function (result) {
            /* jshint ignore:start */
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Removed ${result.rowCount} gift'
                });
            /* jshint ignore:end */
        })
        .catch(function (err) {
            return next(err);
        });
}

module.exports = {
    getAllGifts: getAllGifts,
    getSingleGift: getSingleGift,
    createGift: createGift,
    updateGift: updateGift,
    removeGift: removeGift
};