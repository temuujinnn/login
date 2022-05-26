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
  StackDivider,
  Button,
} from "@chakra-ui/react";
import { Container } from "../../Theme/common";

import Slider from "react-slick";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Link from "next/link";
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
    dots: true,
    autoplaySpeed: 4000,
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
            <Box py={5}>
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
            </Box>
            <Box py={10}>
              <Text
                fontWeight="bold"
                fontFamily="'Londrina Shadow', cursive"
                fontSize="3xl"
              >
                {data?.tourName}
              </Text>
            </Box>

            <Box w={["100%"]}>
              <VerticalTimeline layout="1-column">
                {data.days?.map((el: any, ind: number) => {
                  return (
                    <VerticalTimelineElement
                      className="vertical-timeline-element--work"
                      iconStyle={{
                        background: "#BF3325",
                        color: "#fff",
                        padding: 0,
                      }}
                    >
                      <Accordion
                        className="vertical-timeline-element-title"
                        bg="white"
                        key={ind}
                        allowMultiple
                      >
                        <AccordionItem>
                          <h2>
                            <AccordionButton>
                              <Box
                                flex="1"
                                fontSize="lg"
                                fontWeight="semibold"
                                textAlign="left"
                              >
                                {el.title}
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel>
                            {el.schedule.map((el: any, ind: number) => {
                              return (
                                <HStack my={3} spacing={6}>
                                  <Text borderBottom="1px solid gray" w="100%">
                                    {el}
                                  </Text>
                                </HStack>
                              );
                            })}
                            <HStack w="100%" justifyContent="center">
                              <Link href="/attraction">
                                <Button fontSize="10px">관광지 소개</Button>
                              </Link>
                              <Link href="/camps">
                                <Button fontSize="10px">여행지 숙소</Button>
                              </Link>
                            </HStack>
                          </AccordionPanel>
                        </AccordionItem>
                      </Accordion>
                    </VerticalTimelineElement>
                  );
                })}
              </VerticalTimeline>
            </Box>
            <HStack
              flexDir={["column", "row"]}
              pb={10}
              alignItems="center"
              justifyContent="center"
              w="100%"
            >
              <Image p={[0, 10]} w={["100%", "50%"]} src={data.roadMap} />
              <Image
                mt={[10, 0]}
                p={[0, 10]}
                w={["100%", "50%"]}
                src={data.included}
              />
            </HStack>

            <Box w="50%" alignSelf="center" mx="auto">
              <Link href="https://namecard.kakao.com/boditour">
                <a target="_blank">
                  <Button bg="#FF6166" w="100%">
                    예약 하기
                  </Button>
                </a>
              </Link>
            </Box>
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
