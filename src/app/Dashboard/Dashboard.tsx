
// import { LeftMenuBar } from "@/components/LeftMenuBar/LeftMenuBar";
// import { LeftNavBar } from "@/components/LeftNavBar/LeftNavBar";
// import React, { useState } from "react";
// import { Box } from "@mui/material";
// import { Gallery } from "@/components/Gallery/Gallery";
// import { TopNavBar } from "@/components/TopNav/TopNavBar";
// import { VideoDetails } from "@/components/VideoDetails";
import { VideoDetails } from "@/components/VideoDetails";

export const Dashboard = () => {
  // const [isSideBar, setIsSideBar] = useState(true);

  return (
    <VideoDetails />
  )

  // return (
  //   <Box display="flex" height="100vh">
  //     <LeftMenuBar isSideBar={() => setIsSideBar(!isSideBar)} />
  //     {isSideBar && <LeftNavBar />}
  //     <Box width="100%">
  //       <TopNavBar />
  //       <VideoDetails />
  //       {/* <Gallery /> */}
  //     </Box>
  //   </Box>
  // );
};
