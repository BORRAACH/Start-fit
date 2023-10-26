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
  Box,
} from '@chakra-ui/react';
import { AiOutlineUser } from 'react-icons/ai';

import SidebarIcon from '../assets/Icons/sidebar.svg';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import axios from 'axios';

const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const { signout } = useAuth();
  const navigator = useNavigate();

  const handleLogout = () => {
    signout();
    navigator('/');
    return;
  };

  const [userName, setUserName] = useState('');

  const getUserName = () => {
    axios
      .get('http://localhost/Github/server/res_datausers.php')
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
        <Image src={SidebarIcon}></Image>
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
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Button colorScheme="blue" onClick={getUserName}>
              get name
            </Button>
          </DrawerBody>

          <DrawerFooter alignItems={'center'}>
            <Button colorScheme={'blue'} onClick={handleLogout}>
              sair
            </Button>
            <Text>{userName ? userName : 'username'}</Text>
            <Link to="/login">
              <Button colorScheme="blue">
                <AiOutlineUser />
              </Button>
            </Link>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Sidebar;
