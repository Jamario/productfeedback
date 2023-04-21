import { useState } from "react";

import Header from "../components/headers/MainHeader";
import MobileSidebar from "../components/MobileSidebar";

const filters = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"];

const Home = () => {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    const [activeFilter, setActiveFilter] = useState("All");

    return (
        <div className="flex flex-col h-screen">
            <Header isSideBarOpen={isSideBarOpen} setIsSideBarOpen={setIsSideBarOpen} />
            <div className="relative flex-1 overflow-x-hidden">
                <main className="flex-1">Hello world</main>
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

export default Home;
