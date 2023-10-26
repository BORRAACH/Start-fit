import { Box, useColorModeValue } from '@chakra-ui/react';

const RadialGradient = () => {
  const bgColor = useColorModeValue(
    `radial-gradient(
    circle,
    rgba(255, 199, 0, 0.54) 0%,
    rgba(255, 153, 0, 0) 68.54%
  )`,
    `radial-gradient(56.05% 56.05% at 50% 50%, rgba(96, 112, 255, 0.45) 9.38%, rgba(73, 91, 255, 0.02) 66.04%, rgba(115, 115, 115, 0.00) 90%)`,
  );

  return (
    <Box
      w={'64rem'}
      h={'64rem'}
      position={'fixed'}
      top={20}
      left={'20rem'}
      mt={'-6rem'}
      zIndex={'-10'}
      background={bgColor}
      backgroundClip="circle"
    ></Box>
  );
};

export default RadialGradient;
