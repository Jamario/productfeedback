import { useState } from "react";
import Link from "next/link";
import Header from "../headers/MainHeader";
import Sidebar from "../Sidebar";
import Indicator from "../Indicator";

type MainLayoutProps = {
    children: React.ReactNode;
};

const filters = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"];

const MainLayout = ({ children }: MainLayoutProps) => {
    const [isSideBarOpen, setIsSideBarOpen] = useState(true);
    const [activeFilter, setActiveFilter] = useState("All");

    const getFilterMap = () =>
        filters.map((filter) => {
            return (
                <Indicator
                    key={filter}
                    isActive={activeFilter === filter}
                    onClick={() => setActiveFilter(filter)}
                    className="text-sm"
                >
                    {filter}
                </Indicator>
            );
        });

    console.log("active filter is", activeFilter);
    return (
        <div className="flex flex-col h-screen">
            <Header isSideBarOpen={isSideBarOpen} setIsSideBarOpen={setIsSideBarOpen} />
            <div className="relative flex-1 overflow-x-hidden">
                <main className="flex-1">{children}</main>
                <Sidebar isSideBarOpen={isSideBarOpen} className="p-6">
                    <div className="rounded-lg w-full bg-white mb-6 pl-5 pt-5 pb-7 pr-4 min-h-[180px] flex flex-row content-between justify-between flex-wrap">
                        {getFilterMap()}
                    </div>
                    <div className="rounded-lg w-full bg-white p-6">
                        <div className="flex justify-between mb-6 items-center">
                            <strong className="text-lg text-theme-blue-dark">Roadmap</strong>
                            <Link href="/roadmap" className="text-blue-500 hover:text-blue-700 underline">
                                View
                            </Link>
                        </div>
                        <div className="flex items-center text-theme-grey-dark">
                            <div className="h-2 w-2 rounded-full bg-theme-orange mr-4" />
                            <div className="flex-1">Planned</div>
                            <strong>2</strong>
                        </div>
                        <div className="flex items-center text-theme-grey-dark">
                            <div className="h-2 w-2 rounded-full bg-theme-purple mr-4" />
                            <div className="flex-1">In-Progress</div>
                            <strong>3</strong>
                        </div>
                        <div className="flex items-center text-theme-grey-dark">
                            <div className="h-2 w-2 rounded-full bg-theme-blue-light mr-4" />
                            <div className="flex-1">Live</div>
                            <strong>1</strong>
                        </div>
                    </div>
                </Sidebar>
            </div>
        </div>
    );
};

export default MainLayout;
