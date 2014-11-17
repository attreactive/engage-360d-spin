/**
 * Engage-360D Spin
 * @jsx React.DOM
 */

var React = require("react");
var Spinner = require('spin.js');

require('./Spin.less');

var Spin = React.createClass({
  getDefaultProps: function() {
    return {
      lines: 9,
      length: 4,
      width: 2,
      radius: 4
    };
  },

  componentDidMount: function() {
    var spinner = new Spinner(this.props);
    spinner.spin(this.getDOMNode());
  },

  render: function() {
    return (
      <span className="Spin" />
    );
  }
});

module.exports = Spin;
