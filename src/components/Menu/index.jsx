import { faBars, faSquareCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Menu = ({ toggleAside, isVisible }) => {
    return (
        <header className="w-full h-10 px-10 my-4 flex justify-end items-center font-bold text-md text-gray-200">
            <button className="text-2xl h-10 w-12 rounded-lg hover:bg-neon-complementar hover:text-neon-dark"
                onClick={() => toggleAside()}
            >
                {isVisible === false 
                ? <FontAwesomeIcon icon={faBars} />
                : <FontAwesomeIcon icon={faSquareCaretDown} />}
            </button>
        </header>
    )
}

export default Menu;