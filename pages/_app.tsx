import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Theme from "../Theme";
import { ColorProvider } from "../Context/ColorContext";
import "../styles/globals.css";
import LayOut from "../Layout";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
function MyApp(AppProps: AppProps) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    axios.defaults.headers.common["Cache-Control"] = "no-store";
    const handleRouteStart = (url: string) => {
      setLoading(true);
    };
    const handleRouteComplete = (url: string) => {
      setLoading(false);
    };

    router.events.on("routeChangeStart", (url, { shallow }) => {
      handleRouteStart(url);
    });
    router.events.on("routeChangeComplete", (url, { shallow }) => {
      handleRouteComplete(url);
    });
    router.events.on("routeChangeError", (url, { shallow }) => {
      handleRouteComplete(url);
    });

    return () => {
      router.events.off("routeChangeStart", handleRouteStart);
      router.events.off("routeChangeComplete", handleRouteComplete);
      router.events.off("routeChangeError", handleRouteComplete);
    };
  }, [router.events]);
  return (
    <ChakraProvider theme={Theme}>
      <ColorProvider>
        <LayOut {...AppProps} loading={loading} />
      </ColorProvider>
    </ChakraProvider>
  );
}

export default MyApp;
