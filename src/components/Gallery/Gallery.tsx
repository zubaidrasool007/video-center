import { Box, Chip, InputAdornment, Typography } from "@mui/material";
import React from "react";
import { Search } from "../HelpAssistant/Search/Search";
import { SearchNormalIcon } from "../../../public/assets/icons";
import GalleryTabs from "./GalleryTabs";
import { VideoCard } from "../Common/VideoCard";
// import { GalleryTabs } from "./GalleryTabs";

export const Gallery = () => {
  return (
    <Box sx={{ p: 3, width: "100%", height: "100%" }}>
      <Box sx={{ p: 3, background: "#F9F9F9", borderRadius: "32px" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <Box>
              <Typography
                sx={{ fontSize: "24px", fontWeight: 600, color: "#222" }}
              >
                Recent Videos
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <Typography sx={{ fontSize: "14px", color: "#838383" }}>
                Recently created videos
              </Typography>
              <Box
                component="span"
                sx={{
                  borderRadius: "19px",
                  display: "inline-block",
                  background: "#25AE3B",
                  px: 1,
                  py: 0.75,
                  fontSize: "13px",
                  fontWeight: 500,
                  color: "#fff",
                }}
              >
                4 Sep, 2023
              </Box>
            </Box>
          </Box>
          <Search
            placeholder="Search for Project"
            startAdornment={
              <InputAdornment position="start" sx={{ marginRight: "22px" }}>
                <SearchNormalIcon />
              </InputAdornment>
            }
          />
        </Box>
        <VideoCard />
        {/* <GalleryTabs /> */}
      </Box>
    </Box>
  );
};
