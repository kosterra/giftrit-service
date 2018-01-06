const promise = require('bluebird');

const jwt = require('../helpers/jwt');

const options = {
    // Initialization Options
    promiseLib: promise
};

const pgp = require('pg-promise')(options);
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432';
const db = pgp(connectionString);

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
    let giftId = parseInt(req.params.id);

    db.task(t => {
        return t.one('SELECT * FROM gifts WHERE id = $1', giftId)
            .then(gift => {
                console.log(gift);
                return t.any('SELECT * FROM user WHERE id = $1', gift.userid);
            });
    })
        .then(user => {
            res.status(200)
                .json({
                    status: 'success',
                    data: user,
                    message: 'Retrieved ONE gift'
                });
        })
        .catch(error => {
            return next(error);
        });
}

function createGift(req, res, next) {
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
    let giftId = parseInt(req.params.id);
    db.result('DELETE FROM gifts WHERE id = $1', giftId)
        .then(function () {
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