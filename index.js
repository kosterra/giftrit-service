const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const swaggerJSDoc = require('swagger-jsdoc');

const gifts = require('./routes/gifts');
const donations = require('./routes/donations');
const karmas = require('./routes/karmas');
const users = require('./routes/users');
const status = require('./routes/status');
const contactform = require('./routes/contactform');

const app = express();

// swagger definition
const swaggerDefinition = {
    info: {
        title: 'Giftr.it Application API',
        version: '1.0.1',
        description: 'RESTful API with Swagger for Giftr.it Application',
    },
    host: 'giftrit-service.herokuapp.com',
    basePath: '/',
};

// options for the swagger docs
const options = {
    // import swaggerDefinitions
    swaggerDefinition: swaggerDefinition,
    // path to the API docs
    apis: ['./routes/*.js'],
};

// initialize swagger-jsdoc
const swaggerSpec = swaggerJSDoc(options);


// Allow Cross Origin
app.all('/*', function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization');
    next();
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.set('base', '/api-docs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', gifts);
app.use('/', donations);
app.use('/', karmas);
app.use('/', users);
app.use('/', status);
app.use('/', contactform);

app.get('/swagger.json', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status( err.code || 500 )
            .json({
                status: 'error',
                message: err
            });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500)
        .json({
            status: 'error',
            message: err.message
        });
});


module.exports = app;