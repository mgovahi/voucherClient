import { fuseDark, skyBlue } from "@fuse/colors";
import { blueGrey } from "@mui/material/colors";

export const lightPaletteText = {
  primary: "#383a3c",
  grayDay: "#b5b5c3",
  grayV: "#7e8299",
};

export const darkPaletteText = {
  primary: "#1a1c1f",
  secondary: "#383a3c",
  grayDay: "#b5b5c3",
  grayV: "#7e8299",
  grayT: "#828282",
  grayH: "#b69eed",
  alpha68: "rgba(255, 255, 255, 0.68)",
};

const themesConfig = {
  default: {
    headMinHeight: "400px",
    palette: {
      mode: "light",
      divider: "#eff3f9",
      text: darkPaletteText,
      common: {
        black: "rgb(17, 24, 39)",
        white: "rgb(255, 255, 255)",
      },
      success: {
        main: "#56ca00",
        dark: "#4caf50",
        light: "#e4f7d7",
        contrastText: "#56ca00",
      },
      successLight: {
        main: "#eaf6ea",
        contrastText: "#56ca00",
        light: "#ccecd6",
      },
      infoLight: {
        light: "#e5f3fe;",
        main: "#e5f3fe;",
        contrastText: "#2196f3",
        secondary:"#f9f7ff",
      },
      info: {
        light: "#fdeee1",
        main: "#1b84ff",
        contrastText: "#fff",
      },
      default: {
        main: "#758599",
        contrastText: "#758599",
      },
      primary: {
        light: "#f9f7ff",
        secondary: "#a788ea",
        main: "#4d3dee",
        dark: "#4234CD",
        tabMain:"#9155fd",
        contrastText: "rgb(255, 255, 255)",
      },
      secondary: {
        light: "#dbd8fc",
        main: "#bc4ae7",
        slowLight: "#eff3f9",
        dark: "#A240C7",
        contrastText: "#fff",
      },
      accent: {
        light: "#fbe1e7",
        secondary: "#f7a1b6",
        main: "#f1416c",
        dark: "#CF385D",
        contrastText: darkPaletteText.primary,
      },
      background: {
        paper: "#FFFFFF",
        default: "#eff3f9",
        infoLight: "#f3f8ff",
        disabled: "#F7F9FB",
      },
      error: {
        light: "#fee9e7",
        main: "#ff4c51",
        dark: "#f44336",
      },
      errorLight: {
        main: "#ffeaeb",
        contrastText: "#ff4c51",
        light: "#ffeaeb",
      },
      blueGray: {
        main: "#e1eafa",
        contrastText: "#3273dc",
      },
      warningLight: {
        main: "#FDEDE1",
        contrastText: "#E9B029",
      },
      warning: {
        main: "#E5A304",
        light: "#fdeee1;",
        contrastText: "#ffb900",
      },
      darkPink: {
        main: "#f1416c",
        light: "#EBAEBE",
        contrastText: "#fff",
      },
      yellow: {
        main: "#F59900",
        light: "#FFE3A7",
        contrastText: "#fff",
      },
      green: {
        main: "#17c653",
        light: "#95E6B7",
        contrastText: "#fff",
      },
      custome: {
        blue: "#00a3ff",
        blueDark: "#040040",
        white: "#fff",
        main: "#362f62",
        lightPurple: "#e7e8ff",
        lightBlue: "#74c3cb",
        purple: "#796ed1",
        lightGreen: "#f0fdf4",
        lightGreen2: "#d2ece4",
        green: "#56ca00",
        green2: "#4caf50",
        green3: "#31a05f",
        green4: "#20c374",
        green5: "#27ae60",
        greenBlue: "#11adb9",
        orange: "#f2994a",
        darkPurple: "#64607b",
        grayBg: "#E0E0E0",
        info: "#3273dc",
        info2: "#1976d2",
        warning: "#F59900",
        gray: "#f3f6f9",
        midGray: "#383a3c",
        lightWarning: "#fff6e7",
        error: "#fd6668",
        greenBlue2: "#1cb7b7",
        darkBg: "#28243D",
        lightBg: "#F4F5FA",
        bodyBg: "#F4F5FA",
        tableHeaderBg: "#F9FAFC",
        iconBgDefault: "#f1f2f2",
        primaryLightBg: "#f2ebff",
        pageHeader: "#3a2d72",
        darkSky: "#1f2024",
        red: "#f64e60",
        yellow: "#ffa800",
        lightPurple: "#f4e1f0",
        borderSecure: "#b8c5db",
        greenLight: "#eef8e8",
        grayProfile: "#22225A",
        cyanBlueLight: "#F5F8FA",
        darkWall: "#161619"
      },
    },
    status: {
      danger: "orange",
    },
  },
  defaultDark: {
    headMinHeight: "400px",
    headMobileMinHeight: "340px",
    palette: {
      mode: "dark",
      divider: "#e7e7e8",
      text: darkPaletteText,
      common: {
        black: "rgb(17, 24, 39)",
        white: "rgb(255, 255, 255)",
      },
      primary: {
        light: "#f9f7ff",
        secondary: "#a788ea",
        main: "#4d3dee",
        dark: "#4234CD",
        tabMain:"#9155fd",
        contrastText: "rgb(255, 255, 255)",
      },
      secondary: {
        light: "#dbd8fc",
        main: "#bc4ae7",
        slowLight: "#eff3f9",
        dark: "#A240C7",
        contrastText: "#fff",
      },
      accent: {
        light: "#fbe1e7",
        secondary: "#f7a1b6",
        main: "#f1416c",
        dark: "#CF385D",
        contrastText: darkPaletteText.primary,
      },
      background: {
        paper: "#FFFFFF",
        default: "#eff3f9",
        infoLight: "#f3f8ff",
        disabled: "#F7F9FB",
      },
      error: {
        light: "#fee9e7",
        main: "#ff4c51",
        dark: "#f44336",
      },
      status: {
        danger: "orange",
      },
    },
  },
  legacy: {
    palette: {
      mode: "light",
      divider: "#e2e8f0",
      text: lightPaletteText,
      common: {
        black: "rgb(17, 24, 39)",
        white: "rgb(255, 255, 255)",
      },
      primary: {
        light: fuseDark[200],
        main: fuseDark[500],
        dark: fuseDark[800],
        contrastText: darkPaletteText.primary,
      },
      secondary: {
        light: skyBlue[100],
        main: skyBlue[500],
        dark: skyBlue[900],
        contrastText: lightPaletteText.primary,
      },
      background: {
        paper: "#FFFFFF",
        default: "#f6f7f9",
      },
      error: {
        light: "#ffcdd2",
        main: "#f44336",
        dark: "#b71c1c",
      },
    },
    status: {
      danger: "orange",
    },
  },
  light1: {
    palette: {
      mode: "light",
      divider: "#e2e8f0",
      text: lightPaletteText,
      primary: {
        light: "#ece7f8",
        main: "#4d3dee",
        dark: "#6231C9",
        contrastText: "#fff",
      },
      secondary: {
        light: "#ffecc0",
        main: "#cdde4a",
        dark: "#ff9910",
        contrastText: lightPaletteText.primary,
      },
      background: {
        paper: "#FFFFFF",
        default: "#fff",
      },
      error: {
        light: "#ffcdd2",
        main: "#f44336",
        dark: "#b71c1c",
      },
      custome: {
        greenBlue: "#11adb9",
        darkSky: "#1f2024",
        red: "#f64e60",
        yellow: "#ffa800",
        lightPurple: "#f4e1f0",
        borderSecure: "#b8c5db",
        greenLight: "#eef8e8",
        grayProfile: "#22225A",
      },
      warning: {
        main: "#F59900",
      },
    },
    status: {
      danger: "orange",
    },
  },
  light2: {
    palette: {
      mode: "light",
      divider: "#e2e8f0",
      text: lightPaletteText,
      primary: {
        light: "#fdf3da",
        main: "#f8d683",
        dark: "#f3bc53",
        contrastText: lightPaletteText.primary,
      },
      secondary: {
        light: "#FADCB3",
        main: "#F3B25F",
        dark: "#ec9339",
        contrastText: lightPaletteText.primary,
      },
      background: {
        paper: "#FAFBFD",
        default: "#FFFFFF",
      },
      error: {
        light: "#ffcdd2",
        main: "#f44336",
        dark: "#b71c1c",
      },
    },
    status: {
      danger: "orange",
    },
  },
  light3: {
    palette: {
      mode: "light",
      divider: "#e2e8f0",
      text: lightPaletteText,
      primary: {
        light: "#D9C8CE",
        main: "#80485B",
        dark: "#50212F",
        contrastText: darkPaletteText.primary,
      },
      secondary: {
        light: "#FFE3BF",
        main: "#FFB049",
        dark: "#FF8619",
        contrastText: lightPaletteText.primary,
      },
      background: {
        paper: "#FFF0DF",
        default: "#FAFAFE",
      },
      error: {
        light: "#ffcdd2",
        main: "#f44336",
        dark: "#b71c1c",
      },
    },
    status: {
      danger: "orange",
    },
  },
  light4: {
    palette: {
      mode: "light",
      divider: "#e2e8f0",
      text: lightPaletteText,
      primary: {
        light: "#CDCCE8",
        main: "#5854B1",
        dark: "#2D2988",
        contrastText: darkPaletteText.primary,
      },
      secondary: {
        light: "#F8EBF2",
        main: "#E7BDD3",
        dark: "#D798B7",
        contrastText: lightPaletteText.primary,
      },
      background: {
        paper: "#FFFFFF",
        default: "#F6F7FB",
      },
      error: {
        light: "#ffcdd2",
        main: "#f44336",
        dark: "#b71c1c",
      },
    },
    status: {
      danger: "orange",
    },
  },
  light5: {
    palette: {
      mode: "light",
      divider: "#e2e8f0",
      text: lightPaletteText,
      primary: {
        light: "#C2C7F1",
        main: "#3543D0",
        dark: "#161EB3",
        contrastText: darkPaletteText.primary,
      },
      secondary: {
        light: "#B3F1FE",
        main: "#00CFFD",
        dark: "#00B2FC",
        contrastText: lightPaletteText.primary,
      },
      background: {
        paper: "#FFFFFF",
        default: "#F7FAFF",
      },
      error: {
        light: "#ffcdd2",
        main: "#f44336",
        dark: "#b71c1c",
      },
    },
    status: {
      danger: "orange",
    },
  },
  light6: {
    palette: {
      mode: "light",
      divider: "#e2e8f0",
      text: lightPaletteText,
      primary: {
        light: "#BBE2DA",
        main: "#1B9E85",
        dark: "#087055",
        contrastText: darkPaletteText.primary,
      },
      secondary: {
        light: "#FFD0C1",
        main: "#FF6231",
        dark: "#FF3413",
        contrastText: darkPaletteText.primary,
      },
      background: {
        paper: "#FFFFFF",
        default: "#F2F8F1",
      },
      error: {
        light: "#ffcdd2",
        main: "#f44336",
        dark: "#b71c1c",
      },
    },
    status: {
      danger: "orange",
    },
  },
  light7: {
    palette: {
      mode: "light",
      divider: "#e2e8f0",
      text: lightPaletteText,
      primary: {
        light: "#BFC4E6",
        main: "#2A3BAB",
        dark: "#0F1980",
        contrastText: darkPaletteText.primary,
      },
      secondary: {
        light: "#C2ECF0",
        main: "#33C1CD",
        dark: "#149EAE",
        contrastText: lightPaletteText.primary,
      },
      background: {
        paper: "#FFFFFF",
        default: "#EDF0F6",
      },
      error: {
        light: "#ffcdd2",
        main: "#f44336",
        dark: "#b71c1c",
      },
    },
    status: {
      danger: "orange",
    },
  },
  light8: {
    palette: {
      mode: "light",
      divider: "#e2e8f0",
      text: lightPaletteText,
      primary: {
        light: "#D2EFF2",
        main: "#68C8D5",
        dark: "#3AA7BA",
        contrastText: lightPaletteText.primary,
      },
      secondary: {
        light: "#FFF2C6",
        main: "#FED441",
        dark: "#FDB91C",
        contrastText: lightPaletteText.primary,
      },
      background: {
        paper: "#FAF6F3",
        default: "#FFFFFF",
      },
      error: {
        light: "#ffcdd2",
        main: "#f44336",
        dark: "#b71c1c",
      },
    },
    status: {
      danger: "orange",
    },
  },
  light9: {
    palette: {
      mode: "light",
      divider: "#e2e8f0",
      text: lightPaletteText,
      primary: {
        light: "#D3C0CD",
        main: "#6B2C57",
        dark: "#3C102C",
        contrastText: darkPaletteText.primary,
      },
      secondary: {
        light: "#FDEAC9",
        main: "#F9B84B",
        dark: "#F59123",
        contrastText: lightPaletteText.primary,
      },
      background: {
        paper: "#FFFFFF",
        default: "#FAFAFE",
      },
      error: {
        light: "#ffcdd2",
        main: "#f44336",
        dark: "#b71c1c",
      },
    },
    status: {
      danger: "orange",
    },
  },
  light10: {
    palette: {
      mode: "light",
      divider: "#e2e8f0",
      text: lightPaletteText,
      primary: {
        light: "#C6C9CD",
        main: "#404B57",
        dark: "#1C232C",
        contrastText: darkPaletteText.primary,
      },
      secondary: {
        light: "#FEEDC7",
        main: "#FCC344",
        dark: "#FAA11F",
        contrastText: lightPaletteText.primary,
      },
      background: {
        paper: "#FFFFFF",
        default: "#F5F4F6",
      },
      error: {
        light: "#ffcdd2",
        main: "#f44336",
        dark: "#b71c1c",
      },
    },
    status: {
      danger: "orange",
    },
  },
  light11: {
    palette: {
      mode: "light",
      divider: "#e2e8f0",
      text: lightPaletteText,
      primary: {
        light: "#C4C4C4",
        main: "#3A3A3A",
        dark: "#181818",
        contrastText: darkPaletteText.primary,
      },
      secondary: {
        light: "#EFEFED",
        main: "#CBCAC3",
        dark: "#ACABA1",
        contrastText: lightPaletteText.primary,
      },
      background: {
        paper: "#EFEEE7",
        default: "#FAF8F2",
      },
      error: {
        light: "#F7EAEA",
        main: "#EBCECE",
        dark: "#E3B9B9",
      },
    },
    status: {
      danger: "yellow",
    },
  },
  light12: {
    palette: {
      mode: "light",
      divider: "#e2e8f0",
      text: lightPaletteText,
      primary: {
        light: "#FFFAF6",
        main: "#FFEDE2",
        dark: "#FFE0CF",
        contrastText: lightPaletteText.primary,
      },
      secondary: {
        light: "#DBD8F7",
        main: "#887CE3",
        dark: "#584CD0",
        contrastText: darkPaletteText.primary,
      },
      background: {
        paper: "#FFFFFF",
        default: "#FCF8F5",
      },
      error: {
        light: "#ffcdd2",
        main: "#f44336",
        dark: "#b71c1c",
      },
    },
    status: {
      danger: "orange",
    },
  },
  dark1: {
    palette: {
      mode: "dark",
      divider: "rgba(241,245,249,.12)",
      text: darkPaletteText,
      primary: {
        light: "#C2C2C3",
        main: "#323338",
        dark: "#131417",
        contrastText: darkPaletteText.primary,
      },
      secondary: {
        light: "#B8E1D9",
        main: "#129B7F",
        dark: "#056D4F",
        contrastText: darkPaletteText.primary,
      },
      background: {
        paper: "#262526",
        default: "#1E1D1E",
      },
      error: {
        light: "#ffcdd2",
        main: "#f44336",
        dark: "#b71c1c",
      },
    },
    status: {
      danger: "orange",
    },
  },
  dark2: {
    palette: {
      mode: "dark",
      divider: "rgba(241,245,249,.12)",
      text: darkPaletteText,
      primary: {
        light: "#C9CACE",
        main: "#4B4F5A",
        dark: "#23262E",
        contrastText: darkPaletteText.primary,
      },
      secondary: {
        light: "#F8F5F2",
        main: "#E6DED5",
        dark: "#D5C8BA",
        contrastText: lightPaletteText.primary,
      },
      background: {
        paper: "#31343E",
        default: "#2A2D35",
      },
      error: {
        light: "#F7EAEA",
        main: "#EBCECE",
        dark: "#E3B9B9",
      },
    },
    status: {
      danger: "orange",
    },
  },
  dark3: {
    palette: {
      mode: "dark",
      divider: "rgba(241,245,249,.12)",
      text: darkPaletteText,
      primary: {
        light: "#C2C8D2",
        main: "#354968",
        dark: "#16213A",
        contrastText: darkPaletteText.primary,
      },
      secondary: {
        light: "#F4CFCA",
        main: "#D55847",
        dark: "#C03325",
        contrastText: darkPaletteText.primary,
      },
      background: {
        paper: "#23354E",
        default: "#1B2A3F",
      },
      error: {
        light: "#ffcdd2",
        main: "#f44336",
        dark: "#b71c1c",
      },
    },
    status: {
      danger: "orange",
    },
  },
  dark4: {
    palette: {
      mode: "dark",
      divider: "rgba(241,245,249,.12)",
      text: darkPaletteText,
      primary: {
        light: "#CECADF",
        main: "#5A4E93",
        dark: "#2E2564",
        contrastText: darkPaletteText.primary,
      },
      secondary: {
        light: "#B3EBD6",
        main: "#00BC77",
        dark: "#009747",
        contrastText: darkPaletteText.primary,
      },
      background: {
        paper: "#22184B",
        default: "#180F3D",
      },
      error: {
        light: "#ffcdd2",
        main: "#f44336",
        dark: "#b71c1c",
      },
    },
    status: {
      danger: "orange",
    },
  },
  dark5: {
    palette: {
      mode: "dark",
      divider: "rgba(241,245,249,.12)",
      text: darkPaletteText,
      primary: {
        light: "#CCD7E2",
        main: "#56789D",
        dark: "#2B486F",
        contrastText: darkPaletteText.primary,
      },
      secondary: {
        light: "#D7D3ED",
        main: "#796CC4",
        dark: "#493DA2",
        contrastText: darkPaletteText.primary,
      },
      background: {
        paper: "#465261",
        default: "#232931",
      },
      error: {
        light: "#ffcdd2",
        main: "#f44336",
        dark: "#b71c1c",
      },
    },
    status: {
      danger: "orange",
    },
  },
  dark6: {
    palette: {
      mode: "dark",
      divider: "rgba(241,245,249,.12)",
      text: darkPaletteText,
      primary: {
        light: "#FFC7CE",
        main: "#FF445D",
        dark: "#FF1F30",
        contrastText: darkPaletteText.primary,
      },
      secondary: {
        light: "#B4E3FB",
        main: "#05A2F3",
        dark: "#0175EA",
        contrastText: darkPaletteText.primary,
      },
      background: {
        paper: "#2F3438",
        default: "#25292E",
      },
      error: {
        light: "#ffcdd2",
        main: "#f44336",
        dark: "#b71c1c",
      },
    },
    status: {
      danger: "orange",
    },
  },
  dark7: {
    palette: {
      mode: "dark",
      divider: "rgba(241,245,249,.12)",
      text: darkPaletteText,
      primary: {
        light: "FFECC5",
        main: "#FEBE3E",
        dark: "#FD991B",
        contrastText: lightPaletteText.primary,
      },
      secondary: {
        light: "#FFC8C7",
        main: "#FE4644",
        dark: "#FD201F",
        contrastText: lightPaletteText.primary,
      },
      background: {
        paper: "#2A2E32",
        default: "#212529",
      },
      error: {
        light: "#ffcdd2",
        main: "#f44336",
        dark: "#b71c1c",
      },
    },
    status: {
      danger: "orange",
    },
  },
  dark8: {
    palette: {
      mode: "dark",
      divider: "rgba(241,245,249,.12)",
      text: darkPaletteText,
      primary: {
        light: "#BEBFC8",
        main: "#252949",
        dark: "#0D0F21",
        contrastText: darkPaletteText.primary,
      },
      secondary: {
        light: "#CBD7FE",
        main: "#5079FC",
        dark: "#2749FA",
        contrastText: darkPaletteText.primary,
      },
      background: {
        paper: "#2D3159",
        default: "#202441",
      },
      error: {
        light: "#ffcdd2",
        main: "#f44336",
        dark: "#b71c1c",
      },
    },
    status: {
      danger: "orange",
    },
  },
  dark9: {
    palette: {
      mode: "dark",
      divider: "rgba(241,245,249,.12)",
      text: darkPaletteText,
      primary: {
        light: "#BCC8CD",
        main: "#204657",
        dark: "#0B202C",
        contrastText: darkPaletteText.primary,
      },
      secondary: {
        light: "#B3EBC5",
        main: "#00BD3E",
        dark: "#00981B",
        contrastText: darkPaletteText.primary,
      },
      background: {
        paper: "#1C1E27",
        default: "#15171E",
      },
      error: {
        light: "#ffcdd2",
        main: "#f44336",
        dark: "#b71c1c",
      },
    },
    status: {
      danger: "orange",
    },
  },
  dark10: {
    palette: {
      mode: "dark",
      divider: "rgba(241,245,249,.12)",
      text: darkPaletteText,
      primary: {
        light: "#C3C2D2",
        main: "#36336A",
        dark: "#16143C",
        contrastText: darkPaletteText.primary,
      },
      secondary: {
        light: "#D6CEFC",
        main: "#765CF5",
        dark: "#4630EE",
        contrastText: darkPaletteText.primary,
      },
      background: {
        paper: "#2D2A5D",
        default: "#26244E",
      },
      error: {
        light: "#ffcdd2",
        main: "#f44336",
        dark: "#b71c1c",
      },
    },
    status: {
      danger: "orange",
    },
  },
  dark11: {
    palette: {
      mode: "dark",
      divider: "rgba(241,245,249,.12)",
      text: darkPaletteText,
      primary: {
        light: "#BFB7BF",
        main: "#2A0F29",
        dark: "#0F040F",
        contrastText: darkPaletteText.primary,
      },
      secondary: {
        light: "#D9B9C3",
        main: "#801737",
        dark: "#500716",
        contrastText: darkPaletteText.primary,
      },
      background: {
        paper: "#200D1F",
        default: "#2D132C",
      },
      error: {
        light: "#ffcdd2",
        main: "#f44336",
        dark: "#b71c1c",
      },
    },
    status: {
      danger: "orange",
    },
  },
  dark12: {
    palette: {
      mode: "dark",
      divider: "rgba(241,245,249,.12)",
      text: darkPaletteText,
      primary: {
        light: "#CCC3C8",
        main: "#543847",
        dark: "#291720",
        contrastText: darkPaletteText.primary,
      },
      secondary: {
        light: "#DFB8BD",
        main: "#BE717A",
        dark: "#99424A",
        contrastText: lightPaletteText.primary,
      },
      background: {
        paper: "#4D4351",
        default: "#27141F",
      },
      error: {
        light: "#ffcdd2",
        main: "#f44336",
        dark: "#b71c1c",
      },
    },
    status: {
      danger: "orange",
    },
  },
  greyDark: {
    palette: {
      mode: "dark",
      divider: "rgba(241,245,249,.12)",
      text: darkPaletteText,
      primary: {
        light: fuseDark[200],
        main: fuseDark[700],
        dark: fuseDark[800],
        contrastText: darkPaletteText.primary,
      },
      secondary: {
        light: skyBlue[100],
        main: skyBlue[500],
        dark: skyBlue[900],
        contrastText: lightPaletteText.primary,
      },
      background: {
        paper: blueGrey[700],
        default: blueGrey[900],
      },
      error: {
        light: "#ffcdd2",
        main: "#f44336",
        dark: "#b71c1c",
      },
    },
    status: {
      danger: "orange",
    },
  },
};

export default themesConfig;
