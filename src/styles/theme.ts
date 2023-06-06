import { extendTheme } from "@chakra-ui/react";
import { ComponentStyleConfig } from "@chakra-ui/react";

const imputTheme: ComponentStyleConfig = {
  // style object for base or default style
  baseStyle: {},
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    
  },
  // default values for 'size', 'variant' and 'colorScheme'
  defaultProps: {
    size: "",
    variant: "",
    colorScheme: "",
  },
};

const customTheme = extendTheme({
  colors: {
    white: {
      1: "#ffffff",
    },
    grey: {
      0: "#0B0D0D",
      1: "#212529",
      2: "#495057",
      3: "#868E96",
      4: "#ADB5BD",
      5: "#CED4DA",
      6: "#DEE2E6",
      7: "#E9ECEF",
      8: "#F1F3F5",
      9: "#F8F9FA",
      10: "#FDFDFD",
    },
    brand: {
      1: "#EDEAFD",
      2: "#B0A6F0",
      3: "#5126EA",
      4: "#4529E6",
    },
    sucess: {
      1: "#DDF3E4",
      2: "#CCEBD7",
      3: "#18794E",
    },
    alert: {
      1: "#FFE5E5",
      2: "#FDD8D8",
      3: "#CD2B31",
    },
  },
  fontWeights: {
    black: 900,
    extrabold: 800,
    semibold: 600,
    bold: 700,
    medium: 500,
    normal: 400,
  },

  fontSizes: {
    heading: {
      1: "14px",
      2: "16px",
      3: "20px",
      4: "24px",
      5: "28px",
      6: "32px",
      7: "36px",
      8: "44px",
    },
    ipunt: {
      md: "16px",
      label: "14px",
    },
    body: {
      1: "24px",
      2: "28px",
    },
  },
  button: {
    lg: "16px",
    md: "14px",
    sm: "12px",
    xs: "10px",
  },
  components: {
    inpunt: imputTheme
  }
});


export default customTheme;
