import { Box } from '@chakra-ui/react';
import { Component } from 'react';

class Workouts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exercises: {},
    };
  }

  render() {
    return <Box bg={'gray.200'} h={'3xs'} borderRadius={10}></Box>;
  }
}

export default Workouts;
