import ItemLista from "./ItemLista";

// eslint-disable-next-line react/prop-types
const ListaTarefas = ({ tasks }) => {
    return (
        <ul className="w-11/12">
            {tasks.map((task, index) => <ItemLista
                key={index}
                task={task}
            />)}
        </ul>
    )
}

export default ListaTarefas;