import React from 'react';
import DisplayEntry from './DisplayEntry.jsx';

class Display extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
      return (
        <div>
          <div className="tweet-header"> TWEETS MENTIONING: {this.props.searchTerm}
          </div>
          <div className="tweet-list">
            {this.props.tweets.map(tweet =>
              <DisplayEntry tweet={tweet.text} key={tweet.id} />
            )}
          </div>
        </div>
    )
  }
}

export default Display;