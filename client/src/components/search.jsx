const React = require('react');
const App = require('../index.jsx');

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTermEntry: ''
    }
  }

  handleSearchTermEntry(event) {
    this.setState({
      searchTermEntry: event.target.value
    });
  }


  render() {
    return (
      <div className='header'>
        <div>Enter a search term into the box:</div>
        <input type="text" value={this.state.searchTermEntry} onChange={event => this.handleSearchTermEntry(event)}></input>
        <button onClick={() => this.props.handleSubmit(this.state.searchTermEntry)} >Submit!</button>
      </div>
    );
  }
}

export default Search;