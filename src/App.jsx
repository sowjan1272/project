import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  const addTask = () => {
    if (taskInput.trim() === '') {
      alert("Add Anyone");
      return;
    }

    const newTask = {
      id: Date.now(),
      text: taskInput,
      completed: false
    };

    setTasks([...tasks, newTask]);
    setTaskInput('');
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="container">
      <h1> To-Do List</h1>
      <div className="input-section">
        <input
          type="text"
          placeholder=" Add a text✍"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <button onClick={addTask}>➕ Add</button>
      </div>

      <ul className="task-list">
        {tasks.map(task => (
          <li key={task.id} className={task.completed ? 'completed' : ''}>
            <span>{task.text}</span>
            <div className="task-buttons">
              <button onClick={() => toggleComplete(task.id)}>✅</button>
              <button onClick={() => deleteTask(task.id)}>🗑</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;