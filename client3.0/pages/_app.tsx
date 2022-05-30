import "../styles/globals.scss";
import type { AppProps } from "next/app";
// import Script from "next/script";
// import AdminLayout from "@components/Templates/AdminLayout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <Script src="https://unpkg.com/flowbite@1.4.7/dist/flowbite.js" /> */}

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
