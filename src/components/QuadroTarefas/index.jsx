import ListaTarefas from "./ListaTarefas";

const QuadroTarefas = ({tasks}) => {
    return (
        <div className="mt-5 w-full flex flex-col items-center h-2/5">
            <h1 className="text-xl font-bold text-gray-200 mt-1 mb-4 border-b">Tarefas do dia:</h1>
            <ListaTarefas tasks={tasks} />
        </div>
    )
}

export default QuadroTarefas;

