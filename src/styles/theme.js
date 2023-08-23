import { extendTheme } from "@chakra-ui/react";

// * Include custom option in here, like colors, fonts...
const customTheme = {
  colors: {
    dark: {
      0: "#000000",
      100: "#1A1A1A",
      200: "#282828",
      300: "#303030",
      400: "#3A3A3A",
      500: "#4D4D4D",
    },
    gray: {
      0: "#fff",
      25: "##F5F5F5",
      50: "#E7E7E7",
      100: "#DFDDDD",
      200: "#B8B8B8",
      300: "#7E7E7E",
      400: "#545454",
      500: "#3A3A3A",
      600: "#232323",
    },
  },
};

const theme = extendTheme(customTheme);

export default theme;
