import React, { useState, useCallback } from "react";
import "../index.css";
import { onInsert } from "./../store";
import { useDispatch } from "react-redux";

import { MdAdd } from "react-icons/md";

const TodoInsert = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  });
  const onSubmit = useCallback(
    (e) => {
      dispatch(onInsert(value));
      setValue("");
      e.preventDefault();
    },
    [onInsert, value]
  );
  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
      ></input>
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
