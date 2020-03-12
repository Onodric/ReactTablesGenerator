import React, { Component } from 'react';
import './TableRow.css';
import { TableCell } from './TableCell';

export class TableRow extends Component {
  cells = []

  constructor(props) {
    super(props);
    this.cells = props.rowArr;
  }

  // We give a random key b/c some cels are duplicates (null)
  render() {
    const rowCells = this.cells.map((value, idx) => {
      return <TableCell key={Math.random()} 
                        cellValue={value} />
    })
    return (
      <div className="table-row">
        {rowCells}
      </div>
    );
  }
}