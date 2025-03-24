# To-Do List Application

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Installation](#installation)
- [Technologies Used](#technologies-used)
- [Context Implementation](#context-implementation)
- [Components](#components)
- [Routing](#routing)
- [Styling](#styling)
- [How to Run](#how-to-run)

---

## Project Overview
A React-based task management application with:
- Real-time task operations (add/remove/complete)
- Separate views for active and completed tasks
- Persistent state management using Context API
- Routing between different views

---

## Features
### Task Management
- **Add Tasks**: Input field with add button
- **Complete Tasks**: Move items to completed list
- **Delete Tasks**: Permanent removal from lists
- **Dual Views**:  
  - `/` - Active tasks  
  - `/completed` - Completed tasks  

### Technical Features
- 🧭 React Router navigation  
- 🏗️ Context API state management  
- ♻️ Component-based architecture  
- 📱 Responsive CSS styling  

---

## Installation
```bash
# Clone repository
git clone https://github.com/Umair001101/To-Do-List.git
```
# Navigate to project directory
cd To-Do-List

# Install dependencies
npm install
# Technologies Used
- **React**: JavaScript library for building user interfaces.
- **React Router**: For routing and navigation between pages.
- **Context API**: For state management across components.
- **CSS**: For styling the application.
- **JavaScript (ES6+)**: Core programming language.
# Context Implementation
The Context API is used to manage task state globally.

## TaskContext.js
### State Variables:
- `tasks`: Array holding active tasks
- `completedTasks`: Array holding completed tasks

### Functions:
- `addTask`: Adds new task to active tasks list
- `removeTask`: Removes task from active tasks list
- `completeTask`: Moves task from active to completed, then removes from active tasks

# Components
## Home.js
**Purpose**:  
Displays active tasks and allows users to add new tasks

**Features**:
- Input field for new tasks
- Buttons for marking tasks as completed or deleting them
- Navigation link to view completed tasks

## CompletedTasks.js
**Purpose**:  
Displays tasks that have been marked as completed

**Features**:
- List of completed tasks
- Message when no tasks are completed
- Navigation link to return to Home page

# Routing
Managed using React Router with routes defined in App.js:
- **Home Route** (`/`): Renders Home component
- **Completed Route** (`/completed`): Renders CompletedTasks component

# Styling
Managed through CSS with:
- `App.css`: Global styling
- `Home.css`: Home component styles
- `CompletedTasks.css`: CompletedTasks component styles

# How to Run
1. Clone the Repository:
```bash
git clone https://github.com/Umair001101/To-Do-List.git
```
2. Navigate to Project Directory:
```bash
cd To-Do-List
```
3. Install Dependencies:
```bash
npm install
```
4. Install React Router:
```bash
npm install react-router-dom 
```
5. Start Development Server:
```bash
npm start
```