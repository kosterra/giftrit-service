var express = require('express');
var app = express();
var pg = require('pg');
var connectionString = process.env.DATABASE_URL;

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

// READ Hello World
app.get('/api/helloworld', function (request, response) {
    pg.connect(connectionString, function(err, client, done) {
        client.query('SELECT * FROM hello_world', function(err, result) {
            done();
            if (err)
            { console.error(err); response.send("Error " + err); }
            else
            { return response.json(result.rows); }
        });
    });
});