import React from 'react';
import * as tonalScale from 'tonal-scale'
import * as trumpeter from 'trumpeter'

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
    if (this.props.selectedScale != null && this.props.selectedScale != undefined && this.props.selectedScale != "" ) {
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
            {this.renderFingering()}
          </tbody>
        </table>
      )
    } else {
      return (<h4>Select Scale....</h4>)
    }
  }
  renderFingering() {
    return this.getFingerings(this.props.selectedScale).map(function(data) {
      return (
        <tr key={data.note}>
          <td>{data.note}</td>
          <td>{data.fingering[0].toString()}</td>
          <td>{data.fingering[1].toString()}</td>
          <td>{data.fingering[2].toString()}</td>
        </tr>
      )
    })
  }
  getFingerings(scale) {
    const notes = tonalScale.notes(scale + ' major');
    return notes.map((note) => {
      return {
        note: note,
        fingering: trumpeter.fingering(note)
      }
    })
  }
}
