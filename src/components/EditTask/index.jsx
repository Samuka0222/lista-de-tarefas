import { useState } from "react";

const EditTask = ({ updateTask, task }) => {
    const [value, setValue] = useState(task.task)
    
    const handleSubmit = e => {
        e.preventDefault()
        updateTask(value, task.id)
        setValue('')
        console.log(`Alteração enviada, novo valor: ${value}`)
    }
    
    return (
        <form className="flex items-center justify-between w-full h-10 px-2 text-gray-200 bg-gradient-to-r from-roxo-padrao to-roxo-suave rounded-md"
        onSubmit={handleSubmit}
        >
            <input className="w-8/12 bg-transparent text-gray-200 font-bold text-lg text-left focus:outline-none"
                placeholder="Atualizar tarefa"
                onChange={(e => setValue(e.target.value))}
                value={value}
            ></input>
            <button className="bg-azul-suave h-8 w-20 font-bold rounded-lg text-roxo-dark shadow">
                Alterar
            </button>
        </form>
    )
}

export default EditTask;