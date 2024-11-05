
import React, { useState } from 'react';

const App = () => {
 
  const [tasks, setTasks] = useState([
    'Finish React assignment',
    'Read 30 pages of a book',
    'Complete workout',
    'Plan weekend trip',
    'Buy groceries'
  ]);

  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim()) { 
      setTasks([...tasks, newTask]); 
      setNewTask('');  
    }
  };

  return (
    <div className="container">
      <h3>My To-Do List</h3>
      
     
      <input
        type="text"
        value={newTask} 
        onChange={(e) => setNewTask(e.target.value)} 
        placeholder="Add a new task"
      />
      <button onClick={addTask}>Add Task</button>
      
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li> 
        ))}
      </ul>
    </div>
  );
};

export default App;
