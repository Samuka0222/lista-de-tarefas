import { Link } from "react-router-dom";

const LinkButton = ({ link, children }) => {
    return (
        <li className="text-3xl h-10 w-12 rounded-lg flex justify-center items-center text-neon-complementar cursor-pointer hover:bg-neon-complementar hover:text-neon-dark">
            <Link to={link}>
                {children}
            </Link>
        </li>
    )
}

export default LinkButton;
