import ItemLista from "./ItemLista";

// eslint-disable-next-line react/prop-types
const ListaTarefas = ({ tasks, toggleComplete}) => {
    return (
        <ul className="w-11/12 flex flex-col gap-4">
            {tasks.map((task, index) => <ItemLista
                key={index}
                task={task}
                toggleComplete={toggleComplete}
            />)}
        </ul>
    )
}

export default ListaTarefas;