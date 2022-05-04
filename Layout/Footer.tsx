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
const icons = [FaFacebookF, BsInstagram, RiKakaoTalkLine, SiNaver];
const support = ["Contact Us", "About Us", "Travel Guide "];
const Footer = () => {
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
          columns={[1, 2, 3]}
          spacing={10}
        >
          <Stack spacing={10}>
            <Text fontSize="2xl">Bodi Tour</Text>
            <Text>
              Бид үйл ажиллагаагаа 6-н жилийн турш <br /> тасралтгүй явуулж
              байгаа бөгөөд таны <br /> тав тухтай аялуулхыг зорино
            </Text>
            <Text fontSize="2xl">Follow Us:</Text>
            <HStack>
              {icons.map((el: any, ind: number) => {
                return (
                  <Icon
                    key={ind}
                    cursor="pointer"
                    color="brand.700"
                    fontSize="2xl"
                    as={el}
                  />
                );
              })}
            </HStack>
          </Stack>
          <Stack spacing={10}>
            <Text fontSize="2xl">Contact Us</Text>
            <HStack spacing={5}>
              <Icon fontSize="3xl" color="brand.700" as={BiPhoneCall} />
              <Stack>
                <Text>+97680008544</Text>
                <Text>+97680008544</Text>
              </Stack>
            </HStack>
            <HStack spacing={5}>
              <Icon fontSize="3xl" color="brand.700" as={BiMailSend} />
              <Stack>
                <Text>boditour@gmail.com</Text>
                <Text>temvkaa@gmail.com</Text>
              </Stack>
            </HStack>
            <HStack spacing={5}>
              <Icon fontSize="3xl" color="brand.700" as={SiGooglemaps} />
              <Stack>
                <Text>Ulaanbaat, Mongolia</Text>
              </Stack>
            </HStack>
          </Stack>
          <Stack spacing={10}>
            <Text fontSize="2xl">Support</Text>
            {support.map((el: any, ind: number) => {
              return (
                <Text key={ind} cursor="pointer">
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
            | Designed By
          </Text>
          <Text color="brand.700"> 0xTeMk4</Text>
        </HStack>
      </Stack>
    </>
  );
};
export default Footer;
