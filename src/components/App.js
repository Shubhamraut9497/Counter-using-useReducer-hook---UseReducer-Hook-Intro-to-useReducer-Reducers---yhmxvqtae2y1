import React, { useReducer } from "react";
import "../styles/App.css";

const reducer = (state, action) => {
  if (action.type === "add") {
    return state + 1;
  } else if (action.type === "delete") {
    return state - 1;
  } else {
    return 0;
  }
  return state;
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <div id="main">
      <h2>Task Counter</h2>
      <button onClick={() => dispatch({ type: "add" })} id="addTaskBtn">
        Add a task
      </button>
      <button onClick={() => dispatch({ type: "delete" })} id="delTaskBtn">
        Delete a task
      </button>
      <button
        onClick={() => dispatch({ type: "deleteAll" })}
        id="delAllTaskBtn"
      >
        Delete all tasks
      </button>
      <h3 className="counter">Number of Tasks : {state}</h3>
    </div>
  );
};

export default App;
