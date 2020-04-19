import React from 'react';
import ToDoApp from './components/Main';

const taskList = ['Task 1', 'Task 2'];
function App() {
  return (
    <ToDoApp tasks={taskList} />
  );
}

export default App;
