import { Link, useLocation } from 'react-router-dom';
import {
  Button,
  Avatar,
  Container,
  Flex,
  UnorderedList,
  ListItem,
  Image,
  Box,
  Text,
  useMediaQuery,
  useColorModeValue,
} from '@chakra-ui/react';
import useAuth from '../../hooks/useAuth';
import { motion } from 'framer-motion';

import Sidebar from '../SidebarButton';
import ThemeToggleButton from '../theme-toggle-button';
import HomeIcon from '../../assets/Icons/home.svg';
import TablesIcon from '../../assets/Icons/tables.svg';
import VerticalLine from '../../assets/Icons/vertical_line.svg';
import Nav from './dropdow';
import Dropdown from './dropdow';

const Header = () => {
  const [isSmallerThan800] = useMediaQuery('(max-width: 800px)');
  const location = useLocation();
  const { signed } = useAuth();

  const bgPageButtons = useColorModeValue('orange.300', 'purple.400');

  const HomeIconProps = {
    bg: location.pathname === '/' ? `${bgPageButtons}` : '',
  };

  const TrainingIconProps = {
    bg: location.pathname === '/training' ? `${bgPageButtons}` : '',
  };

  const styles = {
    bg: {
      tablesIconProps: () => {
        location.pathname === '/training' ? `${bgPageButtons}` : '';
      },
      boxesOnTables: () => {
        location.pathname === '/training' ? `${bgPageButtons}` : '';
      },
      svgFilterInvert: useColorModeValue('none', 'invert(1)'),
      createButton: useColorModeValue('black', 'whiteAlpha.300'),
    },
    color: {},
    filter: {},
    components: {
      box: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '5px',
        p: 1,
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ delay: 0.6, duration: 0.5 }}
    >
      <Container className="father" px={'3rem'} py={7} maxW="100%" m={0}>
        <Flex justifyContent="space-between" alignItems="center">
          <UnorderedList>
            <Flex gap="1.5rem">
              <ListItem listStyleType={'none'}>
                <Box className="sidebar-button" {...styles.components.box}>
                  <Sidebar filter={styles.bg.svgFilterInvert} />
                </Box>
              </ListItem>
              {!isSmallerThan800 && (
                <ListItem listStyleType={'none'} className="vertical-line">
                  <Image
                    src={VerticalLine}
                    filter={styles.bg.svgFilterInvert}
                    h={10}
                  />
                </ListItem>
              )}
              {!isSmallerThan800 && (
                <>
                  <ListItem listStyleType={'none'} className="home-button">
                    <Link to="/">
                      <Box {...styles.components.box} {...HomeIconProps}>
                        <Image
                          src={HomeIcon}
                          filter={styles.bg.svgFilterInvert}
                          alt="home"
                        />
                      </Box>
                    </Link>
                  </ListItem>
                  <ListItem listStyleType={'none'}>
                    <Link to="/training">
                      <Box {...styles.components.box} {...TrainingIconProps}>
                        <Image
                          src={TablesIcon}
                          filter={styles.bg.svgFilterInvert}
                          alt="Tables"
                        />
                      </Box>
                    </Link>
                  </ListItem>
                  <ListItem listStyleType={'none'} className="vertical-line">
                    <Image
                      src={VerticalLine}
                      filter={styles.bg.svgFilterInvert}
                      h={10}
                    />
                  </ListItem>
                </>
              )}
              <ListItem listStyleType={'none'}>
                <ThemeToggleButton />
              </ListItem>
            </Flex>
          </UnorderedList>
          {location.pathname === '/' ? (
            <Link to="/training">
              <Button
                bg={styles.bg.createButton}
                color="#fff"
                borderRadius={5}
                fontSize={'xl'}
                fontWeight="medium"
                px={10}
                py={7}
              >
                <Text>Create</Text>
              </Button>
            </Link>
          ) : (
            ''
          )}
          {location.pathname !== '/' && signed ? <Dropdown /> : ''}
        </Flex>
      </Container>
    </motion.div>
  );
};

export default Header;
