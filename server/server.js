const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const flowerList = require('./routes/template.router');
const userList = require('./routes/userlist.router');
const deleteRouter = require('./routes/delete.router');
const editRouter = require('./routes/edit.router');
const getName = require('./routes/getname.router');
const getTotal = require('./routes/totals.router');
const getCommon = require('./routes/common.router');
const getComo = require('./routes/como.router')
// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/flowers', flowerList);
app.use('/userlist', userList);
app.use('/delete', deleteRouter);
app.use('/edit', editRouter);
app.use('/getname', getName);
app.use('/totals', getTotal);
app.use('/common', getCommon)
app.use('/como', getComo)

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
