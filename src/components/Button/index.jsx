// eslint-disable-next-line react/prop-types
import { ThemeContext } from "../../context/ThemeContext"
import { useContext } from "react";

const Button = ({ children, type }) => {
    const { theme } = useContext(ThemeContext)

    return (
        <button
            className={`w-full lg:w-2/6 mt-1 lg:mt-0 h-12 rounded-xl text-lg font-bold text-gray-200 bg-gradient-to-r from-${theme}-secundaria to-${theme}-primaria hover:opacity-90 hover:text-${theme}-dark hover:from-${theme}-complementar hover:to-${theme}-complementarDark`}
            type={type}>
            {children}
        </button>
    )
}

export default Button;