import { Box, SkeletonCircle, SkeletonText } from '@chakra-ui/react';

const Skeleton = function ({ circle }) {
  return (
    <Box padding="6" h={'100%'}>
      {circle && <SkeletonCircle size="10" />}
      <SkeletonText
        mt="4"
        noOfLines={6}
        spacing="5"
        borderRadius={10}
        skeletonHeight="2"
      />
    </Box>
  );
};

export default Skeleton;
