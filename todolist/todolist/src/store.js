import { configureStore, createSlice } from "@reduxjs/toolkit";

var nextId = 4;
let todos = createSlice({
  name: "todos",
  initialState: [
    {
      id: 1,
      previous: "06.12 그래픽스 시험",
      text: "06.12 그래픽스 시험",
      checked: true,
      able: false,
    },
    {
      id: 2,
      previous: "06.13 웹프 텀프 최종",
      text: "06.13 웹프 텀프 최종",
      checked: true,
      able: false,
    },
    {
      id: 3,
      previous: "06.15 웹프 시험",
      text: "06.15 웹프 시험",
      checked: false,
      able: false,
    },
  ],
  reducers: {
    onToggle(state, action) {
      console.log(state);
      console.log(action);
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, checked: !todo.checked } : todo
      );
    },
    onInsert(state, action) {
      const todo = {
        id: nextId,
        previous: action.payload,
        text: action.payload,
        checked: false,
        able: false,
      };
      nextId += 1;
      return state.concat(todo);
    },
    onEdit(state, action) {
      const { id, able, text } = action.payload;
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, able: !todo.able, text: text }
          : todo
      );
    },
    onUndo(state, action) {
      const { id, previous } = action.payload;
      console.log(previous);
      return state.map((todo) =>
        todo.id === id ? { ...todo, text: previous } : todo
      );
    },
    onRemove(state, action) {
      const id = action.payload;
      return state.filter((todo) => todo.id !== id);
    },
  },
});

export default configureStore({
  reducer: {
    todos: todos.reducer,
  },
});

export let { onToggle, onInsert, onRemove, onEdit, onUndo } = todos.actions;
