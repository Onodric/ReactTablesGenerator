import React, { Component } from 'react';
import './TableCell.css';

export class TableCell extends Component {
  getContents = () => Math.floor(Math.random() * 20);

  render() {
    // initial state

    return (
      <div className="table-cell">
        <span className="contents">
          {this.getContents()}
        </span>
      </div>
    );
  }
}