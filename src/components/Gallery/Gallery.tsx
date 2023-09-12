import {
  Box,
  Button,
  Chip,
  Divider,
  Grid,
  InputAdornment,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { Search } from "../HelpAssistant/Search/Search";
import { AddIcon, SearchNormalIcon } from "../../../public/assets/icons";
import GalleryTabs from "./GalleryTabs";
import { VideoCard } from "../Common/VideoCard";
import { InviteCollaboratersModal } from "../Collaborater/InviteCollaboratersModal";
// import { GalleryTabs } from "./GalleryTabs";
import { VideoDetails } from "@/components/VideoDetails";

const tabs = ["All", "Ads video", "Ai generated video", "Marketing video"];

export const Gallery = () => {
  const [data, setData] = useState([]);
  const [detailDrawer, setDetailDrawer] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(null);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    fetch("/assets/json/vedio.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Video data not fetched:", error));
  }, []);

  const handleVideoCardClick = (item: any, index: any) => {
    setSelectedVideo(item);
    setDetailDrawer(true);
    setSelectedVideoIndex(index);
  };

  const handleCloseVideoDetails = () => {
    setDetailDrawer(false);
    setSelectedVideoIndex(null);
  };

  return (
    <Box sx={{ p: 3, width: "100%" }}>
      <Box sx={{ p: 3, background: "#F9F9F9", borderRadius: "32px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 2,
            mb: "26px",
          }}
        >
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
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap-reverse",
            gap: 3,
          }}
        >
          <Tabs
            // value={value}
            // onChange={handleChange}
            aria-label="basic tabs example"
            sx={{ "& .MuiTabs-flexContainer": { gap: 1 } }}
          >
            {tabs.map((tab, i) => (
              <Tab
                key={i}
                label={tab}
                sx={{
                  borderRadius: "27px",
                  border: "1px solid #C5C5C5",
                  color: "#616161",
                  fontSize: "14px",
                  padding: "12px 16px",
                  textTransform: "capitalize",
                }}
              />
            ))}
          </Tabs>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography color="#222" fontSize="14px">
              Collaboraters :
            </Typography>
            Avatar
            <Button
              variant="outlined"
              onClick={handleOpen}
              sx={{
                color: "#725DFF",
                fontSize: "14px",
                border: "none",
                textTransform: "initial",
                height: 21,
                p: 0,
                "&:hover": {
                  border: "none",
                  background: "none",
                },
              }}
              startIcon={<AddIcon sx={{ stroke: "#725DFF" }} />}
            >
              Add
            </Button>
          </Box>
        </Box>
        <Divider sx={{ mt: 4, mb: 6.3, borderColor: "#F0F0F0" }} />
        <Grid
          container
          spacing="11px"
          columns={{ xs: 12, xl: 15 }}
          justifyContent="center"
        >
          {data.map((item, i) => (
            <Grid
              item
              key={i}
              onClick={() => handleVideoCardClick(item, i)} // Add onClick handler to the Box
              sx={{ cursor: "pointer" }}
            >
              <VideoCard item={item} isSelected={selectedVideoIndex === i} />
            </Grid>
          ))}
        </Grid>
        <InviteCollaboratersModal open={open} handleClose={handleClose} />
        {detailDrawer && selectedVideo && (
          <VideoDetails
            open={detailDrawer}
            item={selectedVideo}
            onClose={handleCloseVideoDetails}
          />
        )}
      </Box>
    </Box>
  );
};
