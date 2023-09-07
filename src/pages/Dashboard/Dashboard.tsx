"use client";
import { LeftMenuBar } from "@/components/LeftMenuBar/LeftMenuBar";
import { LeftNavBar } from "@/components/LeftNavBar/LeftNavBar";
import React, { useState } from "react";
import { Box } from "@mui/material";
import { Gallery } from "@/components/Gallery/Gallery";
import { TopNavBar } from "@/components/TopNav/TopNavBar";

export const Dashboard = () => {
  const [isSideBar, setIsSideBar] = useState(true);

  return (
    <Box display="flex" height="100vh">
      <LeftMenuBar isSideBar={() => setIsSideBar(!isSideBar)} />
      {isSideBar && <LeftNavBar />}
      <Box width="100%">
        <TopNavBar />
        <Gallery />
      </Box>
    </Box>
  );
};
