import { HStack } from "@chakra-ui/react";
import { ClipLoader } from "react-spinners";
export const MySpinner = () => {
  return (
    <HStack justifyContent="center" zIndex="1000000" h="100vh" w="100%">
      <ClipLoader color={"#6A69DB"} size={150} />
    </HStack>
  );
};
