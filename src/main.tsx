import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { TasksProvider } from './context/ToDoTasks'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TasksProvider>
      <App />
    </TasksProvider>
  </React.StrictMode>,
)
