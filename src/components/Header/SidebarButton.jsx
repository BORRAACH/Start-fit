import React, { useEffect, useState } from 'react';

import {
  Text,
  Button,
  Image,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  DrawerFooter,
  Flex,
  Icon,
  VStack,
  Divider,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react';
import { AiOutlineUser } from 'react-icons/ai';

import SidebarIcon from '../../assets/Icons/sidebar.svg';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import { SettingsIcon } from '@chakra-ui/icons';

import { GoHome } from 'react-icons/go';
import { CiViewList } from 'react-icons/ci';

const Sidebar = ({ filter }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const { signout } = useAuth();
  const navigator = useNavigate();

  const links = [
    { name: 'Home', link: '/', icon: GoHome },
    { name: 'Workouts', link: '/training', icon: CiViewList },
  ];

  const handleLogout = () => {
    signout();
    navigator('/');
    return;
  };

  const { rota } = useAuth();
  const [userName, setUserName] = useState('');

  const getUserName = () => {
    axios
      .get(`${rota}/res_datausers.php`)
      .then((response) => {
        console.log(response.data ? response.data : 'null');
        setUserName(response.data.name);
      })
      .catch((error) => {
        // Em caso de erro na requisição
        console.error('Erro na requisição:', error);
      });
  };

  useEffect(() => {
    getUserName();
  }, []);

  return (
    <>
      <Button ref={btnRef} bg={'none'} p={0} onClick={onOpen}>
        <Image src={SidebarIcon} filter={filter}></Image>
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody
            pt={10}
            css={{
              '&::-webkit-scrollbar': {
                width: 10,
                borderRadius: 10,
              },
              '&::-webkit-scrollbar-track': {
                width: 2,
              },
              '&::-webkit-scrollbar-thumb': {
                borderRadius: 10,
                width: 5,
                background: useColorModeValue('#00000029', '#ffffff29'),
              },
            }}
          >
            <Heading
              fontSize={'xl'}
              fontFamily={'Ubuntu'}
              color={useColorModeValue('gray.800', 'gray.300')}
            >
              Pages
            </Heading>
            <Divider
              mb={5}
              mt={5}
              color={useColorModeValue('gray.800', 'white')}
            />
            <VStack minH={'100%'} spacing={5} align={'stretch'}>
              {links.map((links) => (
                <Button as={Link} to={links.link} key={links.lenght} h={12}>
                  <Flex align={'center'} gap={2}>
                    {links.icon && (
                      <Icon as={links.icon} scale={2} boxSize={6} />
                    )}
                    <Text>{links.name}</Text>
                  </Flex>
                </Button>
              ))}
            </VStack>
            <Divider
              mb={5}
              mt={5}
              color={useColorModeValue('gray.800', 'white')}
            />
          </DrawerBody>

          <DrawerFooter alignItems={'center'}>
            <Flex
              w={'100%'}
              justifyContent={'space-between'}
              alignItems={'center'}
            >
              <Button colorScheme={'blue'} onClick={handleLogout}>
                sair
              </Button>
              <Text>{userName ? userName : 'username'}</Text>
              <Link to="/login">
                <Button colorScheme="blue">
                  <AiOutlineUser />
                </Button>
              </Link>
            </Flex>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Sidebar;
