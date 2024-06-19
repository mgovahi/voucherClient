import { fuseDark } from "@fuse/colors";
import { lightBlue, red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
import settingsConfig from "app/configs/settingsConfig";
import qs from "qs";

const defaultTheme = {
  palette: {
    mode: "light",
    divider: "#e7e7e8",
    text: {
      primary: "rgb(17, 24, 39)",
      secondary: "rgb(107, 114, 128)",
      disabled: "rgb(149, 156, 169)",
    },
    common: {
      black: "rgb(17, 24, 39)",
      white: "rgb(255, 255, 255)",
    },
    primary: {
      light: "#ece7f8",
      main: "#4d3dee",
      dark: "#4234CD",
      contrastText: "rgb(255, 255, 255)",
    },
    secondary: {
      light: "#bdf2fa",
      main: "#16b1ff",
      dark: "#0cb7e2",
    },
    background: {
      paper: "#FFFFFF",
      default: "#f6f7f9",
    },
    info: {
      light: "rgb(229, 246, 253)",
      main: "#2196f3",
      dark: "#3273dc",
      contrastText: "#16b1ff",
    },
    error: {
      light: "#ffcdd2",
      main: "#f44336",
      dark: "#b71c1c",
    },
    success: {
      main: "#25c16f",
      dark: "#36BA75",
      light: "#D8F4E5",
      contrastText: "#25c16f",
    },
    custome: {
      darkBg: "#28243D",
      lightBg: "#F4F5FA",
      bodyBg: "#F4F5FA",
      tableHeaderBg: "#F9FAFC",
      iconBgDefault: "#f1f2f2",
      primaryLightBg: "#f2ebff",
      pageHeader: "#3a2d72",
    },
  },
};

/**
 * SETTINGS DEFAULTS
 */
export const defaultSettings = {
  customScrollbars: true,
  direction: "rtl",
  theme: {
    main: defaultTheme,
    navbar: defaultTheme,
    toolbar: defaultTheme,
    footer: defaultTheme,
  },
};

export function getParsedQuerySettings() {
  const parsedQueryString = qs.parse(window.location.search, {
    ignoreQueryPrefix: true,
  });

  if (parsedQueryString && parsedQueryString.defaultSettings) {
    return JSON.parse(parsedQueryString.defaultSettings);
  }
  return {};

  // Generating route params from settings
  /* const settings = qs.stringify({
        defaultSettings: JSON.stringify(defaultSettings, {strictNullHandling: true})
    });
    console.info(settings); */
}

/**
 * THEME DEFAULTS
 */
const theme = createTheme(settingsConfig.theme.main);
export const defaultThemeOptions = (direction) => {
  return {
    typography: {
      fontFamily: [
        direction === "rtl" ? "IRANYekanX" : "IRANYekanXNumEn ",
        direction === "ltr" ? "IRANYekanXNumEn " : "IRANYekanX",
        "Inter var",
        "Roboto",
        '"Helvetica"',
        "Arial",
        "sans-serif",
      ].join(","),
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
    },
    components: {
      MuiDateTimePicker: {
        defaultProps: {
          PopperProps: { className: "z-9999" },
        },
      },
      MuiAppBar: {
        defaultProps: {
          enableColorOnDark: true,
        },
        styleOverrides: {
          root: {
            backgroundImage: "none",
          },
        },
      },
      MuiButtonBase: {
        defaultProps: {
          disableRipple: true,
        },
      },
      MuiButton: {
        defaultProps: {
          variant: "text",
          color: "inherit",
        },
        styleOverrides: {
          root: {
            textTransform: "none",
            padding: "7px 22px",
            minWidth: "36px",
            // lineHeight: 1,
            // "&.MuiButton-containedPrimary:hover": {
            //   backgroundColor: theme.palette.primary.main,
            // },
          },
          sizeMedium: {
            borderRadius: 6,
            height: 38,
            minHeight: 38,
            maxHeight: 38,
          },
          sizeSmall: {
            borderRadius: "6px",
          },
          sizeLarge: {
            borderRadius: "6px",
          },
          contained: {
            boxShadow: "none",
            "&:hover, &:focus": {
              boxShadow: "none",
            },
          },
          containedInfo: {
            color: "#fff",
          },
        },
      },
      MuiButtonGroup: {
        defaultProps: {
          color: "secondary",
        },
        styleOverrides: {
          contained: {
            borderRadius: 18,
          },
        },
      },
      MuiTab: {
        styleOverrides: {
          root: {
            textTransform: "none",
          },
        },
      },
      MuiDialog: {
        styleOverrides: {
          paper: {
            borderRadius: 16,
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: "none",
            "&.MuiPaper-elevation1": {
              boxShadow: "0 0 14px 0 rgba(63, 64, 183, 0.13)",
            },
          },
          rounded: {
            borderRadius: "10px",
          },
        },
      },
      MuiPopover: {
        styleOverrides: {
          paper: {
            borderRadius: 8,
          },
        },
      },
      MuiTextField: {
        defaultProps: {
          color: "secondary",
          borderRadius: "8px",
        },
        styleOverrides: {
          root: {
            ".MuiFormHelperText-contained": {
              color: theme.palette.text.grayV,
            },
          },
        },
      },
      MuiInputLabel: {
        defaultProps: {
          color: "secondary",
        },
        styleOverrides: {
          root: {
            "&.Mui-focused": {
              color: theme.palette.primary.main,
            },
            "&.Mui-disabled": {
              color: theme.palette.text.primary,
            },
          },
        },
      },
      MuiSelect: {
        defaultProps: {
          color: "secondary",
        },
        styleOverrides: {
          root: {
            borderRadius: 5,
            backgroundColor: "#fff",
            // " &:before": {
            //   content: '""',
            //   position: "absolute",
            //   right: "0",
            //   top: "0",
            //   bottom: "0",
            //   width: "52px",
            //   backgroundColor: "#f0f0fa",
            //   borderRadius: "0 8px 8px 0",
            //   zIndex: 0
            // },
            " .MuiInputBase-input": {
              position: "relative",
              zIndex: 10,
            },
            " .MuiSelect-icon": {
              marginRight: "8px",
            },
          },
        },
      },
      MuiOutlinedInput: {
        defaultProps: {
          color: "secondary",
        },
        styleOverrides: {
          root: {
            borderRadius: 6,
            fontSize: "14px",
            color: theme.palette.text.primary,
            "&.Mui-focused ": {
              " .MuiOutlinedInput-notchedOutline": {
                borderColor: theme.palette.primary.main,
              },
            },
            "&.Mui-disabled": {
              " .MuiOutlinedInput-notchedOutline": {
                borderStyle: "dotted",
                color: "red",
              },
              " .MuiOutlinedInput-input": {
                backgroundColor: theme.palette.background.disabled,
                color: theme.palette.text.grayV,
              },
            },
          },
        },
      },
      MuiInputBase: {
        styleOverrides: {
          root: {
            borderRadius: 6,
            height: 53,
            minHeight: 53,
            maxHeight: 53,
            lineHeight: 1,
            " > input": {
              backgroundColor: "#fff",
              "&.MuiInputBase-inputAdornedEnd": {
                marginRight: "15px",
              },
            },
            " .MuiInputAdornment-root": {
              marginLeft: 0,
              " .MuiButtonBase-root": {
                marginRight: 0,
                padding: 0,
              },
            },
            " &.MuiInputBase-sizeSmall": {
              height: 36,
              minHeight: 36,
              maxHeight: 36,
            },
          },
        },
      },
      MuiFilledInput: {
        styleOverrides: {
          root: {
            borderRadius: "4px",
            "&:before, &:after": {
              display: "none",
            },
          },
        },
      },
      MuiSlider: {
        defaultProps: {
          color: "secondary",
        },
      },
      MuiCheckbox: {
        defaultProps: {
          color: "secondary",
        },
      },
      MuiRadio: {
        defaultProps: {
          color: "secondary",
        },
      },
      MuiSwitch: {
        defaultProps: {
          color: "secondary",
        },
      },
      MuiTypography: {
        variants: [
          {
            props: { color: "text.secondary" },
            style: {
              color: "text.secondary",
            },
          },
        ],
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: "16px",
          },
        },
      },
      MuiDataGrid: {
        styleOverrides: {
          root: {
            border: 0,
            color: theme.palette.text.primary,
            "& .MuiDataGrid-columnHeader:focus, & .MuiDataGrid-columnHeader:focus-within":
              {
                outline: "none",
              },
          },
          toolbarContainer: {
            paddingRight: `${theme.spacing(5)} !important`,
            paddingLeft: `${theme.spacing(3.25)} !important`,
          },
          columnHeaders: {
            maxHeight: "54px !important",
            minHeight: "54px !important",
            lineHeight: "24px !important",
            backgroundColor: theme.palette.custome.tableHeaderBg,
          },
          columnHeader: {
            height: "54px",
            "&:not(.MuiDataGrid-columnHeaderCheckbox)": {
              paddingRight: theme.spacing(4),
              paddingLeft: theme.spacing(4),
              "&:first-of-type": {
                paddingLeft: theme.spacing(5),
              },
            },
            "&:last-of-type": {
              paddingRight: theme.spacing(5),
            },
          },
          columnHeaderCheckbox: {
            maxWidth: "58px !important",
            minWidth: "58px !important",
          },
          columnHeaderTitleContainer: {
            padding: 0,
          },
          columnHeaderTitle: {
            fontWeight: 600,
            fontSize: "0.75rem",
            letterSpacing: "0.17px",
            textTransform: "uppercase",
          },
          columnSeparator: {
            color: theme.palette.divider,
          },
          virtualScroller: {
            marginTop: "54px !important",
          },
          virtualScrollerRenderZone: {
            "& .MuiDataGrid-row": {
              maxHeight: "50px !important",
              minHeight: "50px !important",
            },
          },
          row: {
            "&:last-child": {
              "& .MuiDataGrid-cell": {
                borderBottom: 0,
              },
            },
          },
          cell: {
            maxHeight: "50px !important",
            minHeight: "50px !important",
            lineHeight: "20px !important",
            borderColor: theme.palette.divider,
            padding: `0 ${theme.spacing(4)}`,
            "&:not(.MuiDataGrid-cellCheckbox)": {
              //padding: theme.spacing(4),
              "&:first-of-type": {
                paddingLeft: theme.spacing(5),
              },
            },
            "&:last-of-type": {
              paddingRight: theme.spacing(5),
            },
            "&:focus, &:focus-within": {
              outline: "none",
            },
          },
          cellCheckbox: {
            maxWidth: "58px !important",
            minWidth: "58px !important",
          },
          editInputCell: {
            padding: 0,
            color: theme.palette.text.primary,
            "& .MuiInputBase-input": {
              padding: 0,
            },
          },
          footerContainer: {
            minHeight: "50px !important",
            borderTop: `1px solid ${theme.palette.divider}`,
            "& .MuiTablePagination-toolbar": {
              minHeight: "50px !important",
            },
            "& .MuiTablePagination-displayedRows, & .MuiTablePagination-selectLabel":
              {
                color: theme.palette.text.primary,
              },
          },
        },
        defaultProps: {
          rowHeight: 50,
          headerHeight: 54,
        },
      },
      MuiAlert: {
        styleOverrides: {
          standardInfo: {
            backgroundColor: theme.palette.info.light,
            color: theme.palette.info.main,
            borderRadius: "5px",
            " svg": {
              fill: theme.palette.info.main,
            },
            " .MuiAlertTitle-root": {
              fontWeight: "bold",
            },
          },
          standardSuccess: {
            backgroundColor: theme.palette.success.light,
            color: theme.palette.success.main,
            borderRadius: "5px",
            " svg": {
              stroke: theme.palette.success.main,
            },
            " .MuiAlertTitle-root": {
              fontWeight: "bold",
            },
          },
          standardWarning: {
            backgroundColor: theme.palette.warning.light,
            color: theme.palette.warning.main,
            borderRadius: "5px",
            " svg": {
              stroke: theme.palette.warning.main,
            },
            " .MuiAlertTitle-root": {
              fontWeight: "bold",
            },
          },
        },
      },
      MuiLinearProgress: {
        styleOverrides: {
          root: {
            backgroundColor: "#ebedf2",
            borderRadius: "4px",
          },
        },
      },
    },
  };
};
export const mustHaveThemeOptions = {
  typography: {
    htmlFontSize: 10,
    fontSize: 14,
    small: {
      fontSize: "12px",
    },
    body1: {
      fontSize: "1.2rem",
    },
    body2: {
      fontSize: "1.4rem",
    },
    body3: {
      fontSize: "1.6rem",
    },
    body4: {
      fontSize: "1.8rem",
    },
  },
};

export const defaultThemes = {
  default: {
    palette: {
      mode: "light",
      primary: fuseDark,
      secondary: {
        light: lightBlue[400],
        main: lightBlue[600],
        dark: lightBlue[700],
      },
      error: red,
    },
    status: {
      danger: "orange",
    },
  },
  defaultDark: {
    palette: {
      mode: "dark",
      primary: fuseDark,
      secondary: {
        light: lightBlue[400],
        main: lightBlue[600],
        dark: lightBlue[700],
      },
      error: red,
    },
    status: {
      danger: "orange",
    },
  },
};

export function extendThemeWithMixins(obj) {
  const theme = createTheme(obj);
  return {
    border: (width = 1) => ({
      borderWidth: width,
      borderStyle: "solid",
      borderColor: theme.palette.divider,
    }),
    borderLeft: (width = 1) => ({
      borderLeftWidth: width,
      borderStyle: "solid",
      borderColor: theme.palette.divider,
    }),
    borderRight: (width = 1) => ({
      borderRightWidth: width,
      borderStyle: "solid",
      borderColor: theme.palette.divider,
    }),
    borderTop: (width = 1) => ({
      borderTopWidth: width,
      borderStyle: "solid",
      borderColor: theme.palette.divider,
    }),
    borderBottom: (width = 1) => ({
      borderBottomWidth: width,
      borderStyle: "solid",
      borderColor: theme.palette.divider,
    }),
  };
}
