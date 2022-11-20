import { Box, HStack, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { useRouter } from "next/router";
import axios from "axios";
const header = [
  { title: "All activity", link: "/" },
  { title: "Land scape", link: "/attraction" },
  { title: "Hotel Booking", link: "/camps" },
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
      {/* <Image
        src="https://cdn.discordapp.com/attachments/967177210706411523/979395250076418118/280657499_689840118785053_5800182640897149919_n.jpg"
        alt="bodi tour"
      /> */}
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
