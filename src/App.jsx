import React from 'react';
import { RecoilRoot } from "recoil";
import "./styles.css";
import { TodoList } from "./todo/todo-list";
import { TodoItemCreator } from "./todo/todo-item-creator";

export default function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <TodoList />
      </div>
    </RecoilRoot>
  );
}
