import { useEffect, useState } from "react"
import Form from "./components/Form"
import QuadroTarefas from "./components/QuadroTarefas"

function App() {
  const [tarefas, setTarefas] = useState([])
  const [value, setValue] = useState('')

  const onChange = (value) => {
    setValue(value)
  }

  const addTask = (e) => {
    e.preventDefault()
    setTarefas([...tarefas, value])
    setValue('')
  }

  useEffect(() => {
    console.log(tarefas)
  }, [tarefas])

  return (
    <div className="h-screen w-screen flex flex-col items-center bg-gradient-to-br from-roxo-dark to-roxo-bg font-roboto">
      <Form
        onChange={onChange}
        addTask={addTask}
        value={value}
      />
      <QuadroTarefas 
        tasks={tarefas}
      />
    </div>
  )
}

export default App
