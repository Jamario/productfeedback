import DropdownFilter from "@/components/DropdownFilter";
import Indicator from "@/components/Indicator";
import UpvoteButton from "@/components/UpvoteButton";

const Home = () => {
    return (
        <main>
            <div>
                <DropdownFilter value="Most upvotes" />
                <br />
                <Indicator isActive={true}>All</Indicator>
                <br />
                <UpvoteButton isActive={true} onClick={() => console.log("12")}>
                    12
                </UpvoteButton>
            </div>
        </main>
    );
};

export default Home;
