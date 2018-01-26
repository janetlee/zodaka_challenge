const React = require('react');
const App = require('../index.jsx');

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      searchTerm: '',
      tweets: []
    }
  }

  render(){
    return (
      <div>
        <div>DISPLAY</div>
      </div>

    )

  }
}

export default Display;