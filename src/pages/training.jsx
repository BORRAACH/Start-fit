// chakra-ui
import { Container, Button, Image, Text, Flex, Box } from "@chakra-ui/react";

import Home from "../assets/Icons/home.svg";
import Plus from "../assets/Icons/plus.svg";
import Weight from "../assets/Icons/weight.svg";
import User from "../assets/Icons/user.svg";

const boxNav = {
  p: 3,
  h: "full",
  w: "full",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const Training = () => {
  return (
    <Container w={"100%"}>
      <Flex alignItems={"center"} flexDirection={"column"}>
        <Button
          bg={"none"}
          py={6}
          borderRadius={"md"}
          borderWidth={"1px"}
          borderColor={"Black"}
          h={10}
          gap={3.5}
        >
          <Image src={Plus} w={5} />
          <Text
            fontSize={"2xl"}
            fontWeight={"hairline"}
            paddingRight={6}
            fontFamily={"Inter, sans-serif"}
          >
            create a new training
          </Text>
        </Button>
        <Container></Container>
        <Box
          w={"lg"}
          bg={"gray.100"}
          position={"fixed"}
          bottom={7}
          borderRadius={"lg"}
          p={3}
        >
          <Flex justifyContent={"space-around"}>
            <Box {...boxNav}>
              <Image src={Home} />
              <Text>Home</Text>
            </Box>
            <Box {...boxNav}>
              <Image src={Weight} />
              <Text mt={3}>Teino</Text>
            </Box>
            <Box {...boxNav}>
              <Image src={User} />
              <Text>Profile</Text>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
};

export default Training;
