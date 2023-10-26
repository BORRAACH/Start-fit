import {
  Box,
  Button,
  Checkbox,
  Container,
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';

function SetExercisesTables() {
  const OverlayTwo = () => (
    <ModalOverlay
      bg="none"
      backdropFilter="auto"
      backdropInvert="80%"
      backdropBlur="2px"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = useState();
  const [checkboxValues, setCheckboxValues] = useState([]);

  return (
    <>
      <Button
        ml="4"
        colorScheme="blue"
        onClick={() => {
          setOverlay(<OverlayTwo />);
          onOpen();
        }}
      >
        Use Overlay two
      </Button>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent minW={'6xl'} h={'4xl'}>
          <ModalHeader fontSize={'2xl'}>
            Select at exercises on the table
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Container
              bg={'gray.50'}
              p={5}
              minW={'100%'}
              minH={200}
              borderRadius={5}
            ></Container>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default SetExercisesTables;