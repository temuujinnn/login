import { Box, Stack, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect } from "react";
export const AboutUs = () => {
  useEffect(() => {
    axios
      .get(
        "https://ihotel.mn/checkhotels?hotel=&place=15485&city=&checkin=04%2F30%2F2022&checkout=05%2F01%2F2022&isClosed=&page=1&prices=&filterstar=&rating1=&rating2=&hotelServices=&roomServices=&categories="
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Stack>
      <Box h="10vh" />
      <Text>About Us</Text>
    </Stack>
  );
};
