import React from 'react';
import DisplayEntry from './DisplayEntry.jsx';

class Display extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    const { searchTerm, tweets } = this.props;
    return (
      <div>
        <div className="tweet-header"> TWEETS MENTIONING: {searchTerm}
        </div>
        <div className="tweet-list">
          {tweets.map(tweet =>
            <DisplayEntry tweet={tweet.text} key={tweet.id} />
          )}
        </div>
      </div>
    )
  }
}

export default Display;