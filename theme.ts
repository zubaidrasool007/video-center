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
  },
});

export default theme;
