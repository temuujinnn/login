import { AspectRatio, Box } from "@chakra-ui/react";
export const SubHeader = ({ text }: any) => {
  return (
    <AspectRatio ratio={12}>
      <Box
        bg="brand.500"
        color="brandGray.800"
        p={10}
        fontSize={["2xl", "2xl", "3xl", "4xl", "6xl"]}
      >
        {text}
      </Box>
    </AspectRatio>
  );
};
