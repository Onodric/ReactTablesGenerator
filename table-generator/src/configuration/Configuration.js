import React, { Component } from 'react';
import './Configuration.css';

export class Configuration extends Component {
  tableName = '';
  min = 0;
  max = 0;
  step = 0;
  width = 20;
  direction = 'LTR-UP'

  constructor(props) {
    super(props);

    this.state = props;
    this.initFields(props.settings);
  }

  /**
   * Initialize the show form fields, if there is a value to populate the field with
   * @param {*} settings 
   */
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

  onXChange(event) {
    this.step = event.target.value;
  }

  onMChange(event) {
    this.max = event.target.value;
  }

  onWChange(event) {
    this.width = event.target.value;
  }

  onDChange(event) {
    this.direction = event.target.value;
  }

  /**
   * Prevent default form submit and package values for use in the table
   * @param {*} event 
   */
  onConfirm(event) {
    event.preventDefault();
    this.props.confirm({
      tableName: this.tableName,
      n: parseInt(this.min),
      x: parseInt(this.step),
      m: parseInt(this.max),
      w: parseInt(this.width),
      d: this.direction,
    });
  }

  onCancel(event) {
    event.preventDefault();
    this.state.cancel();
  }

  /**
   * This component could be broken down and provided with custom validations in the number fields
   */
  render() {
    return (
      <form id="config-form" className="config-fields">
        <div className="label-field table-name">
          <label className="config-label">Table: </label>
          <span className={this.tableName}>{this.tableName}</span>
        </div>
        <div className="label-field">
          <label className="config-label">N =</label>
          <input type="number"
                 step="1"
                 className="config-field"
                 defaultValue={this.min}
                 onChange={this.onNChange.bind(this)} />
        </div>
        <div className="label-field">
          <label className="config-label">X =</label>
          <input type="number"
                 step="1"
                 className="config-field"
                 defaultValue={this.step} 
                 onChange={this.onXChange.bind(this)}/>
        </div>
        <div className="label-field">
          <label className="config-label">M =</label>
          <input type="number"
                 step="1"
                 className="config-field"
                 defaultValue={this.max} 
                 onChange={this.onMChange.bind(this)}/>
        </div>
        <div className="label-field">
          <label className="config-label">W =</label>
          <input type="number"
                 step="1"
                 min="10"
                 max="100"
                 className="config-field"
                 defaultValue={this.width} 
                 onChange={this.onWChange.bind(this)}/>
          <span className="config-label">%</span>
        </div>
        <div className="label-field">
          <label className="config-label">D =</label>
          <select className="config-field"
                  defaultValue={this.direction}
                  onChange={this.onDChange.bind(this)}>
            <option value="LTR-UP">LTR-UP</option>
            <option value="RTL-UP">RTL-UP</option>
            <option value="LTR-DOWN">LTR-DOWN</option>
            <option value="RTL-DOWN">RTL-DOWN</option>
          </select>
        </div>
        <div className="button-row">
          <button onClick={this.onConfirm.bind(this)}>OK</button>
          <button onClick={this.onCancel.bind(this)}>Cancel</button>
        </div>
      </form>
    );
  }
}