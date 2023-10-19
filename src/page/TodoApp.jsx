import React from "react";
import TodoForm from "../components/todoform/TodoForm";
import { Provider } from "react-redux";
import Store from "../redux/store/Store";
import TodoLists from "../components/todolists/TodoLists";
import "./TodoApp.css";

function TodoApp() {
  return (
    <Provider store={Store}>
      <div className="todoContainer">
        <h1>Todo App</h1>
        <TodoForm />
        <TodoLists />
      </div>
    </Provider>
  );
}

export default TodoApp;
