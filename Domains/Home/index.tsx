import {
  AspectRatio,
  Box,
  Flex,
  Button,
  Icon,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Spinner,
  HStack,
} from "@chakra-ui/react";
import { useColor } from "../../Context/ColorContext";
import { Container } from "../../Theme/common";
import { SlideHome } from "./SlideHome";

import { FaUser, FaRegHandshake } from "react-icons/fa";
import { GiTeamIdea } from "react-icons/gi";
import { BiHappy } from "react-icons/bi";
import { OurTravel } from "./OurTravel";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { SubHeader } from "../../Component/SubHeader";
import { MySpinner } from "../../Component/MySpinner";

export const Home = ({ isLoading, data }: any) => {
  const whyTour = [
    { icon: FaRegHandshake, title: "100% Итгэж болох хамт олон" },
    { icon: GiTeamIdea, title: "2+ жилийн туршлага" },
    { icon: BiHappy, title: "99% Амжилттай захиалга" },
  ];

  useEffect(() => {}, [isLoading]);
  if (!data) {
    return null;
  }

  return (
    <>
      {isLoading ? (
        <MySpinner />
      ) : (
        <>
          <Box>
            <SlideHome banners={data.banners} />
          </Box>

          <Stack
            borderRadius="12px"
            w="100%"
            h="100%"
            maxW={Container}
            bg="white"
            my={["10px", "90px"]}
            px={["15px", "15px", "40px", "", "20px"]}
            mx="auto"
            py={10}
            spacing={10}
          >
            <Text textAlign="center" fontWeight="bold" fontSize="4xl">
              Аялалын төрөл
            </Text>
            <SimpleGrid gap={10} columns={[1, 2, 2, 4, 3]}>
              {data?.tourTypes?.map((el: any, ind: number) => {
                return (
                  <Link key={ind} href={`tourlist/${el._id}`} passHref>
                    <AspectRatio ratio={1 / 1}>
                      <Stack
                        boxShadow="xl"
                        borderRadius="12px"
                        key={ind}
                        cursor="pointer"
                        border="1px solid gray"
                        justifyContent="space-between"
                      >
                        <Image
                          alt="ss"
                          _hover={{
                            transform: "scale(1.05)",
                            boderRadius: "0",
                          }}
                          transition="ease .2s"
                          w="100%"
                          h="100%"
                          src={el.banner}
                        />
                        <Flex
                          pos="absolute"
                          bottom="0"
                          borderRadius="12px"
                          bg="#FF6166"
                          justifyContent="center"
                          w="100%"
                        >
                          <Flex
                            w="100%"
                            alignItems="center"
                            px={4}
                            py={1}
                            justifyContent="space-between"
                          >
                            <Text py={2} color="white" fontSize="2xl">
                              {el.name}
                            </Text>
                            <Button>Explore</Button>
                          </Flex>
                        </Flex>
                      </Stack>
                    </AspectRatio>
                  </Link>
                );
              })}
            </SimpleGrid>
          </Stack>
          <Stack
            w="100%"
            color="white"
            bgSize={"cover"}
            h="60vh"
            bg={`url(https://cdn.discordapp.com/attachments/967177210706411523/977143155461869608/175875884_4168116163208858_2599896246514579901_n.jpg) no-repeat center`}
            backgroundAttachment="fixed"
          ></Stack>
          <Stack
            borderRadius="12px"
            w="100%"
            h="100%"
            maxW={Container}
            my={["10px", "40px"]}
            px={["15px", "15px", "40px", "", "20px"]}
            mx="auto"
            spacing={10}
          >
            <SubHeader text="Яагаад биднийг сонгох хэрэгтэй вэ?" />
            <Box h="10px" />

            <SimpleGrid spacing={10} columns={[1, 2, 3]}>
              {whyTour.map((el: any, ind: number) => {
                return <OurTravel key={ind} el={el} ind={ind} />;
              })}
            </SimpleGrid>
          </Stack>
        </>
      )}
    </>
  );
};
