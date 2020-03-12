import React, { Component } from 'react';
import './Configuration.css';

export class Configuration extends Component {
  tableName = '';
  min = 0;
  max = 0;
  step = 0;
  width = 20;
  direction = 'lu'

  constructor(props) {
    super(props);
    this.initFields(props.settings);
  }

  initFields(settings) {
    this.tableName = settings && settings.tableName ? settings.tableName : null;
    this.min = settings && settings.n ? settings.n : null;
    this.max = settings && settings.m ? settings.m : null;
    this.step = settings && settings.x ? settings.x : null;
    this.width = settings && settings.w ? settings.w : null;
    this.direction = settings && settings.d ? settings.d : null;
  }

  onNChange(event) {
    this.min = event.target.value;
  }

  render() {
    // initial state
    return (
      <div className="config-fields">
        <div className="label-field">
          <label className="config-label">Table: </label>
          <span className={this.tableName}>{this.tableName}</span>
        </div>
        <div className="label-field">
          <label className="config-label">N =</label>
          <input type="number"
                 step="1"
                 className="config-field"
                 value={this.activeTable}
                 onChange={this.onNChange.bind(this)} />
        </div>
        <div className="label-field">
          <label className="config-label">X =</label>
          <input type="number"
                 step="1"
                 className="config-field"
                 value={this.activeTable} />
        </div>
        <div className="label-field">
          <label className="config-label">M =</label>
          <input type="number"
                 step="1"
                 className="config-field"
                 value={this.activeTable} />
        </div>
        <div className="label-field">
          <label className="config-label">W =</label>
          <input type="number"
                 step="1"
                 className="config-field"
                 value={this.activeTable} />
          <span className="config-label">%</span>
        </div>
        <div className="label-field">
          <label className="config-label">D =</label>
          <select className="config-field"
                  value={this.activeTable}>
            <option value="LTR-UP">LTR-UP</option>
            <option value="RTL-UP">LTR-UP</option>
            <option value="LTR-DOWN">LTR-UP</option>
            <option value="RTL-DOWN">LTR-UP</option>
          </select>
        </div>
        <div className="button-row">
          <button>OK</button>
          <button>Cancel</button>
        </div>
      </div>
    );
  }
}