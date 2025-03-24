import React, { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import { Link } from "react-router-dom"; 
import "./Home.css";

const Home = () => {
  const { tasks, addTask, removeTask, completeTask } = useContext(TaskContext);
  const [newTask, setNewTask] = useState("");

  const handleAdd = () => {
    if (newTask) {
      addTask({ id: Date.now(), text: newTask });
      setNewTask("");
    }
  };

  return (
    <div className="home-container">
      <h2>To-Do List</h2>
      <Link to="/completed">View Completed Tasks</Link> 

      <div className="task-input">
        <input
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={handleAdd}>Add Task</button>
      </div>
      <h3>Active Tasks</h3>
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text}
            <button onClick={() => completeTask(task)}>✅</button> 
            <button onClick={() => removeTask(task.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Home;
