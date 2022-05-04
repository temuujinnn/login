import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  Text,
  HStack,
  Spacer,
  Divider,
  Icon,
  Select,
} from "@chakra-ui/react";
import { UseSize } from "../../Hooks/UseSize";

import { FaLanguage } from "react-icons/fa";
import { useState } from "react";

interface Sidebar {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: Sidebar) => {
  const [reverse, setReverse] = useState(false);
  const size = UseSize("drawer");

  const props = {
    isOpen,
    onClose,
  };

  const onLogin = () => {
    onClose();
  };

  return (
    <Drawer {...props} size={size}>
      {/* <DrawerOverlay /> */}
      <DrawerContent>
        <DrawerHeader>
          <DrawerCloseButton />
        </DrawerHeader>
        <DrawerBody pt={3} zIndex="12">
          <VStack w="100%" h="100%">
            <HStack
              w="100%"
              p="8px"
              _hover={{ opacity: 1 }}
              opacity={0.8}
              cursor={"pointer"}
              justifyContent="space-between"
            >
              <HStack pl="6px">
                <Icon as={FaLanguage} mr={3} />
              </HStack>
              <Select maxW="100px">
                <option value="mn">MN</option>
                <option value="en">EN</option>
              </Select>
            </HStack>
            <HStack w="100%" py="12px" justifyContent="space-between"></HStack>
            <HStack w="100%" justifyContent="flex-start" pt="3"></HStack>
            <Spacer />
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
export default Sidebar;
