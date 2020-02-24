const express = require('express');
const handlebars = require('express-handlebars');
const fetch = require('node-fetch');
const pkg = require('./package');

const app = express();

// Set up template engine
app.engine('handlebars', handlebars()).set('view engine', 'handlebars');

// Log all requests
app.use((req, res, next) => {
  setTimeout(() => console.log(req.originalUrl, req.headers));
  next();
});

// Serve public files
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => res.render('index'));

app.get('/api/cards', (req, res) => {
  const elderScrollsBaseURL = 'https://api.elderscrollslegends.io/v1/cards';
  const url = new URL(elderScrollsBaseURL);
  url.searchParams.append('page', req.query.page);
  url.searchParams.append('pageSize', req.query.pageSize);
  url.searchParams.append('name', req.query.name);

  console.log(`Making request to: ${url.toString()}`);
  fetch(url.toString())
    .then(response => {
      if (response.ok) {
        return response.json()
      }
      else {
        throw Error('fail')
      }
    })
    .then(data => {
      res.json(data)
    });
});

// Start the server
app.listen(process.env.PORT || 3000, () => console.log('HS demo started.'));