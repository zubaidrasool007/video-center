"use client";

import {
  Box,
  Button,
  Chip,
  Divider,
  TextField,
  Typography,
  Drawer,
  Autocomplete,
} from "@mui/material";
import React, { useState } from "react";
import {
  AddIcon,
  OutlineArrowLeft,
  OutlineMoreIcon,
} from "../../../public/assets/icons";
import Image from "next/image";
import { InviteCollaboratersModal } from "../Collaborater/InviteCollaboratersModal";

export const VideoDetails = ({ item, onClose, open }: any) => {
  const [openCollab, setOpenCollab] = useState(false);


  const addCollaborater = () => {
    setOpenCollab(true)
  }

  return (
    <Box>
      <Drawer
        open={open}
        onClose={onClose}
        anchor="right"
      >
        <Box
          sx={{
            maxWidth: 516,
            width: "100%",
            height: "100vh",
            background: "#fff",
            boxShadow: "0px 4px 19px 0px rgba(0, 0, 0, 0.04)",
            p: 4,
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: 6.5,
            }}
          >
            <Typography color="#222" fontSize="14px">
              Recent Videp
            </Typography>
            <OutlineMoreIcon
              sx={{
                transform: "rotate(90deg)",
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "13.5px",
              mb: 5,
            }}
          >
            <Box
              sx={{
                width: 61,
                height: 61,
                background: "#222",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <OutlineArrowLeft sx={{ m: "auto" }} />
            </Box>
            <Box>
              <Typography color="#222" fontSize="24px" fontWeight="500">
                {item.title}
              </Typography>
              <Typography
                component="span"
                fontSize="16px"
                color="#3E3E3E"
                display="inline-block"
              >
                Created at:
                <Typography component="span" fontSize="16px">
                  {item.uploadTime}
                </Typography>
              </Typography>
            </Box>
          </Box>
          <Box sx={{ mb: 4 }}>
            <Image
              src={item.thumbnailUrl}
              alt=""
              width={452}
              height={334}
              style={{ borderRadius: "18px" }}
            />
          </Box>
          <Box sx={{ width: "100%" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 2,
              }}
            >
              <Typography color="#222" fontSize="14px">
                Collaboraters :
              </Typography>
              Avatar
              <Button
                variant="outlined"
                onClick={addCollaborater}
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
                Add new
              </Button>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "18px",
                mb: 2,
              }}
            >
              <Typography color="#222" fontSize="14px">
                Timeline :
              </Typography>
              <Typography color="#222" fontSize="16px">
                {item.uploadTime}- Feb 20, 2023
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "33px",
              }}
            >
              <Typography color="#222" fontSize="14px">
                Status :
              </Typography>
              <Chip
                label="In Progress"
                sx={{
                  height: 21,
                  fontSize: "14px",
                  background: "#725DFF",
                  color: "#fff",
                }}
              />
            </Box>
          </Box>
          <Divider
            sx={{
              borderColor: "#ECECEC",
              my: 4,
            }}
          />
          <Box sx={{ width: "100%" }}>
            <Typography color="#222" fontSize="18px" fontWeight={500}>
              Add Collaborater
            </Typography>
            <Typography
              color="#222"
              fontSize="14px"
              fontWeight={500}
            >
              Assign these tasks to some other user.
            </Typography>
          </Box>
          <Typography color="#222" fontSize="14px" mb={0.25}>
            Select Users
          </Typography>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={[
              { id: 1, label: "Travis Howard", mail: "", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Big_Buck_Bunny_thumbnail_vlc.png/1200px-Big_Buck_Bunny_thumbnail_vlc.png" },
              { id: 2, label: "Agnes Walker", mail: "", img: "https://i.ytimg.com/vi_webp/gWw23EYM9VM/maxresdefault.webp" },
              { id: 3, label: "Trevor Henderson", mail: "", img: "https://img.jakpost.net/c/2019/09/03/2019_09_03_78912_1567484272._large.jpg" },
            ]}
            sx={{
              borderRadius: "16px",
              background: "#F9F9F9",
              height: "51px",
              border: "none",
              "& fieldset": {
                border: "none",
              },
            }}
            renderInput={(params) => <TextField {...params} />}
            renderOption={(props, option) => (
              <li {...props}>
                <Image
                  src={option.img}
                  alt={option.label}
                  width={40}
                  height={40}
                  style={{ marginRight: "8px", borderRadius: "50%" }}
                />
                {option.label}
              </li>
            )}
          />
        </Box>
      </Drawer>
      <Box>
        <InviteCollaboratersModal open={openCollab} handleClose={() => { setOpenCollab(false) }} />
      </Box>
    </Box>
  );
};
