import {} from 'dotenv/config';
const axios = require('axios');

const twitterApiUrl = 'https://api.twitter.com/1.1/search/tweets.json';
const twitterToken = process.env.TWITTER_API;

module.exports.searchTweets = (twitterSearchTerm) => {
  return axios.get(
    twitterApiUrl,
    {
      params: {
        q: twitterSearchTerm,
        result_type: 'recent',
        count: 10
      },
      headers: {
        Authorization: `Bearer ${twitterToken}`,
      },
    },
  )
    .then(res => res.data.statuses.map(status => status.text))
    .then(tweets => tweets)
    .catch((err) => {
      console.log(`Error from Twitter API:  ${err}`);
    });
};