const express = require('express');
const exphds = require('express-handlebars');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3030;

// Set handlebars middleware
app.engine('handlebars', exphds());
app.set('view engine', 'handlebars');

// Set routes
app.get('/', (req, res) => {
  res.render('home', {
    stuff: 'cool stuff'
  });
})

app.get('/about', (req, res) => {
  res.render('about');
})

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));