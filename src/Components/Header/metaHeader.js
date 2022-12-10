import React from "react";
import Head from "next/head";

export default function MetaHeader(props) {
  const metaInfo = props?.metaInfo;
  const ogInfo = props?.ogContent;

  return (
    <Head>
      <title>{ogInfo?.og_title} | Blog</title>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
      />
      <meta name="theme-color" content="#000000" />

      <meta name="description" content={metaInfo?.meta_description} />
      <meta name="keywords" content={metaInfo?.meta_keyword} />
      <meta name="author" content={metaInfo?.meta_author} />

      <meta
        prefix="og: http://ogp.me/ns#"
        property="og:title"
        content={ogInfo?.og_title}
      />
      <meta name="og:keywords" content={ogInfo?.og_keyword} />
      <meta property="og:url" content={ogInfo?.og_url} />
      <meta property="og:description" content={ogInfo?.og_description} />
      <meta property="og:image" content={ogInfo?.og_image} />
      <meta property="og:image:width" content="1920" />
      <meta property="og:image:height" content="1081" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
}
