import { configureStore } from "@reduxjs/toolkit";
import TodoReducers from "../reducers/TodoReducers";

const Store = configureStore({reducer:TodoReducers});

export default Store;
