import Nav from "@/components/LandingPage/Nav";
import Transition from "@/components/Transition/Transition";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Nav />
      <Transition>
        <Component key={router.route} {...pageProps} />
      </Transition>
    </>
  );
}
