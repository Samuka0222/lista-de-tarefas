const IconeBtn = ({children, task, toggleComplete}) => {
    return (
        <button
        task = {task}
        onClick={() => toggleComplete(task)}>
            {children}
        </button>
    )
}

export default IconeBtn;