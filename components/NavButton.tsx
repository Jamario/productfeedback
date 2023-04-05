import Arrow from "./icons/Arrow";

interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    isDark?: boolean;
    onClick: () => void;
}

const NavButton = ({ children, className, isDark = false, onClick }: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={`group font-bold text-sm rounded-xl flex items-center justify-center ${
                isDark ? "bg-theme-blue-dark text-white  h-14 w-40" : "text-theme-blue-dark"
            } ${className}`}
        >
            <Arrow direction="left" className="mr-2" />
            <span className="group-hover:underline">{children}</span>
        </button>
    );
};

export default NavButton;
