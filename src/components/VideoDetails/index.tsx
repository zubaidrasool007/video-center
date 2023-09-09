'use client'

import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Divider,
  Input,
  InputAdornment,
  Link,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  AddIcon,
  MicrPhoneIcon,
  OutlineArrowLeft,
  OutlineMoreIcon,
  SMSIcon,
  SearchNormalIcon,
  VideoIcon,
  ProfileUserIcon,
  OutlineCloseCircleIcon,
  AddSquareIcon,
} from "../../../public/assets/icons";
import Image from "next/image";
import { DetailVideoImage, SmallAvatar } from "../../../public/assets/images";



export const VideoDetails = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  console.log('Out of Use Effect!')

  useEffect(() => {
      console.log('------------Testing Use Effect!')
  }, []);

  const callFunction = () => {
    console.log("Testing**");
  }
  return (
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
            First Project
          </Typography>
          <Typography
            component="span"
            fontSize="16px"
            color="#3E3E3E"
            display="inline-block"
          >
            Created at:
            <Typography component="span" fontSize="16px">
              13 Aug, 2023
            </Typography>
          </Typography>
        </Box>
      </Box>
      <Box sx={{ mb: 4 }}>
        <Image
          src={DetailVideoImage}
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
            Feb 2, 2023 - Feb 20, 2023
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
      {/* <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      > */}
      {/* <Card
        sx={{
          borderRadius: "16px",
        }}
      >
        <CardContent sx={{ p: 4 }}>
          <Typography color="#222" fontSize="22px" fontWeight={500}>
            Invite Collaboraters
          </Typography>
          <Typography color="#222" fontSize="14px">
            Lorem ipsum dolor sit amet consectetur.
          </Typography>
          <form>
            <Typography color="#222" fontSize="14px" mb={1}>
              Name or Email
            </Typography>
            <Input
              placeholder="e.g John , john@gmail.com"
              startAdornment={
                <InputAdornment position="end">
                  <SMSIcon sx={{ mr: 2 }} />
                </InputAdornment>
              }
              sx={{
                "&:before": {
                  border: "none !important",
                },
                background: "rgba(249, 249, 249, 0.63)",
                borderRadius: "16px",
                fontSize: "14px",
                width: "100%",
                height: "50px",
                px: 3,
                color: "#222",
                mb: 2.5,
              }}
            />
            <Typography
              component="span"
              fontSize="12.405px"
              color="#222"
              display="inline-block"
              mb={4}
            >
              This site is protected by reCAPTCHA and the Google and
              <Typography component="span" fontSize="12.405px" fontWeight={500}>
                <Link color="#4D33EF">Privacy Policy</Link>
              </Typography>{" "}
              and{" "}
              <Typography component="span" fontSize="12.405px" fontWeight={500}>
                <Link color="#4D33EF">Terms of Service </Link>
              </Typography>{" "}
              apply.
            </Typography>
            <Button
              variant="contained"
              sx={{ px: 2, py: 1, borderRadius: "8px", background: "#5136FF", textTransform:"initial", fontSize:"14px" }}
            >
              Add
            </Button>
          </form>
        </CardContent>
      </Card> */}
     
      
      
    </Box>
  );
};
