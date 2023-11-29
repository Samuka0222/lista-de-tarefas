import Input from "./Input";


// eslint-disable-next-line react/prop-types
const Form = ({ onChange, addTask, value }) => {

    return (
        <form className="flex flex-col w-5/6 lg:w-2/5 items-center bg-neon-dark h-fit p-3 rounded-xl ring-2 ring-neon-complementar"
            onSubmit={addTask}>
            <h1 className="text-2xl text-gray-200 font-bold mb-4">O que iremos fazer hoje?</h1>
            <Input
                placeholder='Insira a tarefa.'
                onChange={onChange}
                value={value}
            >
            </Input>
        </form>
    )
}

export default Form;