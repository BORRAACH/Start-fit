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
  useColorMode,
} from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import { motion } from 'framer-motion';

import Sidebar from '../components/SidebarButton';
import ThemeToggleButton from './theme-toggle-button';
import HomeIcon from '../assets/Icons/home.svg';
import TablesIcon from '../assets/Icons/tables.svg';
import VerticalLine from '../assets/Icons/vertical_line.svg';

const styles = {
  box: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '5px',
    p: 1,
  },
};

const Header = () => {
  const [isSmallerThan800] = useMediaQuery('(max-width: 800px)');
  const location = useLocation();
  const { colorMode } = useColorMode();

  const color = colorMode === 'light' ? 'orange.300' : 'purple';

  const HomeIconProps = {
    bg: location.pathname === '/' ? `${color}` : '',
  };

  const TablesIconProps = {
    bg: location.pathname === '/training' ? `${color}` : '',
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
                <Box className="sidebar-button" {...styles.box}>
                  {/* <Image src={SidebarIcon} /> */}
                  <Sidebar />
                </Box>
              </ListItem>
              {!isSmallerThan800 && (
                <ListItem listStyleType={'none'} className="vertical-line">
                  <Image src={VerticalLine} h={10} />
                </ListItem>
              )}
              {!isSmallerThan800 && (
                <>
                  <ListItem listStyleType={'none'} className="home-button">
                    <Link to="/">
                      <Box {...styles.box} {...HomeIconProps}>
                        <Image src={HomeIcon} alt="home" />
                      </Box>
                    </Link>
                  </ListItem>
                  <ListItem listStyleType={'none'}>
                    <Link to="/training">
                      <Box {...styles.box} {...TablesIconProps}>
                        <Image src={TablesIcon} alt="Tables" />
                      </Box>
                    </Link>
                  </ListItem>
                  <ListItem listStyleType={'none'} className="vertical-line">
                    <Image src={VerticalLine} h={10} />
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
                bg={mode('black', 'white')}
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
          {location.pathname !== '/' ? (
            <Link to="/login">
              <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
            </Link>
          ) : (
            ''
          )}
        </Flex>
      </Container>
    </motion.div>
  );
};

export default Header;
