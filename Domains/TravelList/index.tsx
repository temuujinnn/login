import {
  Box,
  HStack,
  Stack,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Checkbox,
  Text,
  Divider,
  SimpleGrid,
  AspectRatio,
  Link,
  Image,
  Flex,
  Icon,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Container } from "../../Theme/common";
import { GrMap } from "react-icons/gr";
import axios from "axios";
import { MySpinner } from "../../Component/MySpinner";
export const TravelList = () => {
  const [data, setData] = useState<any>();
  const [price, setPrice] = useState<any>(["0", "100000"]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/home`)
      .then((res) => {
        setIsLoading(false);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  if (!data) {
    return null;
  }

  return (
    <>
      {isLoading ? (
        <MySpinner />
      ) : (
        <>
          <Box h="100px" />
          <Stack
            w="100%"
            h="100%"
            maxW={Container}
            my={["10px", "40px"]}
            px={["15px", "15px", "40px", "", "20px"]}
            mx="auto"
          >
            <Flex>
              <Stack w="350px" h="100%" p={2} bg="white">
                <Text>Location</Text>
                <Checkbox>gobi</Checkbox>
                <Checkbox>Khangai</Checkbox>
                <Checkbox>special</Checkbox>
                <Checkbox>Mori</Checkbox>
                <Divider />
                <Text>Days</Text>
                <Checkbox>4-5 day</Checkbox>
                <Checkbox>5-6</Checkbox>
                <Checkbox>6-7</Checkbox>
                <Checkbox>8-9</Checkbox>
                <Divider />

                <Text fontSize="14px">
                  Price range: {price[0]}₩- {price[1]}₩
                </Text>
                <RangeSlider
                  onChange={(e) => {
                    setPrice(e);
                  }}
                  step={100000}
                  min={0}
                  max={3000000}
                  aria-label={["min", "max"]}
                  defaultValue={[0, 1000000]}
                >
                  <RangeSliderTrack>
                    <RangeSliderFilledTrack />
                  </RangeSliderTrack>
                  <RangeSliderThumb index={0} />
                  <RangeSliderThumb index={1} />
                </RangeSlider>
              </Stack>
              <Stack ml={10} h="100%" w="100%">
                <SimpleGrid spacing={10} columns={[1, 2, 2, 3, 3]}>
                  {data.AllTours?.map((el: any, ind: number) => {
                    return (
                      <Link href={el._id}>
                        <AspectRatio ratio={1 / 1}>
                          <Stack boxShadow="xl" key={ind} cursor="pointer">
                            <Image
                              _hover={{
                                transform: "scale(1.05)",
                                boderRadius: "0",
                              }}
                              transition="ease .2s"
                              src={el.banner}
                            />

                            <Flex
                              h="60px"
                              w="100%"
                              textAlign="left"
                              flexDir="column"
                              px={3}
                              justifyContent="space-between"
                            >
                              <Text color="brand.700" fontSize="md">
                                <Icon as={GrMap} /> {el.tourName}
                              </Text>
                              <Text fontSize="md">₩120.000/원 1인</Text>
                            </Flex>
                          </Stack>
                        </AspectRatio>
                      </Link>
                    );
                  })}
                </SimpleGrid>
              </Stack>
            </Flex>
          </Stack>
        </>
      )}
    </>
  );
};
