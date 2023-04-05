import { useState } from "react";
import Arrow from "./icons/Arrow";
import Check from "./icons/Check";

interface DropdownFilterProps {
    value: string;
    className?: string;
    onChange?: (value: string) => void;
}

const Options = ["Most upvotes", "Least Upvotes", "Most comments", "Least comments"];

const DropdownFilter = ({ value, className, onChange }: DropdownFilterProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const generateOptions = () => {
        return Options.map((option) => {
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
        <div tabIndex={-1} className="inline-block">
            <div
                className="h-16 w-fit flex flex-row items-center justify-center text-white bg-theme-blue-dark rounded-xl px-4 select-none cursor-pointer"
                onClick={handleClick}
                onKeyDown={handleKeyDown}
                tabIndex={0}
            >
                <div className="mr-1">Sort by</div>
                <span>:</span>
                <div className="mx-2 font-bold">{value}</div>
                {isOpen ? <Arrow direction="up" /> : <Arrow direction="down" />}
            </div>
            {isOpen ? <ul className="bg-white rounded-xl w-[256px] mt-4 shadow-xl">{generateOptions()}</ul> : null}
        </div>
    );
};

export default DropdownFilter;
