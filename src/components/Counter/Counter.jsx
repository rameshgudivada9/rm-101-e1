import React, { useState } from "react";
import styles from "./counter.module.css";

const Counter = (props) => {
  // sample value to be replaced
  let counter = 0;

  const [count, setCount] = useState(props.value);
  const handleChange = (val) => {
    if (val === 0) {
      setCount(0);
    }  else {
      if (count + val < 0) return;
      setCount(count + val);
    }
  };
  // NOTE: do not delete `data-testid` key value pair
  return (
    <div className={styles.counter}>
      <button data-testid="task-counter-increment-button"
       onClick={() => {
        handleChange(1);
      }}
      >+</button>
      <span data-testid="task-counter-value">{counter}</span>
      <button data-testid="task-counter-decrement-button"
       onClick={() => {
        handleChange(-1);
      }}
      >-</button>
    </div>
  );
};

export default Counter;
