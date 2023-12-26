import { useEffect, useState } from "react";
import { createContext } from "react";

export const TasksContext = createContext();
TasksContext.displayName = "Tasks";

export const TasksProvider = ({ children }) => {
    let storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const [tasks, setTasks] = useState(storedTasks);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
        console.log(tasks);
    }, [tasks])

    return (
        <TasksContext.Provider value={{ tasks, setTasks }}>
            {children}
        </TasksContext.Provider>
    )
}