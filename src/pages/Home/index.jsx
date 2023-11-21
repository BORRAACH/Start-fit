import {
  Text,
  Box,
  Flex,
  Container,
  useColorModeValue,
  SimpleGrid,
  VStack,
  Center,
  Button,
  Icon,
  useMediaQuery,
} from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import RadialGradient from './RadialGradientElem';
import GridListWithHeading from '../../components/Feature/GridListWithHeading';
import According from '../../components/According';
import AccordingElement from '../../components/According';
import { DeleteIcon } from '@chakra-ui/icons';
import { useEffect } from 'react';
import axios from 'axios';

function Home() {
  const styles = {
    tableBox: {
      w: '102px',
      h: '100px',
      bg: '#d9d9d97f',
      borderRadius: '10px',
    },
    table: {
      bg: {
        gradient: useColorModeValue(
          `linear-gradient(200deg, #fff 9.22%, rgba(255, 255, 255, 0) 90%)`,
          `linear-gradient(200deg, rgba(0, 0, 0, 0.33) 9.74%, rgba(0, 0, 0, 0.00) 36.68%, #000 100.16%)`,
        ),
      },
      boxShadow: useColorModeValue(
        `0 0 10px 10px #b6b6b637`,
        `0px 2px 4px rgba(255, 255, 255, 0.096)`,
      ),
    },
  };
  const bgColor = useColorModeValue('blackAlpha.300', 'whiteAlpha.300');
  const [isMaiorQue768] = useMediaQuery('(min-width: 768px)');

  useEffect(() => {
    axios
      .get('/')
      .then((res) => console.log(res))
      .catch((err) => console.log(`ERROR: ${err}`));
  }, []);

  return (
    <>
      <RadialGradient />

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Container p={'2rem 3rem 3rem 3rem'} m={4}>
          <SimpleGrid columns={2} minW={'100vw'}>
            <Box
              backgroundImage={styles.table.bg.gradient}
              boxShadow={styles.table.boxShadow}
              borderRadius={10}
              p={12}
              ml={100}
              mr={30}
              maxW={'xl'}
              minH={'2xl'}
            >
              <Flex minW={'100%'} justifyContent={'space-between'}>
                <Text
                  fontFamily={'Ubuntu'}
                  fontSize={20}
                  fontStyle={'normal'}
                  fontWeight={400}
                  lineHeight={'normal'}
                  letterSpacing={'0.15625rem'}
                >
                  Nome da Ficha
                </Text>
                <Button opacity={0.8}>
                  <Icon as={DeleteIcon} />
                </Button>
              </Flex>
              <Flex flexDirection={'column'}>
                <VStack marginBottom={'3rem'} marginTop={'1rem'} spacing={8}>
                  {Array.from({ length: 7 }).map((_, index) => (
                    <Container
                      key={index}
                      minH={10}
                      display={'flex'}
                      alignItems={'center'}
                      minW={100}
                      bg={bgColor}
                      borderRadius={5}
                    >
                      <Text color={'whiteAlpha.800'}>
                        Exercicio {index + 1}
                      </Text>
                    </Container>
                  ))}
                </VStack>
              </Flex>
            </Box>

            <Box w={'md'}>
              <Flex minH={'100%'} alignItems={'center'}>
                <VStack spacing={8} align={'self-start'}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    <Center alignItems={'end'}>
                      {' '}
                      <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ delay: 0.5, duration: 0.7 }}
                      >
                        <Text
                          fontFamily={'Ubuntu'}
                          fontStyle={'normal'}
                          lineHeight={'normal'}
                          letterSpacing={'0.1875rem'}
                          fontWeight={500}
                          fontSize={'7xl'}
                        >
                          Bem-vindo
                        </Text>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ delay: 0.9, duration: 0.7 }}
                      >
                        <Text
                          fontFamily={'Ubuntu'}
                          fontStyle={'normal'}
                          lineHeight={'normal'}
                          letterSpacing={'0.1875rem'}
                          fontSize={50}
                          fontWeight={400}
                          ml={4}
                        >
                          à
                        </Text>
                      </motion.div>
                    </Center>
                  </motion.div>

                  <Flex flexDirection={'column'}>
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ delay: 1.6, duration: 0.7 }}
                    >
                      <Text
                        fontFamily={'Ubuntu'}
                        fontStyle={'normal'}
                        fontWeight={700}
                        lineHeight={'normal'}
                        letterSpacing={'0.21875rem'}
                        fontSize={'8xl'}
                        whiteSpace={'nowrap'}
                      >
                        Start Fit
                      </Text>
                    </motion.div>
                  </Flex>
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
                      Seu site de criação de fichas de treino
                    </Text>
                  </motion.div>
                </VStack>
              </Flex>
            </Box>
          </SimpleGrid>
        </Container>
        <Container
          minW={'100%'}
          mt={40}
          bg={useColorModeValue('whiteAlpha.900', 'blackaAlpha.900')}
          pt={20}
          pb={20}
        >
          <AnimatePresence>
            <AccordingElement></AccordingElement>
          </AnimatePresence>
        </Container>
      </motion.div>
    </>
  );
}

export default Home;
