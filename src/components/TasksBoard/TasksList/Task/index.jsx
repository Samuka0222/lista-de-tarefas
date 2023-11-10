import { faPenToSquare, faSquareCheck, faSquareXmark, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconBtn from "./IconBtn";

const Task = ({ task, toggleComplete, deleteTask, editTask }) => {
    return (
        <li className="flex items-center justify-between w-full h-12 max-h-fit px-2 text-gray-200 bg-gradient-to-r from-roxo-padrao to-roxo-suave rounded-md">
            <p className={`flex flex-row text-lg font-bold whitespace-nowrap w-60 overflow-x-auto ${task.completed === true ? "line-through" : ''}`}>
                {task.task}
            </p>
            <span className="flex gap-3 text-2xl">
                <IconBtn
                    onClick={() => toggleComplete(task)}
                    task={task}
                >
                    <FontAwesomeIcon
                        icon={task.completed ? faSquareXmark : faSquareCheck}
                    />
                </IconBtn>
                <IconBtn
                    task={task}
                    onClick={() => editTask(task)}
                >
                    <FontAwesomeIcon
                        className="h-6"
                        icon={faPenToSquare}
                    />
                </IconBtn>
                <IconBtn
                    task={task}
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