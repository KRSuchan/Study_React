import React from "react";
import "../index.css";
import cn from "classnames";

import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
  MdEdit,
  MdUndo,
} from "react-icons/md";

import { onToggle, onRemove, onUndo, onEdit } from "./../store";
import { useDispatch } from "react-redux";

const TodoListItem = ({ todo }) => {
  const { text, checked, id, able } = todo;
  let dispatch = useDispatch();
  return (
    <div
      className="TodoListItem"
      onClick={() => {
        dispatch(onToggle(id));
      }}
    >
      <div className={cn("checkbox", { checked })}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        {able ? (
          <input type="text" size="50" className="text" enabled />
        ) : (
          <input type="text" size="50" className="text" disabled value={text} />
        )}
      </div>

      <div
        className="edit"
        onClick={(e) => {
          dispatch(onEdit(id, able));
          e.stopPropagation();
        }}
      >
        <MdEdit />
      </div>
      <div
        className="undo"
        onClick={(e) => {
          dispatch(onUndo(id));
          e.stopPropagation();
        }}
      >
        <MdUndo />
      </div>
      <div
        className="remove"
        onClick={(e) => {
          dispatch(onRemove(id));
          e.stopPropagation();
        }}
      >
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListItem;
