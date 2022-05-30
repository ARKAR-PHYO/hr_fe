import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/flowbite@1.4.7/dist/flowbite.min.css"
        />
        <Script
          src="https://unpkg.com/flowbite@1.4.7/dist/flowbite.js"
          strategy="beforeInteractive"
        />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
