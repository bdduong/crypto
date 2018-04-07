import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

class Chart extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="chart">
        <Line
          data={this.props.data}
        />
      </div>
    )
  }
}

export default Chart;