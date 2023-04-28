import { useState } from "react";
import Arrow from "./icons/Arrow";
import Check from "./icons/Check";

interface DropdownFilterProps {
    value: string;
    options: string[];
    className?: string;
    onChange?: (value: string) => void;
}

const DropdownFilter = ({ value, options, className, onChange }: DropdownFilterProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const generateOptions = () => {
        return options.map((option) => {
            const isSelected = option === value;

            return (
                <li
                    className={`text-theme-grey-dark hover:text-theme-purple list-none cursor-pointer py-3 px-6 border-b-2 last:border-none flex justify-between items-center select-none ${className}`}
                    key={option}
                    onClick={() => {
                        onChange && onChange(option);
                        setIsOpen(false);
                    }}
                >
                    {option}
                    {isSelected ? <Check className="text-theme-purple" /> : null}
                </li>
            );
        });
    };

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "Enter") {
            setIsOpen(!isOpen);
        } else if (e.key === "Escape" && isOpen) {
            setIsOpen(false);
        }
    };

    return (
        <div
            className={`w-fit flex flex-row items-center justify-center text-white rounded-xl select-none cursor-pointer relative bg-transparent focus:outline-none focus:border-transparent ${className}`}
            onClick={handleClick}
            onKeyDown={handleKeyDown}
            tabIndex={0}
        >
            <div>Sort by :</div>
            <div className="mx-2 font-bold">{value}</div>
            {isOpen ? <Arrow direction="up" /> : <Arrow direction="down" />}
            {isOpen ? (
                <ul className="absolute bg-white rounded-xl w-[256px] mt-4 shadow-xl top-4 left-0">
                    {generateOptions()}
                </ul>
            ) : null}
        </div>
    );
};

export default DropdownFilter;
