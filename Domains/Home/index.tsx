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
  VStack,
  Input,
  Select,
  HStack,
} from "@chakra-ui/react";
import { useColor } from "../../Context/ColorContext";
import { Container } from "../../Theme/common";
import { SlideHome } from "./SlideHome";
import { GoCalendar } from "react-icons/go";
import { GrMap } from "react-icons/gr";

import { FaUser, FaRegHandshake } from "react-icons/fa";
import { GiTeamIdea } from "react-icons/gi";
import { BiHappy } from "react-icons/bi";
import { OurTravel } from "./OurTravel";

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { SubHeader } from "../../Component/SubHeader";

export const Home = () => {
  const { bg } = useColor();
  const whyTour = [
    { icon: FaUser, title: "30+ 전세계 가이드" },
    { icon: FaRegHandshake, title: "100% 믿을 수 있는 여행사" },
    { icon: GiTeamIdea, title: "8+년 여행 경험 " },
    { icon: BiHappy, title: "90%가 여행자의 행복합니다" },
  ];
  const [data, setData] = useState<any>();
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/home`)
      .then((res) => {
        console.log(res);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  if (!data) {
    return null;
  }

  return (
    <>
      <Box>
        <SlideHome banners={data.banners} />
      </Box>

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
        <SubHeader text="가장 인기 있는 최고의 모험" />
        <SimpleGrid mt={10} spacing={10} columns={[1, 2, 2, 4, 4]}>
          {data.specialTours.map((el: any, ind: number) => {
            return (
              <Link href={el._id}>
                <AspectRatio ratio={1 / 1}>
                  <Stack boxShadow="xl" key={ind} cursor="pointer">
                    <Image
                      _hover={{
                        transform: "scale(1.05)",
                        boderRadius: "0",
                      }}
                      transition="ease .2s"
                      src={el.banner}
                    />

                    <Flex
                      h="60px"
                      w="100%"
                      textAlign="left"
                      flexDir="column"
                      px={3}
                      justifyContent="space-between"
                    >
                      <Text color="brand.700" fontSize="md">
                        <Icon as={GrMap} /> {el.tourName}
                      </Text>
                      <Text fontSize="md">₩120.000/원 1인</Text>
                    </Flex>
                  </Stack>
                </AspectRatio>
              </Link>
            );
          })}
        </SimpleGrid>

        <SubHeader text="여행에 가장 적합한 패키지를 선택하세요" />

        <SimpleGrid gap={5} columns={[1, 2, 2, 4, 4]}>
          {data.AllTours?.map((el: any, ind: number) => {
            return (
              <Link href={el._id}>
                <AspectRatio ratio={1 / 1}>
                  <Stack boxShadow="xl" key={ind} cursor="pointer">
                    <Image
                      _hover={{
                        transform: "scale(1.05)",
                        boderRadius: "0",
                      }}
                      transition="ease .2s"
                      src={el.banner}
                    />

                    <Flex
                      h="60px"
                      w="100%"
                      textAlign="left"
                      flexDir="column"
                      px={3}
                      justifyContent="space-between"
                    >
                      <Text color="brand.700" fontSize="md">
                        <Icon as={GrMap} /> {el.tourName}
                      </Text>
                      <Text fontSize="md">₩120.000/원 1인</Text>
                    </Flex>
                  </Stack>
                </AspectRatio>
              </Link>
            );
          })}
        </SimpleGrid>

        <SubHeader text="보디투어로 여행하는 이유" />

        <SimpleGrid spacing={10} columns={[1, 2, 4]}>
          {whyTour.map((el: any, ind: number) => {
            return <OurTravel el={el} ind={ind} />;
          })}
        </SimpleGrid>
      </Stack>
    </>
  );
};
