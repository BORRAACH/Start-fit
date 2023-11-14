import {
  ChevronDownIcon,
  HamburgerIcon,
  Icon,
  SettingsIcon,
} from '@chakra-ui/icons';
import {
  Avatar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { FiLogOut } from 'react-icons/fi';

export default function Dropdown() {
  const { signout } = useAuth();

  const handleLogout = () => {
    signout();
    console.log('certo');
    navigator('/');
    return;
  };

  const MenuLink = ({ href, onClick, icon, children }) => {
    return (
      <Box onClick={onClick} w={'100%'}>
        <Link to={href}>
          <Text>
            {children} {icon && <Icon as={icon} />}{' '}
          </Text>
        </Link>
      </Box>
    );
  };

  return (
    <Menu>
      <MenuButton
        as={IconButton}
        bg={'whiteAlpha.200'}
        aria-label="Options"
        icon={<HamburgerIcon />}
        variant="outline"
      ></MenuButton>

      <MenuList>
        <MenuItem>
          <MenuLink href={'/'}>Workouts </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href={'/user-config'} icon={SettingsIcon}>
            Account Settings
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink onClick={handleLogout} icon={FiLogOut}>
            Logout
          </MenuLink>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
