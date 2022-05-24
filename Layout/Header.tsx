import { Box, HStack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { useRouter } from "next/router";
import axios from "axios";
const header = [
  { title: "홈페이지", link: "/" },
  // { title: "여행 상품", link: "/travel_list" },
  { title: "관광지 소개", link: "/attraction" },

  { title: "여행지 숙소", link: "/camps" },
  { title: "Q/A", link: "/faq" },
];
interface Header {
  onOpen: () => void;
}

const Header = ({ onOpen }: Header) => {
  const router = useRouter();
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <HStack
      bg={router.pathname === "/" && offset === 0 ? "" : "gray.100"}
      w="100%"
      zIndex="10"
      pos="fixed"
      spacing={20}
      color={router.pathname === "/" && offset === 0 ? "white" : "black"}
      transition="ease .2s"
      py={5}
      px={10}
      boxShadow={router.pathname === "/" && offset === 0 ? "" : "xl"}
      justifyContent={["space-between", "center"]}
    >
      <Box w="10px" />
      {header.map((el: any, ind: number) => {
        return (
          <Link key={ind} passHref href={el.link}>
            <Text
              display={["none", "none", "none", "none", "flex", "flex"]}
              _hover={{ textDecoration: "underline" }}
              cursor="pointer"
              fontSize="xl"
              fontWeight="bold"
            >
              {el.title}
            </Text>
          </Link>
        );
      })}
      <Box
        onClick={onOpen}
        display={["block", "block", "block", "block", "none", "none"]}
      >
        <FiMenu />
      </Box>
    </HStack>
  );
};
export default Header;
