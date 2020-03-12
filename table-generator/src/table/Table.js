import React from 'react';
import './Table.css'
import { TableRow } from './TableRow';

export class Table extends React.Component {
  tableConfig = ""
  numCellsNeeded = 0;
  numRowsNeeded = 0;
  sizeOfArray = 0;
  
  constructor(props) {
    super(props)
    this.tableConfig = props.settings;
    this.setCellsAndRowsNeeded(props.settings.n, 
                               props.settings.m, 
                               props.settings.x)
  }

  setCellsAndRowsNeeded(min, max, step){
    this.numCellsNeeded = Math.floor((max - min + 1) / step);
    this.numRowsNeeded = Math.ceil(this.numCellsNeeded / 5);
    this.sizeOfArray = this.numRowsNeeded * 5;
  }

  onConfigure(event) {
    this.props.configure(this.tableConfig);
  }

  render() {
    console.info('props', this.props.settings)
    return (
      <div className="table">
        <section className="rows">
          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
        </section>
        <section className="info">
          <button className="configure-btn"
                  onClick={(this.onConfigure.bind(this))}>
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