
import Image from "next/image";
import styles from "./page.module.css";
import { VideoCard } from "@/components/Common/VideoCard";
import { Dashboard } from "@/app/Dashboard/Dashboard";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "../../theme";

export default function Home() {
  return (
    // <>
    //   <ThemeProvider theme={theme}>
    //     <CssBaseline />
        <Dashboard />
    //   </ThemeProvider>
    // </>
  );
}
