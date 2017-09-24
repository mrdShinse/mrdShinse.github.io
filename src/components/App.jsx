import React from 'react';
import FingeringChart from './FingeringChart.jsx';
import * as tonalScale from 'tonal-scale'
require('./App.scss')

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roots: tonalScale.notes('C chromatic'),
      scales: tonalScale.names(),
      selected: {
        root: "C",
        scale: "chromatic"
      }
    }
    this.renderScaleOptions = this.renderScaleOptions.bind(this);
    this.selectRoot = this.selectRoot.bind(this);
    this.selectScale = this.selectScale.bind(this);
  }
  render() {
    return (
      <div className="container">
        <h1>Trumpet Fingering</h1>
        <div>
          <label>
            Select Scale
            <select onChange={this.selectRoot}>
              {this.renderRootOptions()}
            </select>
            <select onChange={this.selectScale}>
              {this.renderScaleOptions()}
            </select>
            (inBb)
          </label>
          <FingeringChart selected={this.state.selected}></FingeringChart>
        </div>
      </div>
    );
  }
  renderRootOptions() {
    return this.state.roots.map(function(note) {
      return (<option key={note} value={note}>
                {note}
              </option>)
    })
  }
  renderScaleOptions() {
    return this.state.scales.map(function(scale) {
      return (<option key={scale} value={scale}>
                {scale}
              </option>)
    })
  }
  selectRoot(event) {
    this.setState({
      roots: this.state.roots,
      selected: {
        root: event.target.value,
        scale: this.state.selected.scale
      }
    })
  }
  selectScale(event) {
    this.setState({
      roots: this.state.roots,
      selected: {
        root: this.state.selected.root,
        scale: event.target.value
      }
    })
  }
}
