require('dotenv').config(); // allows us to access API key if we have one
const express = require('express');
const layouts = require('express-ejs-layouts');
const app = express();
const session = require('express-session');
const flash = require('connect-flash');

const SECRET_SESSION = process.env.SECRET_SESSION;
console.log('yooooooo.... >>>', SECRET_SESSION);

// console.log(SECRET_SESSION);

app.set('view engine', 'ejs');

app.use(require('morgan')('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
app.use(layouts);

app.use(session({
  secredt: SECRET_SESSION, // What we actually will be giving the user on our site as a session cookie
  resave: false, // Save the session even if it's modified, make this false
  saveUninitialized: true // If we have a new session, we save it, therefore making that true
}));

app.use(flash()); // flash middleware

app.use((req, res, next) => {
  console.log('res locals >>>', res.locals);
  res.locals.alerts = req.flash();
  res.locals.currentUser = req.user;
  next();
}); // this will run on every single route

app.get('/', (req, res) => {
  res.render('index');
})


const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`🎧 You're listening to the smooth sounds of port ${PORT} 🎧`);
});

module.exports = server;

// exporting server so when we test all the files, it'll pull the server info
