import React from 'react';
import './Table.css'
import { TableRow } from './TableRow';

export class Table extends React.Component {
  render() {
    console.info('props', this.props.settings)
    const cellArrLen = 20;

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
          <button>
            Configure
          </button>
          <span>
            20%
          </span>
        </section>
      </div>
    );
  }
}