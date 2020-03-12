import React, { Component } from 'react';
import './TableCell.css';

export class TableCell extends Component {
  render() {
    return (
      <div className={this.props.cellValue == null ? "table-cell no-value" : "table-cell"} >
        <span className="contents">
          {this.props.cellValue}
        </span>
      </div>
    );
  }
}
