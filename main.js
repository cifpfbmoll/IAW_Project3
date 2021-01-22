const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express()

// Static folder
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3000;

// Handlebars
app.engine('.hbs', exphbs({ 
  defaultLayout: 'main', 
  extname: '.hbs'
}));
app.set('view engine', '.hbs');

//Routes
app.use('/', require('./routes/index'))
 
app.listen(PORT, 
  () => console.log(`Server running on port ${PORT}...`))