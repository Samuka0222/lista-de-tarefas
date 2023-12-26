import { useContext } from "react";
import { TasksContext } from "../context/tasksContext";
import { v4 as uuidv4 } from 'uuid';
uuidv4();

export const useTasksContext = () => {
    const { tasks, setTasks } = useContext(TasksContext);
    const completedTasks = tasks.filter(task => task.completed)
    const todoTasks = tasks.filter(task => task.completed === false)

    function addTask(task) {
        setTasks([...tasks, {
            id: uuidv4(),
            task: task,
            completed: false,
            isEditing: false
        }]);
    }

    function toggleComplete(completeTask) {
        const id = completeTask.id;
        setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task))
    }

    function editTask(task) {
        const id = task.id
        setTasks(tasks.map(task => task.id === id ? { ...task, isEditing: !task.isEditing } : task));
    }

    function updateTask(updatedTask, id) {
        setTasks(tasks.map(task => task.id === id ? { ...task, task: updatedTask, isEditing: !task.isEditing } : task));
    }

    function deleteTask(task) {
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

