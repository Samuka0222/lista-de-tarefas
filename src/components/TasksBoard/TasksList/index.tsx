import React from "react";
import Task from "./Task";
import EditTask from "../../EditTask"
import ITask from "../../../interface/ITask"

import "./scroll.css"

interface TasksListProps {
    tasks: ITask[];
    toggleComplete: (task: ITask) => void;
    deleteTask: (task: ITask) => void;
    editTask: (task: ITask) => void;
    updateTask: (updatedTask: string, id: string) => void;
    type: string;
}

const TasksList = ({ tasks, toggleComplete, deleteTask, editTask, updateTask, type }: TasksListProps) => {
    return (
        <ul className="w-11/12 md:w-full flex flex-col gap-4">
            {tasks.map((task: ITask, index: number) => (
                task.isEditing ? (
                    <EditTask 
                        task={task}
                        updateTask={updateTask}
                        key={index}
                    />
                ) : (
                    <Task
                        key={task.id}
                        task={task}
                        toggleComplete={toggleComplete}
                        editTask={editTask}
                        deleteTask={deleteTask}
                        type={type}
                    />
                )
            ))}
        </ul>
    )
}

export default TasksList;