// create an svg icon component for a checkmark
interface CheckProps {
    className?: string;
}

const Check = ({ className }: CheckProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="11" className={className}>
            <path fill="none" stroke="currentcolor" strokeWidth="2" d="M1 5.233L4.522 9 12 1" />
        </svg>
    );
};

export default Check;
