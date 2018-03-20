var express = require('express');
var exphbs  = require('express-handlebars');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var helpers  = require('handlebars-helpers')();
//const helpers = handlebars-helpers

/*
var index = require('./routes/index');
var users = require('./routes/users');
var about = require('./routes/about');
*/
const indexC = require('./controllers/index');
const aboutC = require('./controllers/abouts');
const apiC = require('./controllers/api');
const guestbookC = require('./controllers/guestbook');
const blockC= require('./controllers/block');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
  extname: '.hbs',
  defaultLayout: 'main', 
  helpers : helpers
}));
app.set('view engine', '.hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/*
app.use('/', index);
app.use('/users', users);
app.use('/about',about);
*/
app.get('/about',aboutC.index);
app.get('/',indexC.index);
app.get('/api/news',apiC.index);
app.get('/guestbook',guestbookC.index);
app.get('/guestbook/create',guestbookC.create);
app.post('/guestbook',guestbookC.store);


//-- write blog (not block)
app.get('/block',blockC.index);
app.get('/block/create',blockC.create);
app.get('/block/delete/:id',blockC.delete);
app.post('/block',blockC.store);

// catch 404 and forward to error handler
app.use((req, res, next)=> {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
