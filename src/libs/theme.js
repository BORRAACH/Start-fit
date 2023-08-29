import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import { color } from 'framer-motion';

const styles = {
  global: (props) => ({
    body: {
      bg: mode('#F7FAFC', '#202023')(props),
    },
  }),
};

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4,
      },
      Link: {
        baseStyle: (props) => ({
          color: mode('#3d7aed', '#ff63c3'),
          textUnderlineOffset: 3,
        }),
      },
    },
  },
  Text: {
    variants: {
      custom: (props) => ({
        color: mode('black', 'white')(props),
      }),
    },
  },
  Button: {
    variants: {
      custom: (props) => ({
        border: '1px solid',
        borderColor: props.colorMode === 'light' ? 'black' : 'white',
      }),
    },
  },
};

const fonts = {
  heading: "'M PLUS Rounded 1c'",
};

const colors = {
  glassTeal: '#88ccca',
};

const config = {
  initialColorMode: 'light',
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  styles,
  components,
  colors,
  fonts,
});

export default theme;
