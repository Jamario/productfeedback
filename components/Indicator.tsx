interface IndicatorProps {
    isActive: boolean;
    children: React.ReactNode;
    className?: string;
}

const Indicator = ({ isActive, children, className }: IndicatorProps) => {
    return (
        <div
            className={`py-2 px-4 rounded-xl inline-block font-bold ${
                isActive ? "bg-theme-blue text-theme-grey" : "bg-theme-grey text-theme-blue hover:bg-[#CFD7FF]"
            } ${className}`}
        >
            {children}
        </div>
    );
};

export default Indicator;
