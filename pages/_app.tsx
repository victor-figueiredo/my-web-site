import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Victor Figueiredo Website</title>
        <meta name="description" content="Desenvolvedor Frontend" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
