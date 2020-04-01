import React, { Component } from "react";
import "./Todo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackspace } from "@fortawesome/free-solid-svg-icons";

class Todo extends Component {
  render() {
    return (
      <div className="todo-wrapper">
        <label className="todo-item" htmlFor={"todo-" + this.props.id}>
          <input
            type="checkbox"
            id={"todo-" + this.props.id}
            checked={this.props.complete}
            onChange={() => this.props.change()}
          />
          <span>{this.props.item}</span>
        </label>
        <button className="icon-btn" onClick={() => this.props.delete()}>
          <FontAwesomeIcon icon={faBackspace} size="lg" color="#999999" />
        </button>
      </div>
    );
  }
}

export default Todo;
