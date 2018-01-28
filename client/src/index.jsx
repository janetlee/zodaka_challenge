import babelPolyfill from 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Search from './components/Search.jsx';
import Display from './components/Display.jsx';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      tweets: []
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(searchTerm) {
    (async () => {
      try {
        const response = await axios.post('', { searchTerm });
        const data = response.data;

        if (data) {
          this.setState({
            searchTerm: searchTerm,
            tweets: data
          })
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }


  render() {
    return (
      <div>
        <div className='Title'>My Twitter Search</div>
        <Search className="Search"
          handleSubmit={this.handleSubmit}
          searchTerm={this.state.searchTerm}
        />
        <Display className="Display"
          searchTerm={this.state.searchTerm}
          tweets={this.state.tweets}
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));