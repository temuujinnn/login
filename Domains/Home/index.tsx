import {
  Box,
  Flex,
  HStack,
  Icon,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useColor } from "../../Context/ColorContext";
import { Container } from "../../Theme/common";
import { SlideHome } from "./SlideHome";
import { GoCalendar } from "react-icons/go";
import { GrMap } from "react-icons/gr";
import { TripCard } from "./TripCard";
export const Home = () => {
  const { bg } = useColor();
  return (
    <>
      <Box>
        <SlideHome />
      </Box>
      <Stack
        flexDir="column"
        borderRadius="12px"
        w="100%"
        h="100%"
        maxW={Container}
        my={["10px", "40px"]}
        px={["15px", "15px", "40px", "", "20px"]}
        mx="auto"
      >
        <Text
          color="#ff7f47"
          fontSize="3xl"
          fontWeight="bold"
          textAlign="center"
        >
          Special offer
        </Text>
        <Text fontSize="3xl" fontWeight="bold" textAlign="center">
          Our Most Popular And <br /> Best Adventures
        </Text>
        <SimpleGrid mt={10} spacing={10} columns={[1, 2, 3]}>
          {[1, 2, 3].map((el: any) => {
            return <TripCard id={el} />;
          })}
        </SimpleGrid>
        <Box h="100px" mb={10} />
        <Text
          color="#ff7f47"
          fontSize="3xl"
          fontWeight="bold"
          textAlign="center"
        >
          Choose Your Package
        </Text>
        <Text fontSize="3xl" fontWeight="bold" textAlign="center">
          Select Your Best Package <br /> For Your Travel
        </Text>
        <SimpleGrid mt={10} spacing={10} columns={[1, 2, 3]}>
          {[1, 2, 3, 4, 5, 6].map((el: any) => {
            return <TripCard id={el} />;
          })}
        </SimpleGrid>
      </Stack>
    </>
  );
};
