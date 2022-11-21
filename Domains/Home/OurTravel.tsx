import { Icon, Text, VStack } from "@chakra-ui/react";

export const OurTravel = ({ el }: any, ind: number) => {
  return (
    <>
      <VStack
        key={ind}
        color="white"
        borderRadius="12px"
        p={"70px"}
        bg="brandGray.600"
        alignItems="center"
      >
        <Icon fontSize="6xl" as={el.icon} />
        <Text textAlign="center" fontSize="xl">
          {el.title}
        </Text>
      </VStack>
    </>
  );
};
