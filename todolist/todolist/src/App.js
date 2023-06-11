import logo from "./logo.svg";
import "./App.css";
import React, { useCallback, useState, useRef } from "react";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

const initData = [
  {
    id: 1,
    previous: "리액트의 기초 알아보기",
    text: "리액트의 기초 알아보기",
    checked: true,
  },
  {
    id: 2,
    previous: "컴포넌트 스타일링해 보기",
    text: "컴포넌트 스타일링해 보기",
    checked: true,
  },
  {
    id: 3,
    previous: "일정 관리 앱 만들어 보기",
    text: "일정 관리 앱 만들어 보기",
    checked: false,
  },
];

function App() {
  const [todos, setTodos] = useState(initData);
  const nextId = useRef(4);
  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos]
  );
  const onEdit = useCallback(
    (text) => {
      const todo = {
        text,
      };
      setTodos(todos.map(todo));
    },
    [todos]
  );
  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id != id));
    },
    [todos]
  );
  const onUndo = useCallback(
    (id, previous) => {
      const todo = {
        id,
        previous,
      };
      setTodos(todos.map(todos.map(todo)));
    },
    [todos]
  );
  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo
        )
      );
    },
    [todos]
  );
  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList
        todos={todos}
        onRemove={onRemove}
        onEdit={onEdit}
        onUndo={onUndo}
        onToggle={onToggle}
      ></TodoList>
    </TodoTemplate>
  );
}

export default App;
