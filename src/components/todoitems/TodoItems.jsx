import React, { useState } from "react";
import TodoButton from "../todobutton/TodoButton";
import { useSelector, useDispatch } from "react-redux";
import { updateTodo } from "../../redux/actions";
import "./TodoItems.css";

const TodoItems = ({ todo, delet, check }) => {
  const [editStatus, setEditStatus] = useState(null);
  const [editText, setEditText] = useState(todo.title);
  const dispatch = useDispatch();

  const todos = useSelector((state) =>
    state.todoList.find((eachTodo) => eachTodo.id === editStatus)
  );

  const editHandle = () => {
    setEditStatus(todo.id);
  };

  const saveEditTodo = (event) => {
    event.preventDefault();
    dispatch(updateTodo(todos.id, editText));
    setEditStatus(null);
  };

  return (
    <li className="todoItemsContainer">
      {editStatus ? (
        <form onSubmit={saveEditTodo}>
          <input
            className="editInput"
            type="text"
            value={editText}
            onChange={(event) => setEditText(event.target.value)}
            onBlur={saveEditTodo}
            autoFocus
          />
        </form>
      ) : (
        <div className="todoItems">
          <div>
            <input
              type="checkbox"
              id={todo.id}
              className="checkboxStyling"
              onChange={check}
              checked={todo.status}
            />
            <label htmlFor={todo.id} className="title">
              {todo.title}
            </label>
          </div>

          <div>
            {todo.status && <label className="completed">completed</label>}
            <TodoButton
              classname={"buttons"}
              onclick={editHandle}
              value={
                <i className="fa-regular fa-pen-to-square todoIconStyle"></i>
              }
            />
            <TodoButton
              classname={"buttons"}
              onclick={delet}
              value={<i className="fa-solid fa-trash todoIconStyle"></i>}
            />
          </div>
        </div>
      )}
    </li>
  );
};

export default TodoItems;
