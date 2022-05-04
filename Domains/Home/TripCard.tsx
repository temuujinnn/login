import {
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
import { GoCalendar } from "react-icons/go";
import { GrMap } from "react-icons/gr";
export const TripCard = (data: any) => {
  console.log("dsa", data);
  return (
    <>
      <Stack cursor="pointer">
        <Image
          _hover={{
            transform: "scale(1.05)",
          }}
          transition="ease .2s"
          src={data.banner}
        />

        <HStack justifyContent="space-between">
          <Text fontSize="xl">₩120.000/Per Person</Text>
          <Text fontSize="xl">
            <Icon as={GoCalendar} />5 Days/6 night
          </Text>
        </HStack>
        <Text color="#ff7f47" fontSize="2xl">
          <Icon as={GrMap} /> Gobi desert tour
        </Text>
      </Stack>
    </>
  );
};
