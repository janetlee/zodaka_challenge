const React = require('react');
const App = require('../index.jsx');

class Display extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      tweets: []
    }
  }


        // {tweets.forEach(tweet =>
        //   <TweetEntry handleClick={tweets.handleClick} tweet={tweet} key={tweet.id} />
        // )}
          // {this.state.tweets}

  render() {
      return (
        <div>
          <div className="tweetList">
            {this.state.tweets.forEach(tweet =>
              <TweetEntry handleClick={tweets.handleClick} tweet={tweet} key={tweet.id} />
            )}
          </div>
          <div>
            My fake row
          </div>
        </div>
    )
  }
}

export default Display;