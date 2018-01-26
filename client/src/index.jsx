import "babel-polyfill";
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
    console.log('Submit handling invoked, searching: ', searchTerm);
  //   axios.post('/items', {body: searchTerm})
  //   .then(function (response) { console.log(response);
  //   })
  // .catch(function (error) {
  //   console.log(error);
  // });

    const searchTwitter = async () => {
      try {
        console.log('Sending POST to server searching: ', searchTerm);
        const response = await axios.post('/items', { searchTerm });
        const data = response.data;
        console.log("returning from API call");
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }

    searchTwitter();
  }


  render() {
    return (
      <div>
        <div>My Twitter Search</div>
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