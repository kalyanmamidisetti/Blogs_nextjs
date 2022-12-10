// import React from "react";
// import PropTypes from "prop-types";
// import Head from "next/head";
// import { ThemeProvider } from "@mui/material/styles";
// import CssBaseline from "@mui/material/CssBaseline";
// import { CacheProvider } from "@emotion/react";
// import createEmotionCache from "../createEmotionCache";
// import { StyledEngineProvider } from "@mui/material/styles";

// import theme from "../theme";

// // Client-side cache, shared for the whole session of the user in the browser.
// const clientSideEmotionCache = createEmotionCache();

// function MyApp(props) {
//   console.log(props);
//   const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

//   return (
//     <StyledEngineProvider injectFirst>
//       <CacheProvider value={emotionCache}>
//         <Head>
//           <meta name="viewport" content="initial-scale=1, width=device-width" />
//         </Head>
//         <ThemeProvider theme={theme}>
//           {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
//           <CssBaseline />
//           <Component {...pageProps} />
//         </ThemeProvider>
//       </CacheProvider>
//     </StyledEngineProvider>
//   );
// }

// MyApp.propTypes = {
//   Component: PropTypes.elementType.isRequired,
//   emotionCache: PropTypes.object,
//   pageProps: PropTypes.object.isRequired,
// };

// export default MyApp;

import NextApp from "next/app";
import React from "react";
import { ThemeProvider } from "styled-components";
const theme = {
  primary: "green",
};
export default class App extends NextApp {
  // remove it here
  componentDidMount() {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentNode)
      jssStyles.parentNode.removeChild(jssStyles);
  }
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
