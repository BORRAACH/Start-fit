import { Link } from "react-router-dom";
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
import { mode } from "@chakra-ui/theme-tools";

import ThemeToggleButton from "./theme-toggle-button";
import HomeIcon from "../assets/Icons/home.svg";
import TablesIcon from "../assets/Icons/tables.svg";
import VerticalLine from "../assets/Icons/vertical_line.svg";
import SidebarIcon from "../assets/Icons/sidebar.svg";

const styles = {
  box: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "5px",
    p: 1,
    border: "2px solid",
    w: 10,
  },
};

const Header = () => {
  const [isSmallerThan800] = useMediaQuery("(max-width: 800px)");

  return (
    <Container className="father" px={"3rem"} py={7} maxW="100%" m={0}>
      <Flex justifyContent="space-between">
        <UnorderedList>
          <Flex gap="1.5rem">
            <ListItem>
              <Box className="sidebar-button" {...styles.box}>
                <Image src={SidebarIcon} />
              </Box>
            </ListItem>
            {!isSmallerThan800 && (
              <ListItem className="vertical-line">
                <Image src={VerticalLine} h={10} />
              </ListItem>
            )}
            {!isSmallerThan800 && (
              <>
                <ListItem className="home-button">
                  <Link to="/">
                    <Box {...styles.box}>
                      <Image src={HomeIcon} alt="home" />
                    </Box>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link to="/tables">
                    <Box {...styles.box}>
                      <Image src={TablesIcon} alt="Tables" />
                    </Box>
                  </Link>
                </ListItem>
                <ListItem className="vertical-line">
                  <Image src={VerticalLine} h={10} />
                </ListItem>
              </>
            )}
            <ListItem>
              <ThemeToggleButton />
            </ListItem>
          </Flex>
        </UnorderedList>
        <Button
          bg={mode("black", "white")}
          color="#fff"
          borderRadius={5}
          fontSize={"xl"}
          fontWeight="medium"
          px={10}
          py={7}
        >
          <Text>Create</Text>
        </Button>
      </Flex>
    </Container>
  );
};

export default Header;
