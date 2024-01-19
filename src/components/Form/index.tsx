import React, { FormEventHandler } from "react";
import Input from "./Input";

interface FormProps {
    onChange: (value: string) => void;
    addTask: FormEventHandler<HTMLFormElement>
    value: string;
}

const Form = ({ onChange, addTask, value }: FormProps) => {
    return (
        <form className="flex flex-col w-5/6 lg:w-2/5 items-center mt-8 bg-roxo-dark h-fit p-3 rounded-xl ring-2 ring-azul-light"
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