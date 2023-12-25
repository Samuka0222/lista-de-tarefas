import Button from "../../Button"

// eslint-disable-next-line react/prop-types
const Input = ({ placeholder, value, onChange }) => {

    return (
        <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-3">
            <input className={`w-full lg:w-3/4 h-12 rounded-xl px-3 bg-transparent border-2 border-neon-secundaria text-gray-200 font-bold text-xl text-center outline-0 focus:ring-2 focus:ring-neon-complementar focus:border-neon-complementarLight`}
                type="text"
                required
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            ></input>
            <Button type={"submit"}>Criar tarefa.</Button>
        </div>
    )
}

export default Input