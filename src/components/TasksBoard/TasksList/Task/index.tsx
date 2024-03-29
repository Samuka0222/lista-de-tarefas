import React from "react";
import { faPenToSquare, faSquareCheck, faSquareXmark, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconBtn from "./IconBtn";
import ITask from "../../../../interface/ITask";

interface TaskProps {
    task: ITask;
    toggleComplete: (task: ITask) => void;
    deleteTask: (task: ITask) => void;
    editTask: (task: ITask) => void;
    type: string;
}

const Task = ({ task, toggleComplete, deleteTask, editTask, type = "todo"}: TaskProps) => {

    const definedTheme = (type === "todo") 
    ? 'bg-gradient-to-r from-roxo-padrao to-roxo-suave' 
    : 'bg-roxo-dark'

    return (
        <li className={`text-gray-200 flex items-center justify-between w-full h-12 max-h-fit px-2 rounded-md ${definedTheme}`}>
            <p className={`flex flex-row text-lg font-bold whitespace-nowrap w-9/12 overflow-x-auto ${task.completed === true ? "line-through text-gray-500" : ''}`}>
                {task.task}
            </p>
            <span className="flex gap-3 text-2xl">
                <IconBtn
                    onClick={() => toggleComplete(task)}
                >
                    <FontAwesomeIcon
                        icon={task.completed ? faSquareXmark : faSquareCheck}
                    />
                </IconBtn>
                <IconBtn
                    onClick={() => editTask(task)}
                >
                    <FontAwesomeIcon
                        className="h-6"
                        icon={faPenToSquare}
                    />
                </IconBtn>
                <IconBtn
                    onClick={() => deleteTask(task)}
                >
                    <FontAwesomeIcon
                        className="h-5.5"
                        icon={faTrash}
                    />
                </IconBtn>
            </span>
        </li>
    )
}
export default Task;