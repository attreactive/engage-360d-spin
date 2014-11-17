/**
 * Engage-360D Spin
 * @jsx React.DOM
 */

var React = require("react");
var Spin = require('./Spin');

require('./LargeSpin.less');

var LargeSpin = React.createClass({
  getDefaultProps: function() {
    return {
      lines: 11,
      length: 30,
      width: 15,
      radius: 25
    };
  },

  render: function() {
    return (
      <div className="LargeSpin">
        <Spin lines={this.props.lines}
              length={this.props.length}
              width={this.props.width}
              radius={this.props.radius} />
      </div>
    );
  }
});

module.exports = LargeSpin;
