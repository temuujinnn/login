import {
  Box,
  Flex,
  HStack,
  Image,
  Stack,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  useBreakpointValue,
  AspectRatio,
} from "@chakra-ui/react";
import { Container } from "../../Theme/common";
import { BsClock } from "react-icons/bs";
import Slider from "react-slick";
import { Card } from "../Home/SlideHome";
import { useState } from "react";
export const TourDetail = ({ data }: any) => {
  const ratio = useBreakpointValue({
    base: 2 / 3,
    md: 1,
    lg: 4 / 3,
    xl: 5 / 2,
  });

  const settings = {
    slidesToShow: 1,
    speed: 500,
    dot: true,
    autoplaySpeed: 5000,
    autoplay: true,
    arrows: false,
  };

  return (
    <>
      <Box h="100px"></Box>
      <Stack
        w="100%"
        h="100%"
        maxW={Container}
        my={["10px", "40px"]}
        px={["15px", "15px", "40px", "", "20px"]}
        mx="auto"
      >
        <HStack>
          <Stack w="100%">
            <Text fontSize="2xl">{data?.tourName}</Text>
            {/* <Image src={data.banner} alt="banner bodi" /> */}
            {console.log(data.images)}
            <Slider {...settings}>
              {data.images?.map((el: any, ind: number) => {
                return (
                  <TourDetailSlide
                    url={el}
                    key={ind}
                    ratio={ratio}
                    h="40vh"
                    src={el}
                  />
                );
              })}
            </Slider>

            {data.days?.map((el: any, ind: number) => {
              return (
                <Accordion bg="white" allowMultiple>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box flex="1" textAlign="left">
                          {el.title}
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      {el.schedule.map((el: any, ind: number) => {
                        return (
                          <HStack>
                            <HStack my={3} spacing={6}>
                              <Text>
                                <BsClock />
                              </Text>
                              <Text>{el}</Text>
                            </HStack>
                          </HStack>
                        );
                      })}
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              );
            })}
          </Stack>
        </HStack>
      </Stack>
    </>
  );
};
const TourDetailSlide = ({ ratio, url }: any) => {
  return (
    <Box>
      <AspectRatio ratio={ratio}>
        <Image
          w="100%"
          fallbackSrc="https://via.placeholder.com/150"
          src={url}
          alt="bodi tour"
          bg="blackAlpha.700"
        />
      </AspectRatio>
    </Box>
  );
};
