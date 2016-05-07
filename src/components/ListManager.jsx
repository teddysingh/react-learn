var React = require('react');
var List = require('./List.jsx');

var ListManager = React.createClass({
  getInitialState: function() {
    return {
      items: [],
      newItemText: ''
    };
  },

  handleSubmit: function(e) {
    e.preventDefault();

    // Classes have properties (immutable data), state (mutable data)
    var currentItems = this.state.items;
    currentItems.push(this.state.newItemText);

    this.setState(
      {
        items: currentItems,
        newItemText: ''
      }
    );
  },

  // Handles key-strokes
  onChange: function(e) {
    this.setState({newItemText: e.target.value});
  },

  render: function() {
    return (
      <div>
      some text
          <h3>{this.props.title}</h3>
          <form onSubmit={this.handleSubmit}>
            <input onChange={this.onChange} value={this.state.newItemText} />
            <button>Add</button>
            <List items={this.state.items} />
          </form>
      </div>
    );
  }
});

module.exports = ListManager;
