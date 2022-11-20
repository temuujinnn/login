import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Theme from "../Theme";
import { ColorProvider } from "../Context/ColorContext";
import "../styles/globals.css";
import LayOut from "../Layout";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Head from "next/head";
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

  const [title, setTitle] = useState("");

  useEffect(() => {
    const pathname = router.pathname
      .split("/")[1]
      .replaceAll("-", " ")
      .split(" ");
    if (pathname.length === 1) return setTitle("Home");
    if (pathname.length === 0) return setTitle("Home");
    setTitle(
      pathname.map((el) => el.charAt(0).toUpperCase() + el.slice(1)).join(" ")
    );
  }, [router]);
  console.log(router.pathname);
  return (
    <ChakraProvider theme={Theme}>
      {router.pathname === "/" ? (
        <Head>
          <title>{"Travel Guide"}</title>
          <link rel="icon" href="/logo_white.png" type="image/png" />
        </Head>
      ) : (
        <Head>
          <title>{title}</title>
          <link rel="icon" href="/logo_white.png" type="image/png" />
        </Head>
      )}

      <ColorProvider>
        <LayOut {...AppProps} loading={loading} />
      </ColorProvider>
    </ChakraProvider>
  );
}

export default MyApp;
