import React, { createContext, useState } from "react";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]); 
 
  const addTask = (task) => setTasks([...tasks, task]);

  const removeTask = (id) => setTasks(tasks.filter((task) => task.id !== id));

  const completeTask = (task) => {
    setCompletedTasks([...completedTasks, task]); 
    removeTask(task.id);
  };

  return (
    <TaskContext.Provider
      value={{ tasks, completedTasks, addTask, removeTask, completeTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};
