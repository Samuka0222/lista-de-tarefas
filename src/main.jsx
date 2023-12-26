import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { TasksProvider } from './context/ToDoTasks.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TasksProvider>
      <App />
    </TasksProvider>
  </React.StrictMode>,
)
