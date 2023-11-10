import { useEffect, useState } from "react"
import Form from "./components/Form"
import TasksBoard from "./components/QuadroTarefas"
import {v4 as uuidv4} from 'uuid';
uuidv4();

function App() {
  const [value, setValue] = useState('')
  const [tasks, setTasks] = useState([])

  const onChange = (value) => {
    setValue(value)
  }

  const addTask = (e) => {
    e.preventDefault()
    setTasks([...tasks, {
      id: uuidv4(),
      task: value,
      completed: false,
      isEditing: false
    }])
    setValue('')
  }

    const toggleComplete = (CompletedTask) => {
        const id = CompletedTask.id
        setTasks(tasks.map(task => task.id === id ? {...task, completed: !task.completed} : task))
    }

    const todoTasks = tasks.filter(task => task.completed === false)
    const completedTasks = tasks.filter(task => task.completed)

  return (
    <div className="h-screen w-screen flex flex-col items-center bg-gradient-to-br from-roxo-dark to-roxo-bg font-roboto">
      <Form
        onChange={onChange}
        addTask={addTask}
        value={value}
      />
      <TasksBoard
        title={"Tarefas do dia:"}
        tasks={todoTasks}
        toggleComplete={toggleComplete}
      />
      {completedTasks.length > 0 && 
      <TasksBoard
        title={"Tarefas completas"}
        tasks={completedTasks}
        toggleComplete={toggleComplete}
      />
      }
    </div>
  )
}

export default App
