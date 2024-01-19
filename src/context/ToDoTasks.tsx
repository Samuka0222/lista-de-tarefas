import React, { SetStateAction } from "react";
import { useEffect, useState } from "react";
import { createContext } from "react";
import ITask from "../interface/ITask";

interface TasksContextProps {
    tasks: ITask[] | undefined,
    setTasks: React.Dispatch<SetStateAction<ITask[]>>
}

interface TasksProviderProps {
    children: React.ReactNode;
}

export const TasksContext = createContext<TasksContextProps | undefined>(undefined);
TasksContext.displayName = "Tasks";

export const TasksProvider: React.FC<TasksProviderProps> = ({ children }) => {
    let storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]") as ITask[];
    const [tasks, setTasks] = useState<ITask[]>(storedTasks);

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