import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    }
  }

  render() {
    return (
      <div>
        <div>My Twitter Search</div>
        <div>My dummy text</div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));