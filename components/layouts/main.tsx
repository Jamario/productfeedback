import { useState } from "react";

import Header from "../headers/MainHeader";
import MobileSidebar from "../MobileSidebar";

type MainLayoutProps = {
    children: React.ReactNode;
};

const filters = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"];

const MainLayout = ({ children }: MainLayoutProps) => {
    const [isSideBarOpen, setIsSideBarOpen] = useState(true);
    const [activeFilter, setActiveFilter] = useState("All");

    return (
        <div className="flex flex-col h-screen">
            <Header isSideBarOpen={isSideBarOpen} setIsSideBarOpen={setIsSideBarOpen} />
            <div className="relative flex-1 overflow-x-hidden">
                <main className="flex-1">{children}</main>
                <MobileSidebar
                    isSideBarOpen={isSideBarOpen}
                    filters={filters}
                    activeFilter={activeFilter}
                    setActiveFilter={setActiveFilter}
                />
            </div>
        </div>
    );
};

export default MainLayout;
