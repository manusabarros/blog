import type { AppProps } from "next/app";
import { Box, ChakraProvider, extendTheme } from "@chakra-ui/react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";
import "@fontsource/merriweather";
import "@fontsource/roboto";

const theme = extendTheme({
  styles: {
    global: {
      "article section": {
        fontFamily: "Merriweather",
      },
    },
  },
  fonts: {
    heading: "Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol",
    body: "Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol",
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Box minH="100vh" pos="relative">
        <Header />
        <Main>
          <Component {...pageProps} />
        </Main>
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default MyApp;
