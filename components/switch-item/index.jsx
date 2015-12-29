import React, {PropTypes} from 'react';
function noop() {}

const SwitchItem = React.createClass({
  propTypes: {
    prefixCls: PropTypes.string,
    name: PropTypes.string,
    checked:PropTypes.bool,
    onChange: PropTypes.func,
  },
  getDefaultProps() {
    return {
      prefixCls: 'am',
      checked: false,
      onChange: noop,
    };
  },
  _onSwitchChange(e) {
    const checked = e.target.checked;
    this.props.onChange.call(this, checked);
  },
  render(){
    let {prefixCls} = this.props;

    return (
      <div className={prefixCls + '-list-item'}>
        <div className={prefixCls + '-list-content'}>{this.props.children}</div>
        <div className={prefixCls + '-switch'}>
          <input type="checkbox" name={this.props.name} className={prefixCls + '-switch-checkbox'} checked={this.props.checked} onChange={this._onSwitchChange}/>
          <label className={prefixCls + '-switch-label'}>
            <div className={prefixCls + '-switch-inner'}></div>
            <div className={prefixCls + '-switch-switch'}></div>
          </label>
        </div>
      </div>
    );
  }
});

module.exports = SwitchItem;