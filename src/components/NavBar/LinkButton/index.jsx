import { Link } from "react-router-dom";
import { ThemeContext } from "../../../context/ThemeContext"
import { useContext } from "react";

const LinkButton = ({ link, children }) => {
    const { theme } = useContext(ThemeContext)

    return (
        <li className={`text-3xl h-10 w-12 rounded-lg flex justify-center items-center text-${theme}-complementar cursor-pointer hover:bg-${theme}-complementar hover:text-${theme}-dark`}>
            <Link to={link}>
                {children}
            </Link>
        </li>
    )
}

export default LinkButton;
