import React, { Component } from 'react';
import { Table } from './table/Table'
import './App.css';

class App extends Component {
  state = {}

  directions = {
    ltrUp: 'LTR-UP',
    rtlUp: 'RTL-UP',
    ltrDown: 'LTR-DOWN',
    rtlDown: 'RTL-DOWN',
  };

  setInitialState = function () {
    this.state =
    {
      red: {
        n: 8,
        x: 1,
        m: 29,
        w: 20,
        direction: this.directions.ltrUp
      },
      green: {
        n: 231,
        x: 1,
        m: 247,
        w: 30,
        direction: this.directions.ltrUp
      },
      blue: {
        n: 47,
        x: 2,
        m: 81,
        w: 40,
        direction: this.directions.rtlUp
      }
    };
  }

  addCellWithValue = function (direction, value) {
    // do something
  }
  render = function () {
    if (this.state = {}) {
      this.setInitialState();
    }
    return (
      <div className="App">
        <div className="tbl red-table">
          <Table settings={this.state.red} />
        </div>
        <div className="tbl green-table">
          <Table settings={this.state.green} className="green-table" />
        </div>
        <div className="tbl blue-table">
          <Table settings={this.state.blue} className="blue-table" />
        </div>
      </div>
    );
  };
}

export default App;
