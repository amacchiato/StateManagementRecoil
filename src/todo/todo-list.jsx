import { useRecoilValue } from "recoil";
import { todoListState } from "./todo-list-state";
import { filteredTodoListState } from "./filtered-todo-list-state";
import { TodoItemCreator } from "./todo-item-creator";
import { TodoItem } from "./todo-item";

export function TodoList() {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <>
      {/* <TodoListStats /> */}
      {/* <TodoListFilters /> */}
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
}
