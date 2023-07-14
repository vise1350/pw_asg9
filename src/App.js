import React, { useState } from "react";

function TodoApp() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleSubmit = () => {
    setTasks([...tasks, task]);
    setTask("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a task"
        onChange={(event) => setTask(event.target.value)}
      />
      <button onClick={handleSubmit}>Add Task</button>
      <ul>
        {tasks.map((task) => (
          <li key={task}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
