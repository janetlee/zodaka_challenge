const babelPolyfill = require('babel-polyfill');
const React = require('react');
const ReactDOM = require('react-dom');
import Search from './components/search.jsx';
import Display from './components/display.jsx';

const axios = require('axios');

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      tweets: []
    }
  }

  handleSubmit(searchTerm){
    const searchTwitter = async () => {
      try {
        const response = await axios.post('/items', { searchTerm });
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
    }

    searchTwitter();
  }


  render() {
    return (
      <div>
        <div class='Title'>My Twitter Search</div>
        <Search class="Search"
          handleSubmit={this.handleSubmit.bind(this)}
          searchTerm={this.state.searchTerm}
        />
        <Display class="Display"
          searchTerm={this.state.searchTerm}
          tweets={this.state.tweets}
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));