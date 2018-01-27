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

  render() {
      return (
        <div>
          <div class="tweet-header"> TWEETS MENTIONING: {this.props.searchTerm}
          </div>
          <div class="tweet-list">
            {this.props.tweets.map(tweet =>
              <DisplayEntry tweet={tweet} key={this.props.tweets.indexOf(tweet)} />
            )}
          </div>
        </div>
    )
  }
}

export default Display;