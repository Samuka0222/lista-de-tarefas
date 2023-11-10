import ListaTarefas from "./ListaTarefas";

const TasksBoard = ({ title, tasks, toggleComplete}) => {
    return (
        <div className="mt-5 w-full flex flex-col items-center h-2/5">
            <h1 className="text-xl w-11/12 text-center font-bold text-gray-200 mt-1 mb-4 border-b-2 border-roxo-suave">
                {title}
            </h1>
            <ListaTarefas tasks={tasks} toggleComplete={toggleComplete} />
        </div>
    )
}

export default TasksBoard;

