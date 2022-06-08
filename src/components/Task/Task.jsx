import React, { useState } from "react";
import { AddTask } from "../AddTask";
import { Counter } from "../Counter";
import styles from "./task.module.css";

const Task = () => {

  const [todoList,setTodoList]=useState([]);

  const getdata=(todo)=>{
    setTodoList([...todoList,todo])
}

  // NOTE: do not delete `data-testid` key value pair
  return (
    <li data-testid="task" className={styles.task}>
      <input type="checkbox" data-testid="task-checkbox" />
      <div data-testid="task-text">
      <AddTask getdata={getdata}/>
        {todoList.map((e)=>(
          <div>{e}</div>
        ))}
      </div>
      {/* Counter here */}
      <Counter/>
      <button data-testid="task-remove-button">X</button>
    </li>
  );
};

export default Task;
