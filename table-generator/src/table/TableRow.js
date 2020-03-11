import React, { Component } from 'react';
import './TableRow.css';
import { TableCell } from './TableCell';

export class TableRow extends Component {
  render() {
    return (
      <div className="table-row">
          <TableCell />
          <TableCell />
          <TableCell />
          <TableCell />
          <TableCell />
      </div>
    );
  }
}