import Link from "next/link";
import Indicator from "./Indicator";

interface MobileSidebarProps {
    isSideBarOpen: boolean;
    filters: string[];
    activeFilter: string;
    setActiveFilter: (activeFilter: string) => void;
    className?: string;
}

const MobileSidebar = ({ isSideBarOpen, className, filters, activeFilter, setActiveFilter }: MobileSidebarProps) => {
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

    const transitionProperty = "transform, visibility";
    const transitionDelay = isSideBarOpen ? "0s, 0s" : "0s, 0.3s";

    return (
        <>
            <div
                className={`absolute top-0 bottom-0 right-0 left-0 bg-black bg-opacity-50 ${
                    isSideBarOpen ? "absolute" : "hidden"
                }`}
            />
            <div
                className={`w-[270px] bg-theme-grey-light absolute top-0 right-0 bottom-0 duration-300 ease-in-out p-6 ${
                    isSideBarOpen ? "translate-x-0 visible" : "translate-x-full invisible"
                } ${className}`}
                style={{ transitionProperty, transitionDelay }}
            >
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
            </div>
        </>
    );
};

export default MobileSidebar;
