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
  TableContainer,
  Table,
  TableCaption,
  useBreakpointValue,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Center,
  Button,
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
  const padding = useBreakpointValue({
    base: "20px",
    sm: "40px",
    md: "60px",
    lg: "80px",
    xl: "100px",
  });
  const settings = {
    centerMode: true,
    className: "homeslider",
    centerPadding: padding,
    slidesToShow: 1,
    speed: 500,
    autoplaySpeed: 5000,
    autoplay: true,
    arrows: false,
  };
  const [see, setSee] = useState(false);

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
          <Stack w="60%">
            <Text opacity="0.5">몽골{">"}울란바토르</Text>
            <Text fontSize="2xl">{data?.tourName}</Text>
            <Image src={data.banner} alt="banner bodi" />
            <Slider {...settings}>
              {data.images?.map((el: any, ind: number) => {
                return (
                  <Card url={el} key={ind} ratio={ratio} h="90vh" src={el} />
                );
              })}
            </Slider>

            {data.days?.map((el: any, ind: number) => {
              return (
                <Accordion bg="gray.100" allowMultiple>
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

                      <HStack display={see === true ? "flex" : "none"}>
                        <Text>{el.description}</Text>
                        <Image w="200px" h="200px" src={el.picture} />
                      </HStack>
                      <Text
                        cursor="pointer"
                        onClick={() => setSee(!see)}
                        textAlign="center"
                      >
                        {see === true
                          ? "Hide This place description"
                          : "See This place description"}
                      </Text>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              );
            })}
          </Stack>

          <Stack
            w="40%"
            maxW="300px"
            bg="gray.100"
            px={5}
            py={10}
            borderRadius="12px"
          >
            <Text fontSize="2xl" fontWeight="bold">
              900,000원1인
            </Text>
            <TableContainer p={2} border="1px solid gray">
              <Table variant="striped" colorScheme="green" size="sm">
                <Thead></Thead>
                <Tbody>
                  <Tr>
                    <Td>2명 ~ 2명</Td>
                    <Td>900,000원</Td>
                  </Tr>
                  <Tr>
                    <Td>3명 ~ 3명</Td>
                    <Td>780,000원</Td>
                  </Tr>
                  <Tr>
                    <Td>4명 ~ 4명</Td>
                    <Td>650,000원</Td>
                  </Tr>
                  <Tr>
                    <Td>5명 ~ 5명</Td>
                    <Td>600,000원</Td>
                  </Tr>
                  <Tr>
                    <Td>6명 ~ 6명</Td>
                    <Td>500,000원</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
            <Button colorScheme="facebook">Order</Button>
          </Stack>
        </HStack>
      </Stack>
    </>
  );
};
