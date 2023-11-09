import { useEffect, useState } from "react"
import Form from "./components/Form"
import QuadroTarefas from "./components/QuadroTarefas"

function App() {
  const [value, setValue] = useState('')
  const [tarefas, setTarefas] = useState([])
  const [tarefasConcluidas, setTarefasConcluidas] = useState([])

  const onChange = (value) => {
    setValue(value)
  }

  const addTask = (e) => {
    e.preventDefault()
    setTarefas([...tarefas, value])
    setValue('')
  }

    const concluirTarefa = (taskConcluida) => {
        console.log("clicou no botão")
        setTarefasConcluidas([...tarefasConcluidas, taskConcluida])
    }

    useEffect(() => {
        console.log(tarefasConcluidas)
    }, [tarefasConcluidas])

  return (
    <div className="h-screen w-screen flex flex-col items-center bg-gradient-to-br from-roxo-dark to-roxo-bg font-roboto">
      <Form
        onChange={onChange}
        addTask={addTask}
        value={value}
      />
      <QuadroTarefas 
        tasks={tarefas}
        concluirTarefa={concluirTarefa}
      />
    </div>
  )
}

export default App
