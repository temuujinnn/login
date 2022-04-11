import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Theme from "../Theme";
import { ColorProvider } from "../Context/ColorContext";
import { LayOut } from "./Layout";

function MyApp({ pageProps }: AppProps) {
  return (
    <ChakraProvider theme={Theme}>
      <ColorProvider>
        <LayOut {...pageProps} />
      </ColorProvider>
    </ChakraProvider>
  );
}

export default MyApp;
