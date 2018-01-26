import {} from 'dotenv/config';
import express from 'express';
import twitter from '../helpers/twitter.js';
var bodyParser = require('body-parser');
var helmet = require('helmet');

const app = express();

app.use(helmet());
app.use(express.static(__dirname + './../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());



app.post('/items', (req, res) => {
   if (!req) {
    res.status(500).send('Bad request');
  } else {
    console.log(req.body);
    twitter.searchTweets(req.body);
    const tweetArray = twitter.searchTweets(req.body);
    // const tweetArray = await twitter.searchTweets(req.body);
    res.json({ tweets: tweetArray });
  }
});

app.listen(3000, function() {
  console.log(`listening on port 3000`)
});