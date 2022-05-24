import { Box, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Container } from "../../Theme/common";
export const Camps = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/camps`)
      .then((res) => {
        console.log(res.data.data);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(data);
  return (
    <Stack
      w="100%"
      h="100%"
      maxW={Container}
      my={["10px", "40px"]}
      px={["15px", "15px", "40px", "", "20px"]}
      mx="auto"
    >
      <Box h="10vh" />
      <SimpleGrid columns={[1, 2, 3, 4, 5]}>
        {data.map((el: any, ind: number) => {
          return (
            <Link key={ind} href={el?._id}>
              <Stack p={1} _hover={{ boxShadow: "2xl" }}>
                <Image src={el?.banner} />
                <Text fontWeight="bold" py={2} textAlign="center">
                  {el.name}
                </Text>
              </Stack>
            </Link>
          );
        })}
      </SimpleGrid>
    </Stack>
  );
};
