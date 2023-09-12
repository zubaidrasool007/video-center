"use client";
import { LeftMenuBar } from "@/components/LeftMenuBar/LeftMenuBar";
import { LeftNavBar } from "@/components/LeftNavBar/LeftNavBar";
import React, { useEffect, useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { Gallery } from "@/components/Gallery/Gallery";
import { TopNavBar } from "@/components/TopNav/TopNavBar";

export const Dashboard = () => {
  const [isSideBar, setIsSideBar] = useState(true);

  const matches = useMediaQuery("(min-width:900px)");
  const hideMiniBar = useMediaQuery("(min-width:600px)");

  return (
    <Box display="flex" height="100vh" overflow={"hidden"}>
      {hideMiniBar && (
        <LeftMenuBar isSideBar={() => setIsSideBar(!isSideBar)} />
      )}

      {matches && <LeftNavBar isSideBar={isSideBar} />}
      <Box width="100%" sx={{ transition: "all 0.5s" }}>
        <TopNavBar />
        <Gallery />
      </Box>
    </Box>
  );
};
