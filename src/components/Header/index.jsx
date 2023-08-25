import { Link, useLocation } from "react-router-dom";
import {
  Button,
  Container,
  Flex,
  UnorderedList,
  ListItem,
  Image,
  Box,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";

import { BoxIcon } from "./style";
import HomeIcon from "../../assets/Icons/home.svg";
import TablesIcon from "../../assets/Icons/tables.svg";
import VerticalLine from "../../assets/Icons/vertical_line.svg";
import SidebarIcon from "../../assets/Icons/sidebar.svg";

const Header = () => {
  const [isSmallerThan800] = useMediaQuery("(max-width: 800px)");
  const location = useLocation();

  return (
    <Container className="father" px={"3rem"} py={7} maxW="100%" m={0}>
      <Flex justifyContent="space-between">
        <UnorderedList>
          <Flex gap="1.5rem">
            <ListItem>
              <Box className="sidebar-button" {...BoxIcon}>
                <Image src={SidebarIcon} />
              </Box>
            </ListItem>
            {!isSmallerThan800 && (
              <ListItem className="vertical-line">
                <Image src={VerticalLine} />
              </ListItem>
            )}
            {!isSmallerThan800 && (
              <>
                <ListItem className="home-button">
                  <Link to="/">
                    <Box {...BoxIcon}>
                      <Image src={HomeIcon} alt="home" />
                    </Box>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link to="/tables">
                    <Box {...BoxIcon}>
                      <Image src={TablesIcon} alt="Tables" />
                    </Box>
                  </Link>
                </ListItem>
                <ListItem className="vertical-line">
                  <Image src={VerticalLine} />
                </ListItem>
              </>
            )}
            <Text>{useLocation.pathname}</Text>
          </Flex>
        </UnorderedList>
        <Button
          bg="#000"
          color="#fff"
          borderRadius="10px"
          fontSize="2xl"
          fontWeight="medium"
          px={10}
          h="4.063rem"
        >
          <Text>Create</Text>
        </Button>
      </Flex>
    </Container>
  );
};

export default Header;
