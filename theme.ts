"use client";
import { createTheme } from "@mui/material";

const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          lineHeight: "normal",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          lineHeight: "normal",
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: "Poppins, sans-serif",
          "::-webkit-scrollbar": {
            display: "none",
          },
          "::-webkit-scrollbar-track": {
            display: "none",
          },

          "::-webkit-scrollbar-thumb": {
            display: "none",
          },
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          width: "unset",
          height: "unset",
          fontSize: "intial",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "none",
        },
      },
    },
  },
});

export default theme;
