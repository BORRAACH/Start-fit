import {
  AccordionItem,
  AccordionButton,
  Accordion,
  Box,
  AccordionIcon,
  AccordionPanel,
  Heading,
} from '@chakra-ui/react';

const AccordingElement = () => {
  return (
    <Accordion defaultIndex={[0]} allowMultiple minW={'xl'} maxW={'2xl'}>
      <AccordionItem>
        <Heading fontSize={'md'}>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              Section 1 title
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </Heading>
        <AccordionPanel pb={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <Heading fontSize={'md'}>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              Section 2 title
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </Heading>
        <AccordionPanel pb={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordingElement;
