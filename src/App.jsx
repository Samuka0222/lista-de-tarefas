import { useEffect, useState } from "react"
import Form from "./components/Form"
import TasksBoard from "./components/TasksBoard"
import { v4 as uuidv4 } from 'uuid';
import Menu from "./components/Menu";
import Aside from "./components/Aside";
uuidv4();

function App() {
  const [value, setValue] = useState('')
  const [tasks, setTasks] = useState([])
  const [asideVisible, setAsideVisible] = useState(false)

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
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task))
  }

  const editTask = (task) => {
    const id = task.id
    setTasks(tasks.map(task => task.id === id ? { ...task, isEditing: !task.isEditing } : task))
  }

  const updateTask = (updatedTask, id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, task: updatedTask, isEditing: !task.isEditing } : task))
    console.log(`Update realizado, novo valor: ${updatedTask}`)
  }

  const deleteTask = (task) => {
    const id = task.id
    setTasks(tasks.filter(task => task.id !== id))
  }

  const todoTasks = tasks.filter(task => task.completed === false)
  const completedTasks = tasks.filter(task => task.completed)

  const toggleAsideVisible = () => {
    setAsideVisible(!asideVisible)
  }

  return (
    <div className="h-screen w-screen flex flex-col items-center bg-gradient-to-br from-neon-dark to-neon-bg font-roboto overflow-auto relative">
      <Menu
        toggleAside={toggleAsideVisible}
        isVisible={asideVisible}
      />
      <Aside
        isVisible={asideVisible}
      />
      <Form
        onChange={onChange}
        addTask={addTask}
        value={value}
      />
      <div className="w-full flex flex-col items-center lg:flex-row lg:justify-center lg:gap-12 lg:mt-8 lg:px-12">
        <TasksBoard
          title={"Tarefas do dia:"}
          tasks={todoTasks}
          status={(completedTasks.length > 0) ? true : false}
          toggleComplete={toggleComplete}
          editTask={editTask}
          updateTask={updateTask}
          deleteTask={deleteTask}
          type={'todo'}
        />
        {completedTasks.length > 0 &&
          <TasksBoard
            title={"Tarefas completas"}
            tasks={completedTasks}
            toggleComplete={toggleComplete}
            editTask={editTask}
            updateTask={updateTask}
            deleteTask={deleteTask}
            type={"completed"}
          />
        }
      </div>
    </div>
  )
}

export default App
