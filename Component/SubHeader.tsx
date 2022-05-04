import { AspectRatio, Box } from "@chakra-ui/react";
export const SubHeader = ({ text }: any) => {
  return (
    <AspectRatio ratio={18}>
      <Box
        bg="brandGray.600"
        p={10}
        fontSize={["2xl", "2xl", "3xl", "4xl", "6xl"]}
      >
        {text}
      </Box>
    </AspectRatio>
  );
};
