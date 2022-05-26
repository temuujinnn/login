import { Box, Image, Center } from "@chakra-ui/react";
import { BiLoaderAlt } from "react-icons/bi";

export default function () {
  return (
    <Box className="loader">
      <Center h="100%">
        <BiLoaderAlt className="imageLoader" fontSize="20px" color="white" />
      </Center>
    </Box>
  );
}
