import Link from "next/link";
import DropdownFilter from "./DropdownFilter";

interface SortOptionsProps {
    sortOptions: string[];
    activeSortOption: string;
    setActiveSortOption: (activeSortOption: string) => void;
    className?: string;
}

const SortOptions = ({ sortOptions, activeSortOption, setActiveSortOption, className }: SortOptionsProps) => {
    const handleChange = (value: string) => {
        setActiveSortOption(value);
    };

    return (
        <div className={`bg-theme-blue-dark text-theme-grey px-6 h-14 flex items-center text-sm ${className}`}>
            <div className="flex-1">
                <DropdownFilter options={sortOptions} value={activeSortOption} onChange={handleChange} />
            </div>
            <Link href="/" className="bg-theme-purple h-10 w-32 rounded-lg text-sm flex items-center justify-center">
                <strong>+ Add Feedback</strong>
            </Link>
        </div>
    );
};

export default SortOptions;
