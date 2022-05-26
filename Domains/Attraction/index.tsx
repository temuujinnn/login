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
import Link from "next/link";
import { useEffect, useState } from "react";
import { MySpinner } from "../../Component/MySpinner";
import { Container } from "../../Theme/common";
export const Attraction = ({ loading }: any) => {
  const [data, setData] = useState<any>([]);
  const [index, setIndex] = useState<any>(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/attraction`)
      .then((res) => {
        setIsLoading(false);
        console.log(res.data);
        setData(res.data.data);
      })
      .catch((err) => {
        setIsLoading(false);
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
                    {/* <Text w="100%" isTruncated>
                      {el.description}
                    </Text> */}
                    <MyModal
                      ind={ind}
                      isOpen={isOpen}
                      onClose={onClose}
                      name={el.name}
                      description={el.description}
                      image={el.image}
                      index={index}
                      camps={el.camps}
                    />
                  </Stack>
                </AspectRatio>
              );
            })}
          </SimpleGrid>
        </Stack>
      )}
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
  camps,
}: any) => {
  const [see, setSee] = useState<boolean>(false);
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
                {see ? (
                  <Text>
                    {description}{" "}
                    <span
                      style={{ cursor: "pointer", fontWeight: "bold" }}
                      onClick={() => setSee(!see)}
                    >
                      {see ? " hide" : "See more"}
                    </span>
                  </Text>
                ) : (
                  <Text>
                    {description.slice(0, 300)}...{" "}
                    <span
                      style={{ cursor: "pointer", fontWeight: "bold" }}
                      onClick={() => setSee(!see)}
                    >
                      {see ? " hide" : "See more"}
                    </span>
                  </Text>
                )}
                <Text
                  display={camps.length === 0 ? "none" : "flex"}
                  fontSize="xl"
                  fontWeight="semibold"
                >
                  Hotels
                </Text>
                {camps?.map((el: any, ind: number) => {
                  return (
                    <Link href={el._id}>
                      <Text
                        cursor="pointer"
                        _hover={{ textDecoration: "underline" }}
                      >
                        {el.name}
                      </Text>
                    </Link>
                  );
                })}
              </Stack>
            </ModalBody>

            <ModalFooter></ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};
