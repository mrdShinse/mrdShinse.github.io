import React from 'react';
import * as tonalNote from 'tonal-note'
import * as tonalScale from 'tonal-scale'
import * as tonalTranspose from 'tonal-transpose'
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
              <th>Sound(in Bb)</th>
              <th>Sound(in C)</th>
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
    const self = this;
    return this.getFingerings(this.props.selectedScale).map(function(data) {
      return (
        <tr key={data.note}>
          <td>{data.note}</td>
          <td>{self.fetchInBb(data.note)}</td>
          <td>{self.renderFingeringMark(data.fingering[0])}</td>
          <td>{self.renderFingeringMark(data.fingering[1])}</td>
          <td>{self.renderFingeringMark(data.fingering[2])}</td>
        </tr>
      )
    })
  }
  renderFingeringMark(bool) {
    if(bool){
      return "●"
    }else{
      return "○"
    }
  }
  getFingerings(scale) {
    const notes = tonalScale.notes(scale + ' major');
    return notes.map((note) => {
      const simplifiedNote = tonalNote.simplify(note)
      return {
        note: simplifiedNote,
        fingering: trumpeter.fingering(simplifiedNote)
      }
    })
  }
  fetchInBb(note) {
    return tonalTranspose.transpose(note, '7m')
  }
}
