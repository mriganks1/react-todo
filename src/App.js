import React, { Component } from "react";
import "./App.css";
import TodoList from "./components/TodoList/TodoList";
import AddTodo from "./components/AddTodo/AddTodo";

class App extends Component {
  state = {
    todos: []
  };

  handleSave = todo => {
    this.setState(prevState => {
      const newState = [...prevState.todos, this.genTodo(todo)];
      return { todos: newState };
    });
  };

  handleChange = id => {
    const newState = this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.complete = !todo.complete;
      }
      return todo;
    });
    this.setState({ todos: newState });
  };

  handleDelete = id => {
    this.setState({ todos: this.state.todos.filter(todo => todo.id !== id) });
  };

  render() {
    return (
      <div className="app-container">
        <AddTodo value={this.state.addTodo} onSave={this.handleSave} />
        <TodoList
          todoList={this.state.todos}
          change={this.handleChange}
          delete={this.handleDelete}
        />
      </div>
    );
  }

  genTodo(str) {
    return {
      item: str,
      id: this.state.todos.length,
      complete: false
    };
  }
}

export default App;
