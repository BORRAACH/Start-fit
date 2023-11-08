import { Box, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ProjectInf = () => {
  const [ref, isInView] = useInView();

  return (
    <Box
      w={'50%'}
      as={motion.div}
      initial={{ opacity: 0, x: 200 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      exit={{ opacity: 0, x: 100 }}
      transition={{ type: 'spring', stiffness: 100 }}
      ref={ref}
    >
      <Text fontSize={'5xl'} fontFamily={'Ubuntu'} fontWeight={500}>
        Title
      </Text>
      <Text fontSize={'2xl'} textAlign={'justify'} lineHeight={1}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
        commodi, voluptatum recusandae beatae quaerat expedita tempora nemo
        nihil laborum saepe est laboriosam aliquid veniam eos amet aperiam
        molestiae, magnam officia?
      </Text>
      <Text fontSize={'sm'}>footer</Text>
    </Box>
  );
};

export default ProjectInf;
