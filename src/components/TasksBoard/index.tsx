import React from "react";
import TasksList from "./TasksList";
import ITask from "../../interface/ITask"

interface TaskBoardProps {
    title: String;
    tasks: ITask[];
    status?: Boolean;
    toggleComplete: (completeTask: ITask) => void;
    deleteTask: (task: ITask) => void;
    editTask: (task: ITask) => void;
    updateTask: (updatedTask: string, id: string) => void;
    type: string

}

const TasksBoard = ({ title, tasks, status, toggleComplete, deleteTask, editTask, updateTask, type }: TaskBoardProps) => {
    const anyTasksCompleted = status;

    return (
        <div className="my-5 w-full md:w-5/6 lg:w-2/5 flex flex-col items-center h-full">
            <h1 className="text-xl w-11/12 md:w-full text-center font-bold text-gray-200 mt-1 mb-4 border-b-2 border-azul-suave">
                {title}
            </h1>
            {(tasks.length > 0) ? (
                <TasksList
                    type={type}
                    tasks={tasks}
                    toggleComplete={toggleComplete}
                    editTask={editTask}
                    updateTask={updateTask}
                    deleteTask={deleteTask}
                />
            ) : <p className="text-gray-200 font-bold text-2xl animate-pulse">{(anyTasksCompleted) ? "Tudo feito por hoje! 😎" : "Nada para fazer hoje... 😴"}</p>}
        </div>
    )
}

export default TasksBoard;

