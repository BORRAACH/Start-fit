import { Grid } from '@chakra-ui/react';

function UserConfig() {
  return (
    <Grid
      templateRows="repeat(1, 3fr)"
      templateColumns="repeat(4, 3fr)"
      gap={4}
      p={10}
      minH="70vh"
      maxH="100vh"
    ></Grid>
  );
}

export default UserConfig;
