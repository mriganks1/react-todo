import React, { Component } from "react";
import "./TodoList.css";
import Todo from "./../Todo/Todo";

class TodoList extends Component {
  render() {
    return (
      <div className="todo-list-wrapper">
        <p className="heading">Tasks to do</p>
        {this.props.todoList.length === 0 && (
          <p className="heading">No tasks saved</p>
        )}
        {this.genTodoList()}
      </div>
    );
  }

  genTodoList() {
    return this.props.todoList.map(todo => (
      <Todo
        key={todo.id}
        {...todo}
        change={() => {
          this.props.change(todo.id);
        }}
        delete={() => this.props.delete(todo.id)}
      />
    ));
  }
}

export default TodoList;
