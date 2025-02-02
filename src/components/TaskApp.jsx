import React from "react";
// import AddTask from "./AddTask/AddTask";
import { Task } from "./Task";

import styles from "./taskApp.module.css";

import { TaskHeader } from "./TaskHeader";

const TaskApp = () => {
  // NOTE: do not delete `data-testid` key value pair
  return (
    <div data-testid="task-app" className={styles.taskApp}>
      {/* Header */}
      <TaskHeader />
      {/* <AddTask/> */}
      <Task/>
      {/* Add Task */}
      {/* Tasks */}
    </div>
  );
};

export default TaskApp;
