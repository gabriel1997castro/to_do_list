import React from 'react';
import ToDoApp from './components/Main';

let taskList = ['Task 1', 'Task 2', 'Task 3'];

const tasks = localStorage.getItem('storedTasks');
if (tasks) taskList = JSON.parse(tasks);

function App() {
  return (
    <ToDoApp tasks={taskList} />
  );
}

export default App;
