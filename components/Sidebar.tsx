import React from "react";

interface SidebarProps {
    isSideBarOpen: boolean;
    children: React.ReactNode;
    className?: string;
}

const Sidebar = ({ isSideBarOpen, children, className }: SidebarProps) => {
    return (
        <>
            <div
                className={`absolute top-0 bottom-0 right-0 left-0 bg-black bg-opacity-50 ${
                    isSideBarOpen ? "absolute" : "hidden"
                }`}
            />
            <div
                className={`w-[270px] bg-theme-grey-light absolute top-0 right-0 bottom-0 transition-transform duration-300 ease-in-out ${
                    isSideBarOpen ? "translate-x-0" : "translate-x-full"
                } ${className}`}
            >
                {children}
            </div>
        </>
    );
};

export default Sidebar;
