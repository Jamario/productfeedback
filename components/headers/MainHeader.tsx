import CloseIcon from "../icons/Close";
import HamburgerIcon from "../icons/Hamburger";

interface MainHeaderProps {
    isSideBarOpen: boolean;
    setIsSideBarOpen: (isSideBarOpen: boolean) => void;
}

const MainHeader = ({ isSideBarOpen, setIsSideBarOpen }: MainHeaderProps) => {
    const toggleSideBar = () => {
        setIsSideBarOpen(!isSideBarOpen);
    };

    return (
        <header className="flex justify-between items-center bg-gradient-to-tr from-gradientColors-from via-gradientColors-via to-gradientColors-to text-white px-6 py-4">
            <div>
                <strong>Product Name</strong>
                <div className="text-sm">Feedback Board</div>
            </div>
            <button onClick={toggleSideBar}>{isSideBarOpen ? <CloseIcon /> : <HamburgerIcon />}</button>
        </header>
    );
};

export default MainHeader;
