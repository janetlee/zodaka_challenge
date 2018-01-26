const React = require('react');
const App = require('../index.jsx');

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTermEntry: ''
    }

    this.handleSearchTermEntry = this.handleSearchTermEntry.bind(this);
    this.handleSubmit = props.handleSubmit.bind(this);
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
        <input type="text" value={this.state.searchTermEntry} onChange={this.handleSearchTermEntry.bind(this)}></input>
        <button onClick={this.handleSubmit.bind(this, this.state.searchTermEntry)} >Submit!</button>
      </div>
    );
  }
}

export default Search;