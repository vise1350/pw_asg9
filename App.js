import React, { useState } from "react";

function TodoApp() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [status, setStatus] = useState("Not Started");
  const [selectedTask, setSelectedTask] = useState(null);

  const handleSubmit = () => {
    setTasks([...tasks, task]);
    setTask("");
  };

  const handleUpdateStatus = () => {
    setStatus(status === "Not Started" ? "In Progress" : "Done");
  };

  const handleRemoveTodo = () => {
    setTasks(tasks.filter((task) => task !== selectedTask));
    setSelectedTask(null);
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
          <li
            key={task}
            onClick={() => setSelectedTask(task)}
            style={{
              textDecoration: task === selectedTask ? "underline" : "",
            }}
          >
            {task}
            <span>
              {status}
              <button
                onClick={handleUpdateStatus}
                style={{ marginLeft: 10 }}
              >
                Update Status
              </button>
              <button onClick={handleRemoveTodo} style={{ marginLeft: 10 }}>
                Remove Todo
              </button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
