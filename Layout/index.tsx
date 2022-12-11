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
import { UseAuthContext } from "../Context/AuthModalContext";
import { useUser } from "../Context/UserContext";
import Auth from "../Component/Auth";
const LayOut = ({ Component, pageProps, loading }: AppProps) => {
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
  // const [isLoading, setIsLoading] = useState<boolean>(true);
  const { isLoading, get_token } = useUser();
  const { isOpen, onClose, onOpen } = UseAuthContext();
  const {
    isOpen: drawerIsOpen,
    onClose: drawerOnClose,
    onOpen: drawerOnOpen,
  } = useDisclosure();
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/home`)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const Handler = () => {
    console.log("object");
    onOpen();
  };
  const userProps = { isLoading, get_token, Handler, onOpen: drawerOnOpen };
  console.log(isLoading);
  return (
    <>
      <NextNProgress />
      {loading === false && isLoading === true ? (
        <MySpinner />
      ) : (
        <>
          <Header {...userProps} />

          <Component loading={loading} data={data} {...pageProps} />
          <Sidebar isOpen={drawerIsOpen} onClose={drawerOnClose} />
          <Auth isOpen={isOpen} onClose={onClose} />
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
                  src="https://scontent.fuln8-1.fna.fbcdn.net/v/t39.8562-6/120009688_325579128711709_1736249742330805861_n.png?_nc_cat=1&ccb=1-7&_nc_sid=6825c5&_nc_ohc=kGNJ-0B-HpgAX89hetN&_nc_ht=scontent.fuln8-1.fna&oh=00_AfAWBxSAdtqC_LHRx-zU_NKSHv9BuCbrye5Zh8w9E3Ebdg&oe=6380947D"
                  alt="ss"
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
