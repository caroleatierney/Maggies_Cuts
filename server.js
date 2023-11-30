// ===============================
// ======= DEPENDENCIES  =========
// ===============================
// -- packages
const express = require('express');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT

// ===============================
// ========= MIDDLEWARE ==========
// ===============================
app.use( express.urlencoded( { extended:false } ) );
app.use( express.static('public'))

app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));

// --routes
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/index', (req, res) => {
  res.render('index');
});

app.get('/services', (req, res) => {
  res.render('services');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/appointment', (req, res) => {
  res.render('appointment');
});

app.get('/befaft', (req, res) => {
  res.render('befaft');
});

app.get('/cient', (req, res) => {
  res.render('client');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.get('/gallery', (req, res) => {
  res.render('gallery');
});

app.get('/hours', (req, res) => {
  res.render('hours');
});

app.get('/testimonials', (req, res) => {
  res.render('testimonials');
});

// --listen for when someone goes to localhost:3000/
app.listen(PORT, () => {
  console.log('Listening on port', PORT);
});
