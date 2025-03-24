import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { Link } from "react-router-dom"; 
import "./CompletedTasks.css";
const CompletedTasks = () => {
  const { completedTasks } = useContext(TaskContext); 
  return (
    <div className="completed-tasks-container">
      <h2>Completed Tasks</h2>
      <Link to="/">Back to Home</Link>

      {completedTasks.length === 0 ? (
        <p>No completed tasks yet.</p>
      ) : (
        <ul className="completed-task-list">
          {completedTasks.map((task) => (
            <li key={task.id} className="completed">
              {task.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CompletedTasks;
