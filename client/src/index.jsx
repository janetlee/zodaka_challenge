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

  componentDidMount(){
    console.log('COMPONENT DID MOUNT IS RUNNING');
    const url = "/items";
    const loadDefaultPage = async url => {
      try {
        const response = await axios.get(url);
        const data = response.data;
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
  }

  handleSubmit(){
    console.log('Submit handling invoked');
    /* Make the call to post the submit */
  }

  render() {
    return (
      <div>
        <div>My Twitter Search</div>
        <Search class="Search" handleSubmit={this.handleSubmit.bind(this)} searchTerm={this.state.searchTerm}/>
        <Display class="Display" searchTerm={this.state.searchTerm} tweets={this.state.tweets}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));