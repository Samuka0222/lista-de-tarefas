// eslint-disable-next-line react/prop-types
const Button = ({ children, type }) => {
    return (
        <button
            className="w-full lg:w-2/6 mt-1 lg:mt-0 h-12 rounded-xl text-lg font-bold text-gray-200 bg-gradient-to-r from-neon-secundaria to-neon-primaria hover:opacity-90 hover:text-neon-dark hover:from-neon-complementar hover:to-neon-complementarDark"
            type={type}>
            {children}
        </button>
    )
}

export default Button;