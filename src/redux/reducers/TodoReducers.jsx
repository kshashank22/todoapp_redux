import { initialState } from "../actions/constants";
import { v4 as uuidv4 } from "uuid";

const TodoReducers = (state = initialState, action) => {
  switch (action.type) {
    case "add-todo":
      return {
        todoList: [
          ...state.todoList,
          { id: uuidv4(), title: action.title, status: false },
        ],
      };
    case "update-todo":
      return {
        todoList: state.todoList.map((eachTodo) =>
          eachTodo.id === action.id
            ? { ...eachTodo, title: action.title }
            : eachTodo
        ),
      };
    case "status-todo":
      return {
        todoList: state.todoList.map((eachTodo) =>
          eachTodo.id === action.id
            ? { ...eachTodo, status: !eachTodo.status }
            : eachTodo
        ),
      };
    case "delete-todo":
      return {
        todoList: state.todoList.filter(
          (eachTodo) => eachTodo.id !== action.id
        ),
      };
    case "set-local-storage":
      return {
        todoList: action.payload,
      };
    case "get-local-storage":
      return {  
        todoList: action.payload,
      };
    default:
      return state;
  }
};

export default TodoReducers;
