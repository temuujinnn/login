import { Box, Flex, HStack, Image, Select, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { useRouter } from "next/router";
import axios from "axios";
const header = [
  { title: "Home", link: "/" },
  { title: "투어상품", link: "/travel_list" },
  { title: "투어가이드", link: "/travel_guide" },
  { title: "이미지 & 비디오", link: "/image_video" },
  { title: "결제 안내", link: "/payment_guide" },
  { title: "우리에 대해", link: "/about_us" },
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
      justifyContent="center"
    >
      {header.map((el: any, ind: number) => {
        return (
          <Link key={ind} href={el.link}>
            <Text
              display={["none", "none", "none", "none", "flex", "flex"]}
              _hover={{ textDecoration: "underline" }}
              cursor="pointer"
              fontSize="lg"
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
      {/* <Select size="xs">
        <option>en</option>
        <option>mn</option>
      </Select> */}
    </HStack>
  );
};
export default Header;
