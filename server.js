require('dotenv').config(); // allows us to access API key if we have one
const express = require('express');
const layouts = require('express-ejs-layouts');
const app = express();

// console.log(SECRET_SESSION);

app.set('view engine', 'ejs');

app.use(require('morgan')('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
app.use(layouts);

app.get('/', (req, res) => {
  res.render('index');
})


const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`🎧 You're listening to the smooth sounds of port ${PORT} 🎧`);
});

module.exports = server;

// exporting server so when we test all the files, it'll pull the server info
