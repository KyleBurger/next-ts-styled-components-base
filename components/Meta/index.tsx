import React from 'react';
import Head from 'next/head';

interface Props {}

const MetaComponent = (props: Props) => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <title>Filmpac</title>
      <meta name="description" content="TODO" />

      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta name="format-detection" content="telephone=no" />

      <meta name="keywords" content="TODO" />
      <meta name="robots" content="index, follow" />

      {/* Google Site Verify */}
      <meta name="google-site-verification" content="TODO" />

      {/* Open Graph Tags */}
      <meta property="og:title" content="TODO" />
      <meta property="og:description" content="TODO" />
      <meta property="og:site_name" content="TODO" />
      <meta property="og:type" content="application/javascript" />
      <meta property="og:url" content="https://filmpac.com" />
      <meta property="og:image" content="TODO" />

      {/* Twitter Tags */}
      <meta name="twitter:site" content="@TODO" />
      <meta name="twitter:title" content="TODO" />
      <meta name="twitter:creator" content="@TODO" />

      {/* <script
        type="text/javascript"
        dangerouslySetInnerHTML={{ __html: `var subscribersSiteId='543d7104-5aa4-46e6-a781-48b67c62bddf';` }}
      />
      <script type="text/javascript" src="https://cdn.subscribers.com/assets/subscribers.js"></script> */}
    </Head>
  );
};

export default MetaComponent;
