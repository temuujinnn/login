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
export const TripCard = (id: any) => {
  return (
    <>
      <Stack cursor="pointer" key={id}>
        <Image
          _hover={{
            transform: "scale(1.05)",
          }}
          transition="ease .2s"
          bg={`url(https://cdn.discordapp.com/attachments/910331361179619370/950374994569994240/272557905_1067192637404841_8321432308985004609_n.jpg) center no-repeat`}
          src="https://cdn.discordapp.com/attachments/967177210706411523/967177286124179486/1.jpg "
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
