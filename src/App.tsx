import React from "react";
import { useState } from "react"
import Form from "./components/Form"
import TasksBoard from "./components/TasksBoard"
import { v4 as uuidv4 } from 'uuid';
import { useTasksContext } from "./hooks/useTasksContext";
uuidv4();

const App = () => {
  const [value, setValue] = useState('')
  const {
    completedTasks,
    todoTasks,
    addTask,
    deleteTask,
    editTask,
    toggleComplete,
    updateTask,
  } = useTasksContext();

  const handleInputChange = (value: string) => {
    setValue(value)
  }

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTask(value);
    setValue('');
  }

  return (
    <div className="h-screen w-screen flex flex-col items-center bg-gradient-to-br from-roxo-dark to-roxo-bg font-roboto overflow-auto">
      <Form
        onChange={handleInputChange}
        addTask={handleSubmit}
        value={value}
      />
      <div className="w-full flex flex-col items-center lg:flex-row lg:justify-center lg:gap-12 lg:mt-8 lg:px-12">
        <TasksBoard
          title={"Tarefas do dia:"}
          tasks={todoTasks}
          status={(completedTasks.length > 0) ? true : false}
          toggleComplete={toggleComplete}
          editTask={editTask}
          updateTask={updateTask}
          deleteTask={deleteTask}
          type={'todo'}
        />
        {completedTasks.length > 0 &&
          <TasksBoard
            title={"Tarefas completas"}
            tasks={completedTasks}
            toggleComplete={toggleComplete}
            editTask={editTask}
            updateTask={updateTask}
            deleteTask={deleteTask}
            type={"completed"}
          />
        }
      </div>
    </div>
  )
}

export default App
