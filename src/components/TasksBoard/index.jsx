import TasksList from "./TasksList";

const TasksBoard = ({ title, tasks, status, toggleComplete, deleteTask, editTask, updateTask}) => {
    const anyTasksCompleted = status;

    return (
        <div className="mt-5 w-full md:w-5/6 flex flex-col items-center h-full">
            <h1 className="text-xl w-11/12 md:w-full text-center font-bold text-gray-200 mt-1 mb-4 border-b-2 border-azul-suave">
                {title}
            </h1>
            {(tasks.length > 0) ? (
                <TasksList
                    tasks={tasks}
                    toggleComplete={toggleComplete}
                    editTask={editTask}
                    updateTask={updateTask}
                    deleteTask={deleteTask}
                />
            ) : <p className="text-gray-200 font-bold text-2xl animate-pulse">{(anyTasksCompleted) ?"Tudo feito por hoje! 😎" : "Nada para fazer hoje... 😴"}</p>}
        </div>
    )
}

export default TasksBoard;

