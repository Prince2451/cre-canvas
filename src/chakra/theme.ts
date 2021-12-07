import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: {
      "100": "rgb(245, 249, 255)",
      "200": "rgb(185, 212, 254)",
      "300": "rgb(167, 202, 254)",
      "400": "rgb(124, 176, 253)",
      "500": "rgb(64, 139, 252)",
      "600": "rgb(24, 115, 251)",
      "700": "rgb(3, 86, 211)",
      "800": "rgb(2, 62, 151)",
      "900": "rgb(1, 21, 50)",
    },
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: "primary",
      },
    },
    Input: {
      defaultProps: {
        focusBorderColor: "primary.500",
      },
    },
  },
});

export default theme;
