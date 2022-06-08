import React, { useState } from "react";
import styles from "./addTask.module.css";

const AddTask = ({getdata}) => {
  const [text,setText]=useState("")
  // NOTE: do not delete `data-testid` key value pair
  return (
    <div className={styles.todoForm}>
      <input  onChange={(e)=>{
// console.log(e.target.value)
setText(e.target.value)
        }} data-testid="add-task-input" type="text"  placeholder="Add Task..."/>
      <button data-testid="add-task-button" onClick={()=>{
            getdata(text)
        }}>+</button>
    </div>
  );
};

export default AddTask;
