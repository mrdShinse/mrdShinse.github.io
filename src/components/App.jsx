import React from 'react';
import FingeringChart from './FingeringChart.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scales: [
        "C", "C#",
        "D", "D#",
        "E",
        "F", "F#",
        "G", "G#",
        "A", "A#",
        "B"
      ],
      selected: "C"
    }
    this.selectScale = this.selectScale.bind(this);
  }
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <h1>Trumpet Fingering</h1>
        <div>
          <label>
            Select Scale
            <select onChange={this.selectScale}>
              {this.renderOptions()}
            </select>
          </label>
          <FingeringChart selectedScale={this.state.selected}></FingeringChart>
        </div>
      </div>
    );
  }
  renderOptions() {
    return this.state.scales.map(function(scale) {
      return (<option key={scale} value={scale}>{scale}</option>)
    })
  }
  selectScale(event) {
    this.setState({
      scales: this.state.scales,
      selected: event.target.value
    })
  }
}
