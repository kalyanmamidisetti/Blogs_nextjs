import * as React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import dynamic from "next/dynamic";
import Head from "next/head";
import Copyright from "../copyRight";
import { mockBlogOgContent, mockMetaContent } from "../mockData";
import BlogHeader from "../Components/Header/blogHeader";

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
        {/* <link rel="icon" href="../public/fav.png" /> */}{" "}
      </Head>
      <BlogHeader />
      <MetaHeader metaContent={mockMetaContent} ogContent={mockBlogOgContent} />
      <Box sx={{ my: 4 }}>
        <Copyright />
      </Box>
    </Container>
  );
}
