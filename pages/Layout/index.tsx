import { Flex } from "@chakra-ui/react";
import NextNProgress from "nextjs-progressbar";
import { Header } from "./Header";
export const LayOut = () => {
  return (
    <>
      <NextNProgress />
      <Header />
      <Flex>layout sda</Flex>
    </>
  );
};
