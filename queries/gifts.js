const promise = require('bluebird');

const options = {
    // Initialization Options
    promiseLib: promise
};

const pgp = require('pg-promise')(options);
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432';
const db = pgp(connectionString);

function getAllGifts(req, res, next) {
    db.any('SELECT * FROM gifts LEFT JOIN (SELECT sum(temp.amount) AS donatedAmount, temp.giftId FROM (SELECT coalesce(amount,0) AS amount, giftID FROM Donations WHERE NOT (Donations.amount IS NULL)) AS temp GROUP BY temp.giftId) GiftsDonations ON GiftsDonations.giftId = gifts.id')
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

    let data = [];

    db.task(t => {
        return t.oneOrNone('SELECT * FROM gifts LEFT JOIN (SELECT sum(temp.amount) AS donatedAmount, temp.giftId FROM (SELECT coalesce(amount,0) AS amount, giftID FROM Donations WHERE NOT (Donations.amount IS NULL)) AS temp GROUP BY temp.giftId) GiftsDonations ON GiftsDonations.giftId = gifts.id WHERE id = $1', giftId)
            .then(gift => {
                if (gift) {
                    data = gift;
                    return t.oneOrNone('SELECT id, firstname, lastname, username, email, phone, statusid, karma, description FROM users WHERE id = $1', gift.userid);
                }
                return []; // gift not found, so no user
            });
	})
	.then(user => {
		data.user = user;
		res.status(200)
			.json({
				status: 'success',
				data: data,
				message: 'Retrieved ' + data.length + ' gifts'
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
    db.none('INSERT INTO gifts(title, description, amount, created, modified, userId, karma, imageurl)' +
        'VALUES(${title}, ${description}, ${amount}, ${created}, ${modified}, ${userId}, ${karma}, ${imageUrl})',
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
    db.none('UPDATE gifts SET title=$1, description=$2, amount=$3, modified=$4, karma=$5, imageUrl=$6 where id=$7',
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