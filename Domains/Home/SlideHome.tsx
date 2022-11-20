import {
  AspectRatio,
  Box,
  Button,
  ButtonGroup,
  Divider,
  Flex,
  HStack,
  Image,
  Select,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import Slider from "react-slick";

export const SlideHome = ({ banners }: any) => {
  const ratio = useBreakpointValue({
    base: 2 / 3,
    md: 1,
    lg: 4 / 3,
    xl: 5 / 2,
  });
  const padding = useBreakpointValue({
    base: "2px",
    sm: "4px",
    md: "6px",
    lg: "8px",
    xl: "5px",
  });
  const settings = {
    className: "homeslider",

    slidesToShow: 1,
    speed: 500,
    autoplaySpeed: 5000,
    autoplay: true,
    arrows: false,
  };
  return (
    <>
      <Slider {...settings}>
        {banners?.map((el: any, ind: number) => {
          return <Card url={el} key={ind} ratio={ratio} h="90vh" src={el} />;
        })}
      </Slider>
    </>
  );
};
export const Card = ({ ratio, url }: any) => {
  return (
    <Box>
      <AspectRatio ratio={ratio}>
        <Flex
          color="white"
          bgSize={"cover"}
          h="40vh"
          bg={`url(${url.imageUrl}) no-repeat center`}
          backgroundAttachment="fixed"
          flexDir="column"
        >
          <Stack justifyContent="center">
            <Text fontWeight="bold" textAlign="center" fontSize="7xl">
              Travel.Guide
            </Text>
            <Box boxShadow="xl" h="3px" w="70%" bg="white" alignSelf="center" />
            <Text textAlign="center" pt={5} fontWeight="bold" fontSize="3xl">
               ТА ӨӨРИЙН АМЬДРАЛЫН ХАМГИЙН САЙХАН ДУРСАМЖАА  <br />
              БИДНЭЭР ДАМЖУУЛАН БҮТЭЭГЭЭРЭЙ ...
            </Text>
          </Stack>
          <Stack p={6} w="900px" borderRadius={"16px"} bg="white">
            <HStack justifyContent={"space-evenly"}>
              <Text color={"black"}>Байршил</Text>
              <Text color={"black"}>Төрөл</Text>
              <Text color={"black"}>Үнийн дүн</Text>
            </HStack>
            <Divider />
            <HStack justifyContent={"space-evenly"}>
              <Select w="50%" color={"black"}>
                <option>Архангай</option>
                <option>Архангай</option>
                <option>Архангай</option>
                <option>Архангай</option>
                <option>Архангай</option>
                <option>Архангай</option>
              </Select>
              <Select w="50%" color={"black"}>
                <option>5 хоног</option>
                <option>5 хоног</option>
                <option>5 хоног</option>
              </Select>
              <Select w="50%" color={"black"}>
                <option>1,000,000-5,000,000</option>
                <option>1,000,000-5,000,000</option>
                <option>1,000,000-5,000,000</option>
              </Select>
            </HStack>
            <Button>Хайх</Button>
          </Stack>
        </Flex>
      </AspectRatio>
    </Box>
  );
};
