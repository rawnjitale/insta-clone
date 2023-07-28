// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function MyDocument() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="shortcut icon"
          href="https://img.freepik.com/free-vector/instagram-icon_1057-2227.jpg?w=740&t=st=1690450625~exp=1690451225~hmac=a77500c35505ef0ae3269215ed7b9a8a10fe4f8dffb82ae4dbf27667498b02be"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
