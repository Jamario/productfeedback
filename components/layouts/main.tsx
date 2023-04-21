import { useState } from "react";
import Header from "../headers/MainHeader";
import Sidebar from "../Sidebar";

type MainLayoutProps = {
    children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    return (
        <div className="flex flex-col h-screen">
            <Header isSideBarOpen={isSideBarOpen} setIsSideBarOpen={setIsSideBarOpen} />
            <div className="relative flex-1 overflow-x-hidden">
                <main className="flex-1">{children}</main>
                <Sidebar isSideBarOpen={isSideBarOpen} />
            </div>
        </div>
    );
};

export default MainLayout;
