import React,{useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, statusTodo, updateTodo,setLocalStorage,getLocalStorage } from "../../redux/actions";
import TodoItems from "../todoitems/TodoItems";
import "./TodoLists.css";

const TodoLists = () => {
  const todos = useSelector((state) => state.todoList);
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(getLocalStorage(todos))
  },[])

  useEffect(()=>{
    dispatch(setLocalStorage(todos))
  },[todos,dispatch])

  return (
    <ul className="todoListContainer">
      {todos.map((eachTodo) => (
        <TodoItems
          key={eachTodo.id}
          todo={eachTodo}
          delet={() => dispatch(deleteTodo(eachTodo.id))}
          check={() => dispatch(statusTodo(eachTodo.id))}
        />
      ))}
    </ul>
  );
};

export default TodoLists;
