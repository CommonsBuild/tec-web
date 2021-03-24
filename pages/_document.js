import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="preload"
            href="/fonts/bai-jamjuree-latin-400-normal.woff2"
            as="font"
            crossOrigin=""
            type="font/woff2"
          />
          <link
            rel="preload"
            href="/fonts/bai-jamjuree-latin-400-normal.woff"
            as="font"
            crossOrigin=""
            type="font/woff2"
          />
          <link
            rel="preload"
            href="/fonts/bai-jamjuree-latin-600-normal.woff2"
            as="font"
            crossOrigin=""
            type="font/woff2"
          />
          <link
            rel="preload"
            href="/fonts/bai-jamjuree-latin-600-normal.woff"
            as="font"
            crossOrigin=""
            type="font/woff2"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
