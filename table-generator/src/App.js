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

  /**
   * Default state object. This could be abstracted to a separate file.
   */
  state = {
    activeTable: null,
    showComponent: false,
    showRed: true,
    showGreen: true,
    showBlue: true,
    red: {
      tableName: "red",
      n: 8,
      x: 1,
      m: 29,
      w: 20,
      d: this.directions.ltrUp
    },
    green: {
      tableName: "green",
      n: 231,
      x: 1,
      m: 247,
      w: 30,
      d: this.directions.ltrUp
    },
    blue: {
      tableName: "blue",
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

  /**
   * The configures all follow the same pattern: wait for rendering,
   * then show the configuration component using the correct state property
   * an animation here could ease the transition.
   */
  onRedConfigure() {
    this.waitForStateChange();
    this.setState({
      activeTable: this.state.red,
      showComponent: !this.state.showComponent,
      confirm: this.onRedChange,
    })
  }

  /**
   * Table changes are all handled similarly: set the active table to null,
   * close the configuration, then force a redraw.
   * an animation here could ease the transition.
   * @param {*} tableConfig 
   */
  onRedChange(tableConfig) {
    this.setState({ showRed: false });
    if (this.state.activeTable) {
      setTimeout(() => {
        this.setState({
          activeTable: null,
          showRed: true,
          showComponent: false,
          confirm: null,
          red: tableConfig,
        });
      }, 10);
    }
  }

  onBlueConfigure() {
    this.waitForStateChange();
    this.setState({
      activeTable: this.state.blue,
      showComponent: !this.state.showComponent,
      confirm: this.onBlueChange,
    })
  }

  onBlueChange(tableConfig) {
    this.setState({ showBlue: false });
    if (this.state.activeTable) {
      setTimeout(() => {
        this.setState({
          activeTable: null,
          showBlue: true,
          showComponent: false,
          confirm: null,
          blue: tableConfig
        })
      }, 10);
    }
  }

  onGreenConfigure() {
    this.waitForStateChange();
    this.setState({
      activeTable: this.state.green,
      showComponent: !this.state.showComponent,
      confirm: this.onGreenChange,
    })
  }

  onGreenChange(tableConfig) {
    this.setState({ showGreen: false });
    if (this.state.activeTable) {
      setTimeout(() => {
        this.setState({
          activeTable: null,
          showGreen: true,
          showComponent: false,
          confirm: null,
          green: tableConfig,
        })
      }, 10);
    }
  }

  waitForStateChange() {
    if (this.state.showComponent) {
      setTimeout(() => {
        this.setState({ showComponent: !this.state.showComponent });
      }, 10);
    }
  }

  render = function () {
    return (
      <div className="App">
        <section className="table-container">
          {this.state.showRed ? <div style={{width: `${this.state.red.w}%`}} className="tbl red-table">
            <Table settings={this.state.red}
              configure={this.onRedConfigure} />
          </div> : null}
          {this.state.showGreen ? <div style={{width: `${this.state.green.w}%`}} className="tbl green-table">
            <Table settings={this.state.green}
              configure={this.onGreenConfigure} />
          </div> : null}
          {this.state.showBlue ? <div style={{width: `${this.state.blue.w}%`}} className="tbl blue-table">
            <Table settings={this.state.blue}
              configure={this.onBlueConfigure} />
          </div> : null}
        </section>
        <section className="config-container">
          <div className="config-panel">
            {this.state.showComponent ? <Configuration settings={this.state.activeTable}
              confirm={this.state.confirm} cancel={() => {this.setState({showComponent: !this.state.showComponent})}} /> : null}
          </div>
        </section>
      </div>
    );
  };
}

export default App;
