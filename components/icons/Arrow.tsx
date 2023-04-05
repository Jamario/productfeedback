interface ArrowProps {
    direction: "up" | "down" | "left";
    className?: string;
}

const Arrow = ({ direction, className }: ArrowProps) => {
    const getArrowSvgPath = () => {
        switch (direction) {
            case "up":
                return "M1 6l4-4 4 4";
            case "down":
                return "M1 1l4 4 4-4";
            case "left":
                return "M6 9L2 5l4-4";
        }
    };

    return (
        <svg width="10" height="10" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d={getArrowSvgPath()} stroke="currentcolor" strokeWidth="2" fill="none" fillRule="evenodd" />
        </svg>
    );
};

export default Arrow;
