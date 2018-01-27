const {} = require('dotenv/config');
const express = require('express');
const twitter = require('../helpers/twitter.js');
const bodyParser = require('body-parser');
const helmet = require('helmet');

const app = express();

app.use(helmet());
app.use(express.static(__dirname + './../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.get('/items', (req, res) => {
   if (!req) {
    res.status(500).send('Bad request');
  } else {
    console.log('Display page');
  }
});

app.post('/items', async (req, res) => {
   if (!req) {
    res.status(500).send('Bad request');
  } else {
    twitter.searchTweets(req.body);
    const tweetArray = await twitter.searchTweets(req.body);

    res.json(tweetArray);
    res.status(201);
  }
});

app.listen(3000, function() {
  console.log(`listening on port 3000`)
});