import React, { Component } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
// import ChartWrapper from '../../Charts.styles';

class LineGraph extends Component {
  render() {
    const { data, width, height, colors } = this.props;
    // <div className="isoChartWrapper">
    return (
      <div className='chart-stypes'>
        <LineChart
          width={width}
          height={height}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="name" stroke={colors[3]} />
          <YAxis stroke={colors[3]} />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="pv"
            stroke={colors[0]}
            activeDot={{ r: 8 }}
          />
          {/* <Line type="monotone" dataKey="uv" stroke={colors[1]} /> */}
        </LineChart>
      </div>
    );
  }
}

export default LineGraph;