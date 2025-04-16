import "@/styles/globals.css";
import type { AppProps } from "next/app";
import DiyBurger from "../../components/DiyBurger/DiyBurger";
import FootingComponent from "../../components/FootingComponent/FootingComponent";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <div>  
            <head>
            <link rel="icon" href="/favicon.ico" sizes="any" />
                </head> 
            
            <header>
                <DiyBurger />
            </header>
            <main>
                <Component {...pageProps} />
            </main>
            <footer>
                <FootingComponent />
            </footer>
        </div>
    )


}
