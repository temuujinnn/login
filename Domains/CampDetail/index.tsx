import {
  AspectRatio,
  Box,
  Flex,
  Icon,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import Slider from "react-slick";
import { Container } from "../../Theme/common";
import { AiFillStar } from "react-icons/ai";
export const CampDetail = ({ data }: any) => {
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
    borderRadius: 12,
  };
  console.log(data);
  return (
    <>
      <Box h="100px" />
      <Stack
        spacing={10}
        w="100%"
        h="100%"
        maxW={Container}
        my={["10px", "40px"]}
        px={["15px", "15px", "40px", "", "20px"]}
        mx="auto"
      >
        <Flex opacity="0.9" justifyContent="center" alignItems="center">
          <Icon fontSize="3xl" as={AiFillStar} />
          <Text pl={3} fontSize="3xl" fontWeight="bold">
            {data.name}
          </Text>
        </Flex>

        <Slider {...settings}>
          {data.pictures?.map((el: any, ind: number) => {
            return (
              <CampSlider url={el} key={ind} ratio={ratio} h="40vh" src={el} />
            );
          })}
        </Slider>
        <Stack w="80%" alignSelf="center">
          <Text fontSize="xl" textAlign="center">
            {data.description}
          </Text>
        </Stack>
      </Stack>
    </>
  );
};

const CampSlider = ({ ratio, url }: any) => {
  return (
    <Box>
      <AspectRatio ratio={ratio}>
        <Image
          borderRadius="12px"
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
