const React = require('react');
import DisplayEntry from './displayEntry.jsx';

class Display extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: this.props.searchTerm,
      tweets: this.props.tweets
    }
  }


        // {tweets.forEach(tweet =>
        //   <TweetEntry handleClick={tweets.handleClick} tweet={tweet} key={tweet.id} />
        // )}
          // {this.state.tweets}

  render() {
      return (
        <div>
          <div> TWEETS MENTIONING: {this.props.searchTerm}
          </div>
          <div> {this.state.tweets}
          </div>

          <div className="tweetList">
            {this.props.tweets.map(tweet =>
              <DisplayEntry tweet={tweet} key={this.props.tweets.indexOf(tweet)} />
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