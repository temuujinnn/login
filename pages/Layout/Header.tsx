import { Box, Flex, HStack, Image, Select, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { useRouter } from "next/router";
const header = [
  { title: "Home", link: "/" },
  { title: "Travel list", link: "/travel_list" },
  { title: "Travel Guide", link: "/travel_guide" },
  { title: "Image & Video", link: "/image_video" },
  { title: "Payment Guide", link: "/payment_guide" },
  { title: "About us", link: "/about_us" },
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
  console.log(offset);
  return (
    <HStack
      bg={router.pathname === "/" && offset === 0 ? "" : "gray.100"}
      w="100%"
      zIndex="10"
      pos="fixed"
      spacing={20}
      color={router.pathname === "/" && offset === 0 ? "white" : "black"}
      transition="ease .2s"
      py={3}
      px={10}
      boxShadow={router.pathname === "/" && offset === 0 ? "" : "xl"}
    >
      <Image src="https://cdn.discordapp.com/attachments/967177210706411523/967289836111286282/4.png" />
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
