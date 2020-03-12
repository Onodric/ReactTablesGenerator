import React from 'react';
import './Table.css'
import { TableRow } from './TableRow';

export class Table extends React.Component {
  tableConfig;

  numCellsNeeded = 0;
  numRowsNeeded = 0;
  sizeOfArray = 0;

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

  setCellsAndRowsNeeded(min, max, step){
    this.numCellsNeeded = Math.ceil((max - min + 1) / step);
    this.numRowsNeeded = Math.ceil(this.numCellsNeeded / 5);
    this.sizeOfArray = this.numRowsNeeded * 5;
  }

  buildAllTableRows() {
    let isLtr = this.isLtr;
    let range = []
    for (let i = 0; i < this.numCellsNeeded; i++) {
      range.push(this.startNum + (i * this.step));
    }
    for (let j = 0; j < this.numRowsNeeded; j++) {
      let row = range.splice(0, 5);
      if (!isLtr) {
        row = row.sort((a, b) => {return b - a});
        while (row.length < 5) {
          row.unshift(null);
        }
      } else {
          while (row.length < 5) {
            row.push(null);
          }
      }
      if (this.isUp) {
        this.rows.unshift(row);
      } else {
        this.rows.push(row);
      }
      isLtr = !isLtr
    }
  }

  buildRow(isLtr, startNum, rowMult, endNum) {
    let tempRow = [];
    for (let i = startNum; i < (startNum + 5) * this.step; i += this.step) {
      // if we go to the left, we need to unshift
      if (isLtr) {
        tempRow.unshift(i*rowMult <= endNum ? i*rowMult : null);
      } else {
        // else we push
        tempRow.push(i*rowMult <= endNum ? i*rowMult : null);
      }
    }
    return tempRow
  }

  onConfigure(event) {
    this.props.configure(this.tableConfig);
  }

  render() {
    console.info('table rerender with props: ', this.props.settings);
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