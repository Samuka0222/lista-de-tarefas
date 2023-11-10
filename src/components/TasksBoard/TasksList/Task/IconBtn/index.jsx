const IconBtn = ({children, task, onClick}) => {
    return (
        <button
        task = {task}
        onClick={onClick}>
            {children}
        </button>
    )
}

export default IconBtn;