import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { TaskProvider } from "./context/TaskContext";
import Home from "./Pages/Home";
import CompletedTasks from "./Pages/CompletedTasks";
import "./App.css";
const App = () => {
  return (
    <TaskProvider>
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/completed">Completed Tasks</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/completed" element={<CompletedTasks />} />
        </Routes>
      </Router>
    </TaskProvider>
  );
};

export default App;
