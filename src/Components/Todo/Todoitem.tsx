import React from "react";
import { ITodoItem } from "./Todos";

export const Todoitem = ({ id, title, status }: ITodoItem) => {
  return (
    <div style={{ width: "500px", margin: "auto" }}>
      <span style={{ width: "300px" }}>{title} - </span>
      <button> {` ${status}`}</button>
      <button>Edit</button>
      <button>delete</button>
    </div>
  );
};
