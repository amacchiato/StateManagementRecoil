import { ChangeEventHandler, SyntheticEvent, useState } from "react";
import { useSetRecoilState, SetterOrUpdater } from "recoil";
import { todoListState } from "./todo-list-state";


export function TodoItemCreator() {
  const [inputValue, setInputValue] = useState("");
  const setTodoList: never[] = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
  };

  const handleOnChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleOnChange} />
      <button onClick={addItem}>Add</button>
    </div>
  );
}

let id = 0;
function getId() {
  return id++;
}
