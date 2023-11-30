import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";

const MenuButton = ({ action, children }) => {
    const { theme } = useContext(ThemeContext)

    return (
            <button className={`text-3xl h-10 w-12 rounded-lg
            text-${theme}-complementar cursor-pointer hover:bg-${theme}-complementar hover:text-${theme}-dark`}
                onClick={action}
            >
                {children}
            </button>
    )
}

export default MenuButton;