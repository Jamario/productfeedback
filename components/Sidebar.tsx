interface SidebarProps {
    isSideBarOpen: boolean;
}

const Sidebar = ({ isSideBarOpen }: SidebarProps) => {
    return (
        <div
            className={`w-[270px] bg-blue-500 absolute top-0 right-0 bottom-0 ${
                isSideBarOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
            Sidebar
        </div>
    );
};

export default Sidebar;
