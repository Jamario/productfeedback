// Create a typescript button component
import React from "react";

interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    onClick: () => void;
}

const Button = ({ children, className, onClick }: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={`h-11 w-40 font-bold text-sm rounded-xl text-white hover:opacity-80 ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
