import Button from "../../Button"
import { ThemeContext } from "../../../context/ThemeContext"
import { useContext } from "react";


// eslint-disable-next-line react/prop-types
const Input = ({ placeholder, value, onChange }) => {
    const { theme } = useContext(ThemeContext)

    return (
        <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-3">
            <input className={`w-full lg:w-3/4 h-12 rounded-xl px-3 bg-transparent border-2 border-${theme}-secundaria text-gray-200 font-bold text-xl text-center outline-0 focus:ring-2 focus:ring-${theme}-complementar focus:border-${theme}-complementarLight`}
                type="text"
                required
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            ></input>
            <Button type={"submit"}>Criar tarefa.</Button>
        </div>
    )
}

export default Input