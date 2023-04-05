import Arrow from "./icons/Arrow";

interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    isActive?: boolean;
    onClick: () => void;
}

const UpvoteButton = ({ children, className, isActive = false, onClick }: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={`h-13 w-10 p-2 font-bold text-sm rounded-xl flex flex-col items-center justify-center ${
                isActive ? "bg-theme-blue text-theme-grey" : "bg-theme-grey text-theme-blue hover:bg-[#CFD7FF]"
            } ${className}`}
        >
            <Arrow direction="up" className="mb-1" />
            <span className="group-hover:underline">{children}</span>
        </button>
    );
};

export default UpvoteButton;
