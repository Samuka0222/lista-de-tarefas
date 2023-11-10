import { faPenToSquare, faSquareCheck, faSquareXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconeBtn from "./IconeBtn";

const ItemLista = ({ task, toggleComplete }) => {
    return (
        <li className="flex items-center justify-between w-full h-10 px-2 text-gray-200 bg-gradient-to-r from-roxo-padrao to-roxo-suave rounded-md">
            <p className={`flex flex-row text-md font-bold ${task.completed === true ? "line-through" : ''}`}>
                {task.task}
            </p>
            <span className="flex gap-2 text-2xl">
                <IconeBtn toggleComplete={toggleComplete}  task={task}>
                    <FontAwesomeIcon icon={task.completed ? faSquareXmark : faSquareCheck} />
                </IconeBtn>
                <IconeBtn>
                    <FontAwesomeIcon icon={faPenToSquare} />
                </IconeBtn>
            </span>
        </li>
    )
}
export default ItemLista;