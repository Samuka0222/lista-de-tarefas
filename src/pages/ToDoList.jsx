import { useEffect, useState } from "react"
import Form from "../components/Form"
import TasksBoard from "../components/TasksBoard"
import { v4 as uuidv4 } from 'uuid';
uuidv4();

function ToDoList() {
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

    return (
        <div className="h-full w-full flex flex-col items-center font-roboto overflow-auto relative">
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

export default ToDoList
