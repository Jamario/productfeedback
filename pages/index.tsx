import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import emptyIllustration from "../images/illustration-empty.svg";

import Header from "@/components/headers/MainHeader";
import SortOptions from "@/components/SortOptions";
import MobileSidebar from "@/components/MobileSidebar";

const filters = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"];
const sortOptions = ["Most Upvotes", "Least Upvotes", "Most Comments", "Least Comments"];

const Home = () => {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    const [activeFilter, setActiveFilter] = useState("All");
    const [activeSortOption, setActiveSortOption] = useState("Most Upvotes");
    const [suggestions, setSuggestions] = useState([]);

    return (
        <div className="flex flex-col h-screen">
            <Header isSideBarOpen={isSideBarOpen} setIsSideBarOpen={setIsSideBarOpen} />
            <div className="relative flex-1 overflow-x-hidden">
                <main className="flex flex-col h-full">
                    <SortOptions
                        sortOptions={sortOptions}
                        activeSortOption={activeSortOption}
                        setActiveSortOption={setActiveSortOption}
                    />
                    <div className="bg-theme-grey px-6 py-8 flex-1">
                        {suggestions.length === 0 ? (
                            <section className="min-h-[460px] w-full text-center text-theme-grey-dark bg-white rounded-lg px-6 flex flex-col items-center justify-center">
                                <Image src={emptyIllustration} alt="Empty Illustration" />
                                <header className="mt-9 mb-3 text-theme-blue-dark font-bold text-lg">
                                    The is no feedback yet.
                                </header>
                                <p className="mb-6">
                                    Got a suggestion? Found a bug that needs to be squashed? We love hearing about new
                                    ideas to improve our app.
                                </p>
                                <Link
                                    href="/"
                                    className="bg-theme-purple h-10 w-32 rounded-lg text-sm flex items-center justify-center text-theme-grey"
                                >
                                    <strong>+ Add Feedback</strong>
                                </Link>
                            </section>
                        ) : (
                            <div>Some suggestions</div>
                        )}
                    </div>
                </main>
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
