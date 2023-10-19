export const addTodo = (title) => ({
  type: "add-todo",
  title,
});

export const updateTodo = (id, title) => ({
  type: "update-todo",
  id,
  title,
});

export const statusTodo = (id) => ({
  type: "status-todo",
  id,
});

export const deleteTodo = (id) => ({
  type: "delete-todo",
  id,
});

export const setLocalStorage=(todoList)=>{
    localStorage.setItem('todokey',JSON.stringify(todoList));
    return{
        type:"set-local-storage",
        payload:todoList,
    }
}

export const getLocalStorage=()=>{
    const data=localStorage.getItem('todokey');
    const todoStored=data? JSON.parse(data):[];
    return{
        type:"get-local-storage",
        payload:todoStored,
    }
}