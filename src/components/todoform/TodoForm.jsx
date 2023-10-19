import React, { useEffect, useState } from "react";

import TodoButton from "../todobutton/TodoButton";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/actions";
import './TodoForm.css'

function TodoForm() {
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();


  const saveTodo = (event) => {
    event.preventDefault();
    if (inputText.trim() !== "") {
      dispatch(addTodo(inputText));
      setInputText("");
    }
  };

  return (
    <form onSubmit={saveTodo} className="formContainer">
      <input
      className="inputStyle"
        type="text"
        placeholder="Your Todo"
        value={inputText}
        onChange={(event) => setInputText(event.target.value)}
      />
      <div>
        <TodoButton
          type={"submit"}
          onclick={saveTodo}
          value={"Add"}
          classname={"addButton"}
        />
      </div>
    </form>
  );
}

export default TodoForm;
