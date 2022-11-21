import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  Text,
  HStack,
  Spacer,
  Divider,
  Icon,
  Select,
  Flex,
  Stack,
} from "@chakra-ui/react";
import { UseSize } from "../Hooks/UseSize";
import { useState } from "react";
import Link from "next/link";
import { RiKakaoTalkLine } from "react-icons/ri";
import { SiNaver } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

interface Sidebar {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: Sidebar) => {
  const [reverse, setReverse] = useState(false);
  const size = UseSize("drawer");

  const props = {
    isOpen,
    onClose,
    size: "xs",
  };

  const onLogin = () => {
    onClose();
  };
  const header = [
    { title: "홈페이지", link: "/" },
    { title: "관광지 소개", link: "/attraction" },
    { title: "여행지 숙소", link: "/camps" },
    { title: "Q/A", link: "/faq" },
  ];

  const icons = [
    { icon: FaFacebookF, link: "https://www.facebook.com/boditour/" },
    { icon: BsInstagram, link: "https://www.instagram.com/bodi_tour/" },
    { icon: RiKakaoTalkLine, link: "http://pf.kakao.com/_Prqaj" },
    { icon: SiNaver, link: "https://cafe.naver.com/lovemongol" },
  ];
  return (
    <Drawer {...props}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerCloseButton />
        </DrawerHeader>
        <DrawerBody pt={3} zIndex="12">
          <Stack justifyContent="center" w="100%" h="100%">
            {header.map((el: any, ind: number) => {
              return (
                <Link key={ind} href={el.link} passHref>
                  <Stack onClick={onClose} p={2}>
                    <Text fontSize="xl" fontWeight="semibold">
                      {el.title}
                    </Text>
                    <Divider />
                  </Stack>
                </Link>
              );
            })}
            <Spacer />
            <HStack spacing={6} pb={5} justifyContent="center">
              {icons.map((el: any, ind: number) => {
                return (
                  <Link key={ind} href={el.link} passHref>
                    <a target="_blank">
                      <Icon
                        key={ind}
                        cursor="pointer"
                        color="brand.700"
                        fontSize="3xl"
                        as={el.icon}
                      />
                    </a>
                  </Link>
                );
              })}
            </HStack>
          </Stack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
export default Sidebar;
