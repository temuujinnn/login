import { Box, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MySpinner } from "../../Component/MySpinner";
import { Container } from "../../Theme/common";
export const Camps = ({ loading }: any) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/camps`)
      .then((res) => {
        setIsLoading(false);
        setData(res.data.data);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  }, []);

  return (
    <>
      <Box h="100px" />
      {loading === false && isLoading === true ? (
        <MySpinner />
      ) : (
        <Stack
          w="100%"
          h="100%"
          maxW={Container}
          my={["10px", "40px"]}
          px={["15px", "15px", "40px", "", "20px"]}
          mx="auto"
        >
          <SimpleGrid gap={6} columns={[1, 2, 3, 4, 5]}>
            {data.map((el: any, ind: number) => {
              return (
                <Link key={ind} href={el?._id}>
                  <Stack p={1} _hover={{ boxShadow: "2xl" }}>
                    <Image h="200px" src={el?.banner} />
                    <Text fontWeight="bold" py={2} textAlign="center">
                      {el.name}
                    </Text>
                  </Stack>
                </Link>
              );
            })}
          </SimpleGrid>
        </Stack>
      )}
    </>
  );
};
