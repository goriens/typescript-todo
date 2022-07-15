import axios, { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import { Header } from "../Counter/Header";
import { TodoInput } from "./TodoInput";
import { Todoitem } from "./Todoitem";

export interface ITodoItem {
  id: number;
  title: string;
  status: boolean;
}

export const Todos = () => {
  const [todos, setTodos] = useState<ITodoItem[]>([]);

  const handleAdd = (title: string) => {
    const paylaod = {
      title,
      status: false,
    };
    axios.post("http://localhost:8080/todos", paylaod).then(getTodos);
    // setTodos([...todos, paylaod]);
  };
  const getTodos = () => {
    axios
      .get("http://localhost:8080/todos")
      .then((r: AxiosResponse<ITodoItem[]>) => {
        const { data } = r;
        setTodos(data);
      });
    // .then(({ data }: { data: ITodoItem[] }) => {
    //   setTodos(data);
    // });
  };
  useEffect(() => {
    getTodos();
  }, []);
  return (
    <div>
      <Header label="Todos" />
      <TodoInput onClick={handleAdd} />
      {todos.length > 0 &&
        todos.map((item) => {
          return <Todoitem key={item.id} {...item} />;
        })}
    </div>
  );
};
// 1:31
