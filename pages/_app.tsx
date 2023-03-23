import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { Jost } from "next/font/google";

const jost = Jost({ variable: "--font-jost", subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
    return (
        <main className={`${jost.variable} font-sans`}>
            <Component {...pageProps} />
        </main>
    );
}
