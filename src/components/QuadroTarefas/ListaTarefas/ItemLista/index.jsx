import { faPenToSquare, faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconeBtn from "./IconeBtn";

const ItemLista = ({ task, concluirTarefa }) => {
    return (
        <li className="flex items-center justify-between w-full h-10 px-2 text-gray-200 bg-gradient-to-r from-roxo-padrao to-roxo-suave rounded-md">
            <p className="flex flex-row text-md font-bold">
                {task}
            </p>
            <span className="flex gap-2 text-2xl">
                <IconeBtn concluirTarefa={concluirTarefa}  task={task}>
                    <FontAwesomeIcon icon={faSquareCheck} />
                </IconeBtn>
                <IconeBtn>
                    <FontAwesomeIcon icon={faPenToSquare} />
                </IconeBtn>
            </span>
        </li>
    )
}
export default ItemLista;