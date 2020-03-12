import React from 'react';
import './Table.css'
import { TableRow } from './TableRow';

export class Table extends React.Component {
  tableConfig;

  numCellsNeeded = 0;
  numRowsNeeded = 0;

  startNum = 0;
  endNum = 0;
  step = 1

  rows = [];
  textVertDir = true;
  textHorizDir = true;

  constructor(props) {
    super(props)

    this.initTable(this.props);
  }

  /**
   * Set some internal variables based on the incoming props
   * @param {*} settings 
   */
  initTable(settings) {
    this.tableConfig = settings.settings;

    this.isLtr = settings.settings.d.charAt(0) === "L";
    this.isUp = settings.settings.d.charAt(4) === "U";
    this.startNum = settings.settings.n;
    this.endNum = settings.settings.m;
    this.step = settings.settings.x;

    this.setCellsAndRowsNeeded(settings.settings.n, settings.settings.m, settings.settings.x);
    this.buildAllTableRows();
  }

  /**
   * Helper to determine how many total cells are needed, 
   * and how many rows of five are needed for the table.
   * @param {*} min 
   * @param {*} max 
   * @param {*} step 
   */
  setCellsAndRowsNeeded(min, max, step) {
    this.numCellsNeeded = Math.ceil((max - min + 1) / step);
    this.numRowsNeeded = Math.ceil(this.numCellsNeeded / 5);
  }

  /**
   * Builds all of the individual rows of the table
   * This method does not work for negative step values (counting down)
   */
  buildAllTableRows() {
    // temp variable for flopping purposes
    let isLtr = this.isLtr;

    // make an array of all the values
    let range = []
    for (let i = 0; i < this.numCellsNeeded; i++) {
      range.push(this.startNum + (i * this.step));
    }

    // now cut it up into rows of five
    for (let j = 0; j < this.numRowsNeeded; j++) {
      let row = range.splice(0, 5);
      // reverse the array of its Right-to-Left
      if (!isLtr) {
        row = row.sort((a, b) => { return b - a });
        // pad the null values
        while (row.length < 5) {
          row.unshift(null);
        }
      } else {
        while (row.length < 5) {
          row.push(null);
        }
      }
      // add the row to the array based on vertical direction
      if (this.isUp) {
        this.rows.unshift(row);
      } else {
        this.rows.push(row);
      }
      // flop the cell direction at the end of a line
      isLtr = !isLtr
    }
  }

  onConfigure(event) {
    this.props.configure(this.tableConfig);
  }

  render() {
    const tableRows = this.rows.map((value) => {
      return <TableRow key={Math.random()} rowArr={value} />;
    })
    return (
      <div className="table">
        <section className="rows">
          {tableRows}
        </section>
        <section className="info">
          <button className="configure-btn"
            onClick={() => this.props.configure(this.tableConfig)}>
            Configure
          </button>
          <span className="width-indicator">
            {this.props.settings.w}%
          </span>
        </section>
      </div>
    );
  }
}