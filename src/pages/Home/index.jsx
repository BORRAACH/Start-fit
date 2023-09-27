import { Text, Box, Flex, Container } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import { RadialGradient } from './style';

function Home() {
  const styles = {
    tableBox: {
      w: '102px',
      h: '100px',
      bg: '#d9d9d97f',
      borderRadius: '10px',
    },
  };

  return (
    <>
      <RadialGradient />

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Container w={'100%'} p={'2rem 3rem 3rem 3rem'} m={4}>
          <Flex justifyContent={'space-between'}>
            <Box
              backgroundImage={
                'linear-gradient(200deg, #fff 9.22%, rgba(255, 255, 255, 0) 90%)'
              }
              boxShadow={'0 0 10px 10px #b6b6b637'}
              borderRadius={10}
              p={12}
              h={'2xl'}
            >
              <Text
                fontFamily={'Ubuntu'}
                fontSize={20}
                fontStyle={'normal'}
                fontWeight={400}
                lineHeight={'normal'}
                letterSpacing={'0.15625rem'}
              >
                Day A
              </Text>
              <Flex flexDirection={'column'}>
                <Flex marginBottom={'3rem'} marginTop={'1rem'} gap={41.82}>
                  <Box {...styles.tableBox}></Box>
                  <Box {...styles.tableBox}></Box>
                  <Box {...styles.tableBox}></Box>
                  <Box {...styles.tableBox}></Box>
                </Flex>
                <Text
                  fontFamily={'Ubuntu'}
                  fontSize={20}
                  fontStyle={'normal'}
                  fontWeight={400}
                  lineHeight={'normal'}
                  letterSpacing={'0.15625rem'}
                >
                  Create a new training table
                </Text>
                <Flex>
                  <Box className="extended-box"></Box>
                </Flex>
                <Flex marginY={'4rem'} gap={41.82}>
                  <Box {...styles.tableBox}></Box>
                  <Box {...styles.tableBox}></Box>
                  <Box {...styles.tableBox}></Box>
                  <Box {...styles.tableBox}></Box>
                </Flex>
              </Flex>
            </Box>

            <Box w={'md'} ml={20}>
              <Flex flexDirection={'column'} gap={8}>
                <Text
                  fontFamily={'Ubuntu'}
                  fontStyle={'normal'}
                  lineHeight={'normal'}
                  letterSpacing={'0.1875rem'}
                >
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.7 }}
                  >
                    <Text
                      letterSpacing={'0.1875rem'}
                      fontWeight={500}
                      fontSize={60}
                    >
                      Welcome
                    </Text>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ delay: 0.4, duration: 0.7 }}
                  >
                    <Text
                      fontSize={50}
                      fontWeight={400}
                      ml={4}
                      letterSpacing={'0.15625rem'}
                    >
                      to
                    </Text>
                  </motion.div>
                </Text>
                <Text
                  fontFamily={'Ubuntu'}
                  fontSize={60}
                  fontStyle={'normal'}
                  fontWeight={700}
                  lineHeight={'normal'}
                  letterSpacing={'0.21875rem'}
                >
                  <Flex flexDirection={'column'}>
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ delay: 0.8, duration: 0.7 }}
                    >
                      <Text whiteSpace={'nowrap'}>Training sheet</Text>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ delay: 1.2, duration: 0.7 }}
                    >
                      <Text>creator</Text>
                    </motion.div>
                  </Flex>
                </Text>
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: 1.7, duration: 0.7 }}
                >
                  <Text
                    fontFamily={'Ubuntu'}
                    fontSize={25}
                    fontStyle={'normal'}
                    fontWeight={400}
                    lineHeight={'normal'}
                  >
                    A simple platform that fits your purpose
                  </Text>
                </motion.div>
              </Flex>
            </Box>
          </Flex>
        </Container>
      </motion.div>
    </>
  );
}

export default Home;
