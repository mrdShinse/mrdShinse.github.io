import React from 'react';

export default class FingeringChart extends React.Component {
  render() {
    return (
      <div className="fingeringChart">
        <h2>FingeringChart</h2>
        {this.renderChart()}
      </div>
    );
  }

  renderChart() {
    if (this.props.selected != null && this.props.selected != undefined && this.props.selected != "" ) {
      return (
        <table style={{width: '-webkit-fill-available'}}>
          <thead>
            <tr>
              <th>Sound</th>
              <th>1st</th>
              <th>2nd</th>
              <th>3rd</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.props.selected}</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
            </tr>
          </tbody>
        </table>
      )
    } else {
      return (<h4>Select Scale....</h4>)
    }
  }
}
