const promise = require('bluebird');

const options = {
    // Initialization Options
    promiseLib: promise
};

const pgp = require('pg-promise')(options);
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432';
const db = pgp(connectionString);

function getAllUsers(req, res, next) {
    db.any('SELECT * FROM users')
        .then(function (data) {
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

function getSingleUser(req, res, next) {
    var userId = parseInt(req.params.id);
	
	let data = [];
	
    db.task(t => {
        return t.one('SELECT * FROM users WHERE id = $1', userId)
            .then(user => {
				data = user;
				return t.any('SELECT * FROM gifts WHERE userId = $1', user.id);							
            });
	})
	.then(gifts => {
		data.gifts = gifts;
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
    db.none('INSERT INTO users(firstname, lastname, phone, email, username, statusId, karma, description)' +
        'VALUES(${firstname}, ${lastname}, ${phone}, ${email}, ${username}, 1, 0, ${description})',
        req.body)
        .then(function () {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Inserted one user'
                });
        })
        .catch(function (err) {
            return next(err);
        });
}

function updateUser(req, res, next) {
    db.none('UPDATE users SET firstname=$1, lastname=$2, phone=$3, email=$4 WHERE id=$5',
        [req.body.firstname, req.body.lastname, req.body.phone, req.body.email, req.params.id])
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
    var userId = parseInt(req.params.id);
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