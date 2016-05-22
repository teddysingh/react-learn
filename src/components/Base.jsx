var React = require('react');

Base = React.createClass({
  render: function() {
    return(
    <div>
      <h1>My Base Header</h1>
      {this.props.children}
      <h2>Footer</h2>
    </div>
  );
  }
});

module.exports = Base;
