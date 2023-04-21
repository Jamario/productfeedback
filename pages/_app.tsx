import "@/styles/globals.css";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";

import { Jost } from "next/font/google";

const jost = Jost({ variable: "--font-jost", subsets: ["latin"] });

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
    const getLayout = Component.getLayout ?? ((page) => page);

    return (
        <main className={`${jost.variable} font-sans`}>
            {/* <Component {...pageProps} /> */}
            {getLayout(<Component {...pageProps} />)}
        </main>
    );
}
