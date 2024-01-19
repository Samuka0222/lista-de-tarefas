import React from "react";

interface ButtonProps {
    children: React.ReactNode;
    type: "submit" | "button" | "reset";
}

const Button = ({ children, type }: ButtonProps) => {
    return (
        <button
            className="w-full lg:w-2/6 mt-1 lg:mt-0 h-12 rounded-xl text-lg font-bold text-gray-200 bg-gradient-to-r from-roxo-suave to-roxo-padrao hover:opacity-90 hover:text-roxo-dark hover:from-azul-suave hover:to-azul-padrao"
            type={type}>
            {children}
        </button>
    )
}

export default Button;