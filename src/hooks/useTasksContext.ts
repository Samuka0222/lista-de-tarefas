import { useContext } from "react";
import { v4 as uuidv4 } from 'uuid';
import { TasksContext } from "../context/ToDoTasks";
import ITask from "../interface/ITask";
uuidv4();

export const useTasksContext = () => {
    const context = useContext(TasksContext);

    if (!context) {
        throw new Error("TasksContext not found");
    }

    const { tasks = [], setTasks } = context;

    const completedTasks = tasks.filter((task: ITask) => task.completed)
    const todoTasks = tasks.filter((task: ITask) => task.completed === false)

    function addTask(task: string) {
        setTasks([...tasks, {
            id: uuidv4(),
            task: task,
            completed: false,
            isEditing: false
        }]);
    }

    function toggleComplete(completeTask: ITask) {
        const id = completeTask.id;
        setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task))
    }

    function editTask(task: ITask) {
        const id = task.id
        setTasks(tasks.map(task => task.id === id ? { ...task, isEditing: !task.isEditing } : task));
    }

    function updateTask(updatedTask: string, id: string) {
        setTasks(tasks.map(task => task.id === id ? { ...task, task: updatedTask, isEditing: !task.isEditing } : task));
    }

    function deleteTask(task: ITask) {
        const id = task.id
        setTasks(tasks.filter(task => task.id !== id));
    }

    return {
        tasks,
        completedTasks,
        todoTasks,
        addTask,
        toggleComplete,
        editTask,
        updateTask,
        deleteTask,
    }
}

