import babelPolyfill from 'babel-polyfill';
import assert from 'assert';
import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../server/index.js';
import twitter from '../helpers/twitter.js';

var expect = require ('chai').expect;

chai.use(chaiHttp);

var waitForThen = function (test, cb) {
  setTimeout(function() {
    test() ? cb.apply(this) : waitForThen(test, cb);
  }, 5);
};

describe('Server', function() {

  describe('server has GET response', function() {
    it('should return initial page', function() {
      chai.request('http://localhost:3000')
        .get('')
        .end(function(err, res){
          res.should.have.status(200);
        });
      }
    );

    it('Should 404 when asked for a nonexistent route', () => {
      chai.request('http://localhost:3000')
        .get('/arglebargle')
      // Wait for response to return and then check status code
        waitForThen(
          () => { res._ended; },
          () => {
            expect(res._responseCode).to.equal(404);
          }
        );
      }
    );
  })

  describe('server has POST', function() {
    it('should return true', function() {
      chai.request('http://localhost:3000')
        .get('')
        .end(function(err, res){
          res.should.have.status(200);
        });
      }
    );

    it('Should send search term `coffee` and return no more than 10 tweets', () => {
      chai.request('http://localhost:3000')
        .post('', twitter.searchTweets('coffee'))
        .end(function(err, res){
          var parsedBody = JSON.parse(res.data);
          expect(parsedBody).to.have.property('tweetArray');
          expect(parsedBody.tweetArray).to.be.an('array');
          expect(tweetArray).to.have.length.equal(10);
          expect(response._ended).to.equal(true);
        });
      }
    );

    it('Should send search term `puppies` and return no more than 0 tweets', () => {
      chai.request('http://localhost:3000')
        .post('', twitter.searchTweets('puppies'))
        .end(function(err, res){
          var parsedBody = JSON.parse(res.data);
          expect(parsedBody).to.have.property('tweetArray');
          expect(parsedBody.tweetArray).to.be.an('array');
          expect(tweetArray).to.have.length.equal(0);
          expect(response._ended).to.equal(true);
        });
      }
    );
  })
});