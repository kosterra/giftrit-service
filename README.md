# heroku-postgres

```
$ git clone https://github.com/ralphkoster/heroku-service-hello-world.git
$ heroku apps:create heroku-service-hello-world --region eu
```

Then initialize the node.js project

```
$ git add -A
$ git commit -m "Initialized project"
$ git push heroku master
$ heroku open
```

After pushing project to heroku the page should be successfully loaded.

We can no provision the papertrail addon to view logs for this application directly in Browser:

```
$ heroku addons:create papertrail
$ heroku addons
$ heroku addons:open papertrail
```

We can no create a Postgres Database for this service:

```
$ heroku addons:create heroku-postgresql:hello-world
$ heroku addons:create heroku-postgresql:hobby-dev
$ heroku config
```

Add the following dependency to `package.json`:

```
"dependencies": {
    "pg": "6.x",
    "ejs": "2.5.6",
    "express": "4.15.2",
}
```

Type `npm install` to install the new module. Edit the `index.js`
file to use this module to connect to the database specified in DATABASE_URL environment variable:

```
var pg = require('pg');

app.get('/db', function (request, response) {
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
    client.query('SELECT * FROM test_table', function(err, result) {
      done();
      if (err)
       { console.error(err); response.send("Error " + err); }
      else
       { response.render('pages/db', {results: result.rows} ); }
    });
  });
});
```