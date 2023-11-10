import Task from "./Task";
import EditTask from "../../EditTask"
import "./scroll.css"

// eslint-disable-next-line react/prop-types
const TasksList = ({ tasks, toggleComplete, deleteTask, editTask, updateTask, type }) => {
    return (
        <ul className="w-11/12 md:w-full flex flex-col gap-4">
            {tasks.map((task, index) => (
                task.isEditing ? (
                    <EditTask 
                        task={task}
                        updateTask={updateTask}
                        key={index}
                    />
                ) : (
                    <Task
                        key={task.id}
                        task={task}
                        toggleComplete={toggleComplete}
                        editTask={editTask}
                        deleteTask={deleteTask}
                        type={type}
                    />
                )
            ))}
        </ul>
    )
}

export default TasksList;