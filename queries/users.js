const promise = require('bluebird');

const options = {
    // Initialization Options
    promiseLib: promise
};

const pgp = require('pg-promise')(options);
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432';
const db = pgp(connectionString);

function getAllUsers(req, res, next) {
  if(req.query.authId) {
    sql = function() { return db.one('SELECT * FROM users WHERE authId = $1', req.query.authId) };
  } else if(req.query.sessionId) {
    sql = function() { return db.one('SELECT * FROM users WHERE sessionId = $1', req.query.sessionId) };
  } else {
    sql = function() { return db.any('SELECT * FROM users ') };
  }

  sql()
      .then(function(data) {
          res.status(200)
              .json({
                  status: 'success',
                  data: data,
                  message: 'Retrieved ALL users'
              });
      })
      .catch(function (err) {
          return next(err);
      });
}

function getsingleUserByAuthId(req, res, next) {
  const authId = req.params.authId;

  let data = [];

    db.task(t => {
        return t.one('SELECT * FROM users WHERE authId = $1', authId)
            .then(user => {
        data = user;
        return t.any('SELECT * FROM gifts LEFT JOIN (SELECT sum(temp.amount) AS donatedAmount, temp.giftId FROM (SELECT coalesce(amount,0) AS amount, giftID FROM Donations WHERE NOT (Donations.amount IS NULL)) AS temp GROUP BY temp.giftId) GiftsDonations ON GiftsDonations.giftId = gifts.id WHERE userid=$1', user.id)
          .then(gifts => {
            data.gifts = gifts;
            return t.any('SELECT * FROM donations WHERE userId = $1', user.id);
          });
            });
  })
  .then(donations => {
    data.donations = donations;
    res.status(200)
      .json({
        status: 'success',
        data: data,
        message: 'Retrieved ONE user'
      });
  })
  .catch(error => {
    return next(error);
  });
}

function getSingleUser(req, res, next) {
    const userId = parseInt(req.params.id);

	let data = [];

    db.task(t => {
        return t.one('SELECT * FROM users WHERE id = $1', userId)
            .then(user => {
				data = user;
				return t.any('SELECT * FROM gifts LEFT JOIN (SELECT sum(temp.amount) AS donatedAmount, temp.giftId FROM (SELECT coalesce(amount,0) AS amount, giftID FROM Donations WHERE NOT (Donations.amount IS NULL)) AS temp GROUP BY temp.giftId) GiftsDonations ON GiftsDonations.giftId = gifts.id WHERE userid=$1', user.id)
					.then(gifts => {
						data.gifts = gifts;
						return t.any('SELECT * FROM donations WHERE userId = $1', user.id);
					});
            });
	})
	.then(donations => {
		data.donations = donations;
		res.status(200)
			.json({
				status: 'success',
				data: data,
				message: 'Retrieved ONE user'
			});
	})
	.catch(error => {
		return next(error);
	});



    /*db.one('SELECT * FROM users WHERE id = $1', userId)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ONE user'
                });
        })
        .catch(function (err) {
            return next(err);
        });*/
}

function createUser(req, res, next) {
    req.body.statusId = parseInt(req.body.karma);

    db.task(t => {
      return db.one('INSERT INTO users(firstname, lastname, phone, email, username, statusId, karma, description, authId, sessionId)' +
        'VALUES(${firstname}, ${lastname}, ${phone}, ${email}, ${username}, 1, 0, ${description}, ${authId}, ${sessionId}) RETURNING id',
        req.body)
        .then(data => {
            return db.one('SELECT * FROM users WHERE id = $1', data.id)
        });
      })
      .then(createdUser => {
            res.status(200)
                .json({
                    status: 'success',
            				data: createdUser,
                    message: 'Inserted one user'
                });
        })
        .catch(function (err) {
            return next(err);
        });
}

function updateUser(req, res, next) {
    db.none('UPDATE users SET firstname=$1, lastname=$2, username=$3, phone=$4, email=$5, karma=$6, description=$7, imageurl=$8, sessionId=$9 WHERE id=$10',
        [req.body.firstname, req.body.lastname, req.body.username, req.body.phone, req.body.email, req.body.karma, req.body.description, req.body.imageUrl, req.body.sessionId, req.params.id])
        .then(function () {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Updated user'
                });
        })
        .catch(function (err) {
            return next(err);
        });
}

function removeUser(req, res, next) {
    const userId = parseInt(req.params.id);
    db.result('DELETE FROM users WHERE id = $1', userId)
        .then(function (result) {
            /* jshint ignore:start */
            res.status(200)
                .json({
                    status: 'success',
                    message: `Removed ${result.rowCount} user`
                });
            /* jshint ignore:end */
        })
        .catch(function (err) {
            return next(err);
        });
}

module.exports = {
    getAllUsers: getAllUsers,
    getSingleUser: getSingleUser,
    createUser: createUser,
    updateUser: updateUser,
    removeUser: removeUser
};
