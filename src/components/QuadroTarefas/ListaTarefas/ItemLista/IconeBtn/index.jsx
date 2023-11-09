const IconeBtn = ({children, task, concluirTarefa}) => {
    return (
        <button
        task = {task}
        onClick={() => concluirTarefa(task)}>
            {children}
        </button>
    )
}

export default IconeBtn;