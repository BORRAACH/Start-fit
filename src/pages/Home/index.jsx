import { Text, Box, Flex } from "@chakra-ui/react";

import { Container } from "../../components/Structure/style";
import { RadialGradient } from "./style";

import { GlobalStyleHome } from "./style";

function Home() {
  const styles = {
    tableBox: {
      w: "102px",
      h: "100px",
      bg: "#d9d9d97f",
      borderRadius: "10px",
    },
  };

  return (
    <>
      <GlobalStyleHome />
      <RadialGradient />
      <Container className="first-container">
        <Box className="table-box content-1">
          <Text className="small-text">Day A</Text>
          <Flex flexDirection={"column"}>
            <Flex marginBottom={"3rem"} marginTop={"1rem"} gap={41.82}>
              <Box {...styles.tableBox}></Box>
              <Box {...styles.tableBox}></Box>
              <Box {...styles.tableBox}></Box>
              <Box {...styles.tableBox}></Box>
            </Flex>
            <Text className="small-text">Create a new training table</Text>
            <Flex>
              <Box className="extended-box"></Box>
            </Flex>
            <Flex marginY={"4rem"} gap={41.82}>
              <Box {...styles.tableBox}></Box>
              <Box {...styles.tableBox}></Box>
              <Box {...styles.tableBox}></Box>
              <Box {...styles.tableBox}></Box>
            </Flex>
          </Flex>
        </Box>

        <Box className="content-2">
          <Flex className="text-box">
            <Text className="line-text-1">
              <span className="welcome-text">Welcome</span>
              <span className="to-text">to</span>
            </Text>
            <Text className="line-text-2">
              <span>Training sheet</span>
              <span>creator</span>
            </Text>
            <Text className="line-text-3">
              A simple platform that fits your purpose
            </Text>
          </Flex>
        </Box>
      </Container>
    </>
  );
}

export default Home;
