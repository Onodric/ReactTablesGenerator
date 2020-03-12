import React, { Component } from 'react';
import { Table } from './table/Table'
import { Configuration } from './configuration/Configuration';
import './App.css';

class App extends Component {
  directions = {
    ltrUp: 'LTR-UP',
    rtlUp: 'RTL-UP',
    ltrDown: 'LTR-DOWN',
    rtlDown: 'RTL-DOWN',
  };

  state = {
    activeTable: {},
    red: {
      n: 8,
      x: 1,
      m: 29,
      w: 20,
      d: this.directions.ltrUp
    },
    green: {
      n: 231,
      x: 1,
      m: 247,
      w: 30,
      d: this.directions.ltrUp
    },
    blue: {
      n: 47,
      x: 2,
      m: 81,
      w: 40,
      d: this.directions.rtlUp
    }
  }

  constructor(props) {
    super(props);

    this.onRedConfigure = this.onRedConfigure.bind(this);
    this.onRedChange = this.onRedChange.bind(this);
    this.onGreenConfigure = this.onGreenConfigure.bind(this);
    this.onGreenChange = this.onGreenChange.bind(this);
    this.onBlueConfigure = this.onBlueConfigure.bind(this);
    this.onBlueChange = this.onBlueChange.bind(this);
  }

  onRedConfigure() {
    this.setState({
      activeTable: this.state.red,
      red: this.state.red,
      green: this.state.green,
      blue: this.state.blue
    })
  }

  onRedChange(tableConfig) {
    this.setState({
      activeTable: {},
      red: tableConfig,
      green: this.state.green,
      blue: this.state.blue
    })
  }

  onBlueConfigure() {
    this.setState({
      activeTable: this.state.blue,
      red: this.state.red,
      green: this.state.green,
      blue: this.state.blue
    })
  }

  onBlueChange(tableConfig) {
    this.setState({
      activeTable: {},
      red: this.state.red,
      green: this.state.green,
      blue: tableConfig
    })
  }

  onGreenConfigure() {
    this.setState({
      activeTable: this.state.green,
      red: this.state.red,
      green: this.state.green,
      blue: this.state.blue
    })
  }

  onGreenChange(tableConfig) {
    this.setState({
      activeTable: {},
      red: this.state.red,
      green: tableConfig,
      blue: this.state.blue
    })

  }

  addCellWithValue = function (direction, value) {
    // do something
  }

  render = function () {
    return (
      <div className="App">
        <section className="table-container">
          <div className="tbl red-table">
            <Table settings={this.state.red}
              configure={this.onRedConfigure}
              confirm={this.onRedChange} />
          </div>
          <div className="tbl green-table">
            <Table settings={this.state.green} className="green-table" />
          </div>
          <div className="tbl blue-table">
            <Table settings={this.state.blue} className="blue-table" />
          </div>
        </section>
        <section className="config-container">

          <div className="config-panel">
            {/* { this.state.activeTable !== {} ? <Configuration settings={this.activeTable}/> : null } */}
            <Configuration settings={this.activeTable} />
          </div>
        </section>
      </div>
    );
  };
}

export default App;
