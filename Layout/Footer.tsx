import {
  Box,
  Divider,
  Flex,
  HStack,
  Icon,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Container } from "../Theme/common";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { RiKakaoTalkLine } from "react-icons/ri";
import { SiNaver } from "react-icons/si";
import { BiPhoneCall, BiMailSend } from "react-icons/bi";
import { SiGooglemaps } from "react-icons/si";
import Link from "next/link";

const support = [
  `${"대한민국 홍찬식작협찬"}`,
  "Photographer Erdenebulgan",
  "Bayandorj Lkhagvadorj",
];
const partner = [
  "Mongolian tourism association",
  "Busan tourism association",
  "MIAT",
  "HUNNU Air",
  "Aero Mongolia",
  "Mongolian hotel association",
];
const Footer = () => {
  const icons = [
    { icon: FaFacebookF, link: "https://www.facebook.com/boditour/" },
    { icon: BsInstagram, link: "https://www.instagram.com/bodi_tour/" },
    { icon: RiKakaoTalkLine, link: "http://pf.kakao.com/_Prqaj" },
    { icon: SiNaver, link: "https://cafe.naver.com/lovemongol" },
  ];
  return (
    <>
      <Stack pt="100px" pb={10} bg="brandGray.800">
        <SimpleGrid
          color="white"
          flexDir="column"
          w="100%"
          h="100%"
          maxW={Container}
          my={["10px", "40px"]}
          px={["15px", "15px", "40px", "", "20px"]}
          mx="auto"
          columns={[1, 2, 4]}
          spacing={10}
        >
          <Stack spacing={10}>
            <Text fontSize="2xl">Bodi Tour</Text>
            <Text>
              베테랑 기사, 한국어 소통 가능한 가이드, <br /> 24시간 한국
              상담원이 항시 대기 중입니다^^
            </Text>
            <Text fontSize="2xl">Follow Us:</Text>
            <HStack>
              {icons.map((el: any, ind: number) => {
                return (
                  <Link href={el.link}>
                    <a target="_blank">
                      {" "}
                      <Icon
                        key={ind}
                        cursor="pointer"
                        color="brand.700"
                        fontSize="2xl"
                        as={el.icon}
                      />
                    </a>
                  </Link>
                );
              })}
            </HStack>
          </Stack>
          <Stack spacing={10}>
            <Text fontSize="2xl">Contact Us</Text>
            <HStack spacing={5}>
              <Icon
                onClick={() => window.open("tel:+010 7777 9176")}
                fontSize="3xl"
                color="brand.700"
                as={BiPhoneCall}
              />
              <Stack>
                <Text>+010 7777 9176</Text>

                <Text>+97699916532</Text>
              </Stack>
            </HStack>
            <HStack spacing={5}>
              <Link href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSKkHbjxmChltFsJHnKlBlpCSglZQrRwvHjfZSfWWqFSZjRTkbVQbtxnsQjKHSxmJdWfjvjs">
                <a target="_blank">
                  <Icon fontSize="3xl" color="brand.700" as={BiMailSend} />
                </a>
              </Link>
              <Stack>
                <Text>boditour77779176@gmail.com</Text>
                <Text>kakao talk: gimme333</Text>
              </Stack>
            </HStack>
            <HStack spacing={5}>
              <Link href="https://goo.gl/maps/nUqoZMqsCqY9RvGPA">
                <a target="_blank">
                  <Icon fontSize="3xl" color="brand.700" as={SiGooglemaps} />
                </a>
              </Link>
              <Stack>
                <Text>
                  Ulaanbaatar, Mongolia Sukhbaatar district Seoul street, Time
                  classic tower 13th floor 1311{" "}
                </Text>
              </Stack>
            </HStack>
          </Stack>
          <Stack spacing={2}>
            <Text fontSize="2xl">Picture By</Text>
            {support.map((el: any, ind: number) => {
              return (
                <Text fontSize="xs" opacity="0.8" key={ind}>
                  {el}
                </Text>
              );
            })}
          </Stack>
          <Stack spacing={2}>
            <Text fontSize="2xl">Partnership</Text>
            {partner.map((el: any, ind: number) => {
              return (
                <Text fontSize="md" opacity="1" key={ind}>
                  {el}
                </Text>
              );
            })}
          </Stack>
        </SimpleGrid>
        <Divider />
        <HStack justifyContent="center">
          <Text color="white" textAlign="center">
            Copyright 2022
          </Text>
          <Text color="brand.700">Bodi Tour</Text>
          <Text color="white" textAlign="center">
            | Developed By
          </Text>
          <Text color="brand.700">Bodi Tour team</Text>
        </HStack>
      </Stack>
    </>
  );
};
export default Footer;
