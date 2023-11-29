const Dialog = ({ status = false }) => {
    return (
        <dialog open={status} >
            <p>Greetings, one and all!</p>
            <form method="dialog">
                <button>OK</button>
            </form>
        </dialog>
    )
}

export default Dialog;