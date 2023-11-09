import ItemLista from "./ItemLista";

// eslint-disable-next-line react/prop-types
const ListaTarefas = ({ tasks, concluirTarefa }) => {
    return (
        <ul className="w-11/12 flex flex-col gap-4">
            {tasks.map((task, index) => <ItemLista
                key={index}
                task={task}
                concluirTarefa={concluirTarefa}
            />)}
        </ul>
    )
}

export default ListaTarefas;