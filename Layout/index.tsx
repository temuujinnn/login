import { AppProps } from "next/dist/shared/lib/router/router";
import NextNProgress from "nextjs-progressbar";

import {
  Flex,
  Image,
  useDisclosure,
  usePrefersReducedMotion,
  keyframes,
} from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Link from "next/link";
import { MySpinner } from "../Component/MySpinner";
import Loader from "../Component/Loader";
import { useEffect, useState } from "react";
import axios from "axios";
const LayOut = ({ Component, pageProps, loading }: AppProps) => {
  const {
    isOpen: drawerIsOpen,
    onClose: drawerOnClose,
    onOpen: drawerOnOpen,
  } = useDisclosure();
  const spin = keyframes`
  from { transform: translateY(0px)   }
  50% { transform: translateY(8px)   }

  to { transform: translateY(0px)  }
  
`;
  const prefersReducedMotion = usePrefersReducedMotion();
  const animation = prefersReducedMotion
    ? undefined
    : `${spin}  2s linear infinite both`;
  const [data, setData] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/home`)
      .then((res) => {
        setData(res.data.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(isLoading);
  return (
    <>
      <NextNProgress />
      {loading === false && isLoading === true ? (
        <MySpinner />
      ) : (
        <>
          <Header onOpen={drawerOnOpen} />

          <Component loading={loading} data={data} {...pageProps} />
          <Sidebar isOpen={drawerIsOpen} onClose={drawerOnClose} />
          <Link href="https://namecard.kakao.com/boditour">
            <a target="_blank">
              <Flex
                animation={animation}
                zIndex={10}
                w={["60px", "80px"]}
                h={["60px", "80px"]}
                pos="fixed"
                bottom="5"
                right="10"
              >
                <Image
                  borderRadius="12px"
                  src="https://cdn.discordapp.com/attachments/967177210706411523/975000967705657375/unnamed_6.png"
                />
              </Flex>
            </a>
          </Link>
          <Footer />
        </>
      )}
    </>
  );
};
export default LayOut;
