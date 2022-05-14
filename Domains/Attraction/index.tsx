import {
  AspectRatio,
  Box,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "../../Theme/common";
export const Attraction = () => {
  const [data, setData] = useState<any>([]);
  const [index, setIndex] = useState<any>(0);
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/attractions_admin`)
      .then((res) => {
        console.log(res.data);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handler = (ind: any) => {
    setIndex(ind);

    onOpen();
  };
  return (
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
        <SimpleGrid spacing={10} columns={[1, 3]}>
          {data?.map((el: any, ind: number) => {
            return (
              <AspectRatio key={ind} maxH="400px" ratio={1 / 1}>
                <Stack
                  cursor={"pointer"}
                  onClick={() => handler(ind)}
                  p={4}
                  boxShadow="xl"
                >
                  <Image h="80%" src={el.image} alt="bodi tour" />
                  <Text fontSize="2xl" fontWeight="bold">
                    {el.name}
                  </Text>
                  <Text w="100%" isTruncated>
                    {el.description}
                  </Text>
                  <MyModal
                    ind={ind}
                    isOpen={isOpen}
                    onClose={onClose}
                    name={el.name}
                    description={el.description}
                    image={el.image}
                    index={index}
                  />
                </Stack>
              </AspectRatio>
            );
          })}
        </SimpleGrid>
      </Stack>
    </>
  );
};
const MyModal = ({
  isOpen,
  onClose,
  name,
  description,
  image,
  ind,
  index,
}: any) => {
  return (
    <>
      {ind === index && (
        <Modal key={ind} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{name}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Stack>
                <Image src={image} />
                <Text>{name}</Text>
                <Text>{description}</Text>
              </Stack>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};
