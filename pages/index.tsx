import type { ReactElement } from "react";
import type { NextPageWithLayout } from "./_app";

import MainLayout from "@/components/layouts/main";

const Home: NextPageWithLayout = () => {
    return <div>Hello World</div>;
};

Home.getLayout = function getLayout(page: ReactElement) {
    return <MainLayout>{page}</MainLayout>;
};

export default Home;
