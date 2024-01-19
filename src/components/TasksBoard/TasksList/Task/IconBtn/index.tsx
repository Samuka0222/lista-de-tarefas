import React from "react";
import ITask from "../../../../../interface/ITask"

interface IconBtnProps {
    children: React.ReactNode;
    onClick: () => void;
}

const IconBtn = ({ children, onClick }: IconBtnProps) => {
    return (
        <button
            onClick={onClick}>
            {children}
        </button>
    )
}

export default IconBtn;