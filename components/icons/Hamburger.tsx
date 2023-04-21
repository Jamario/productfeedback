interface HamburgerProps {
    className?: string;
}

const Hamburger = ({ className }: HamburgerProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" className={className}>
            <path fill="currentcolor" fillRule="evenodd" d="M0 0h20v3H0zM0 7h20v3H0zM0 14h20v3H0z" />
        </svg>
    );
};

export default Hamburger;
