var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const Blog123 = require('./models/blog');
var app = express();

//connect to mongodb
const dburl='mongodb+srv://tonytest:admin123@nodetutor.xsigh.mongodb.net/node-tuts';
mongoose.connect(dburl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => console.log("connect mongo db success"))
  .catch(err => console.log(err));
console.log(123);
// view engine setup
//app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

app.use((req,res,next)=>{
	console.log('method:',req.method);
	next();
});



app.use('/', indexRouter);
app.use('/users', usersRouter);

app.get('/add-blog', (req, res) => {

  const blog = new Blog123({
    title: 'new blog 1209',
    snippet: 'about my new blog',
    body: 'more about my new blog'
  })

  blog.save()
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.log(err);
    });
});



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;

  res.locals.error = req.app.get('env') === 'development' ? err : {};
  console.log(res.locals.error);
  const test=res.locals.error;
  console.log("lost Info: "+res.locals.error);
  console.log("question1: "+test);
  // render the error page
  res.status(err.status || 500);

  res.render('error',{res1:res.locals.error});
});


module.exports = app;
