import React, { Component } from "react";
import "./AddTodo.css";

class AddTodo extends Component {
  state = {
    value: ""
  };

  render() {
    return (
      <div className="add-todo-wrapper">
        <input
          className="border-input"
          type="text"
          placeholder="Enter task to add"
          value={this.state.value}
          onChange={e => {
            this.setState({ value: e.target.value });
          }}
          onKeyPress={e => {
            if (e.which === 13 && e.target.value.length > 0) {
              this.setState({ value: e.target.value });
              this.props.onSave(e.target.value);
              this.clearValue();
            }
          }}
        />
        <button
          className="save-btn"
          onClick={e => {
            this.props.onSave(this.state.value);
            this.clearValue();
          }}
          disabled={this.state.value.length === 0}
        >
          Save
        </button>
      </div>
    );
  }

  clearValue = () => {
    this.setState({ value: "" });
  };
}

export default AddTodo;
