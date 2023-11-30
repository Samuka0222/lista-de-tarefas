import { useState } from "react";
import { ThemeContext } from "../../context/ThemeContext"
import { useContext } from "react";

const EditTask = ({ updateTask, task }) => {
    const [value, setValue] = useState(task.task)
    const { theme } = useContext(ThemeContext)

    const handleSubmit = e => {
        e.preventDefault()
        updateTask(value, task.id)
        setValue('')
    }

    return (
        <form className={`flex items-center justify-between w-full h-12 px-2 text-gray-200 bg-gradient-to-r from-${theme}-primaria to-${theme}-secundaria rounded-md`}
            onSubmit={handleSubmit}
        >
            <input className="w-8/12 bg-transparent text-gray-200 font-bold text-lg text-left focus:outline-none"
                placeholder="Atualizar tarefa"
                required
                onChange={(e => setValue(e.target.value))}
                value={value}
            ></input>
            <button className={`bg-${theme}-complementar h-8 w-20 font-bold rounded-lg text-${theme}-dark shadow`}>
                Alterar
            </button>
        </form>
    )
}

export default EditTask;