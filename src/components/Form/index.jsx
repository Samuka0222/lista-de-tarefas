import Input from "./Input";
import { ThemeContext } from "../../context/ThemeContext"
import { useContext } from "react";

// eslint-disable-next-line react/prop-types
const Form = ({ onChange, addTask, value }) => {
    const { theme } = useContext(ThemeContext);
    
    return (
        <form className={`flex flex-col w-5/6 lg:w-2/5 items-center bg-${theme}-dark h-fit p-3 rounded-xl ring-2 ring-${theme}-complementar mt-3`}
            onSubmit={addTask}>
            <h1 className="text-2xl text-gray-200 font-bold mb-4">O que iremos fazer hoje?</h1>
            <Input
                placeholder='Insira a tarefa.'
                onChange={onChange}
                value={value}
            >
            </Input>
        </form>
    )
}

export default Form;