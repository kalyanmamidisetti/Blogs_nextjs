import * as React from "react";
import Container from "@mui/material/Container";
import dynamic from "next/dynamic";
import Head from "next/head";
import { mockBlogOgContent, mockMetaContent } from "../mockData";
import BlogHeader from "../Components/Header/blogHeader";
import About from "../Components/Header/about";

const MetaHeader = dynamic(() => import("../Components/Header/metaHeader"), {
  loading: () => {
    <p>Data loading</p>;
  },
});

export default function Index() {
  return (
    <Container maxWidth="sm">
      <Head>
        <title>Blogs</title>
        <meta name="description" content="For creating and listing the blogs" />
      </Head>
      <MetaHeader metaContent={mockMetaContent} ogContent={mockBlogOgContent} />
      <About />
      <BlogHeader />
    </Container>
  );
}
