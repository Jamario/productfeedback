interface IndicatorProps {
    isActive: boolean;
    children: React.ReactNode;
    onClick: () => void;
    className?: string;
}

const Indicator = ({ isActive, children, className, onClick }: IndicatorProps) => {
    return (
        <button
            className={`py-2 px-4 rounded-xl inline-block font-bold ${
                isActive ? "bg-theme-blue text-theme-grey" : "bg-theme-grey text-theme-blue hover:bg-[#CFD7FF]"
            } ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Indicator;
