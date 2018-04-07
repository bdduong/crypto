import React from 'react';
import {render} from 'react-dom';
import Chart from './components/chart.js';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    }
  }

  componentDidMount() {
    this.fetch();
  }

  fetch() {
    axios.get('/blockchainz')
      .then(results => {
        this.setState({data: results.data})
      })
  }

  render () {
    return (
      <div>
        <Chart data={this.state.data}/>
      </div>
    )
  }
}

render(<App/>, document.getElementById('app'));