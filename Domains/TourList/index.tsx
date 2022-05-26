import {
  AspectRatio,
  Flex,
  Icon,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Box,
} from "@chakra-ui/react";
import Link from "next/link";
import { Container } from "../../Theme/common";
import { GrMap } from "react-icons/gr";
export const TourList = ({ data }: any) => {
  return (
    <>
      <Box h="100px" />
      <Stack
        w="100%"
        h="100%"
        maxW={Container}
        my={["10px", "40px"]}
        px={["15px", "15px", "40px", "", "20px"]}
        mx="auto"
        spacing={0}
      >
        <Text fontSize="4xl" fontWeight="bold">
          {data?.typeName}
        </Text>
        <SimpleGrid gap={5} columns={[1, 2, 2, 4, 4]}>
          {data?.data?.map((el: any, ind: number) => {
            return (
              <Link href={`tourdetail/${el._id}`}>
                <AspectRatio ratio={1 / 1}>
                  <Stack boxShadow="xl" key={ind} cursor="pointer">
                    <Image
                      h="200px"
                      w="100%"
                      _hover={{
                        transform: "scale(1.05)",
                        boderRadius: "0",
                      }}
                      transition="ease .2s"
                      src={el.banner}
                    />

                    <Flex w="100%" textAlign="left" px={3}>
                      <Text color="brand.700" fontSize="xl">
                        <Icon as={GrMap} /> {el.tourName}
                      </Text>
                    </Flex>
                  </Stack>
                </AspectRatio>
              </Link>
            );
          })}
        </SimpleGrid>
      </Stack>
    </>
  );
};
