const MenuButton = ({ action, children }) => {
    return (
            <button className="text-3xl h-10 w-12 rounded-lg
            text-neon-complementar cursor-pointer hover:bg-neon-complementar hover:text-neon-dark"
                onClick={action}
            >
                {children}
            </button>
    )
}

export default MenuButton;