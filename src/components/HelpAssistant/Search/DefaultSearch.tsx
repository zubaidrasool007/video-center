import React, {useState} from "react";
import {
  Card,
  CardContent,
  Box,
  Input,
  Button,
  Typography,
} from "@mui/material";
import Image from "next/image";
import {
  SearchNormalIcon,
  ProfileUserIcon,
  OutlineCloseCircleIcon,
  VideoIcon,
  AddSquareIcon,
  ArrowSwapIcon,
} from "../../../../public/assets/icons";
import { SmallAvatar } from "../../../../public/assets/images";
import { InviteCollaboratersModal } from "@/components/Collaborater/InviteCollaboratersModal";

const styles = {
  textField: {
    width: "100%",
    outline: "none",
    "& input::placeholder": {
      color: "#8B8B8B",
      fontFamily: "Poppins",
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "normal",
    },
  },
  adornmentBox: {
    marginRight: "18px",
  },
  searchingFeild: {
    display: "flex",
    alignItems: "center",
  },
  searchFeild: {
    width: "66%",
  },
  customButton: {
    backgroundColor: "#F9F9F9",
    fontSize: "12px",
    fontStyle: "normal",
    display: "flex",
    padding: "2px 3px",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    borderRadius: "6px",
    border: "1px solid #F9F9F9",
  },
  boderLine: {
    height: "1px",
    backgroundColor: "#F9F9F9",
    margin: "17px 0px",
    width: "100%",
  },
  lookingCollab: {
    margin: "16px 0px",
  },
  collabButtons: {
    display: "flex",
    marginTop: "12px",
    gap: "8px",
  },
  buttonCollaboraters: {
    display: "flex",
    justifyContent: "space-between",
    padding: "8px 12px",
    gap: "8px",
    borderRadius: "31px",
    border: "1px solid #F9F9F9",
    background: "#F9F9F9",
    alingItem: "center",
    cursor: "pointer",
  },
  collabsText: {
    color: "#222",
    fontFamily: "Poppins",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: "400",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  collabsheading: {
    color: "#888",
    fontFamily: "Poppins",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: "400",
  },
};

export const DefaultSearch = ({ sx }: any) => {
  const [openCollab, setOpenCollab] = useState(false);

  const handleModal = () => {
    setOpenCollab(true)
  }
  return (
    <Box>
    <Card sx={sx}>
      <CardContent sx={{ px: "22px", py: "18px" }}>
        <Box sx={styles.searchingFeild}>
          <SearchNormalIcon sx={styles.adornmentBox} />
          <Box sx={styles.searchFeild}>
            <Input
              sx={styles.textField}
              disableUnderline={true}
              placeholder="Search for people, tasks, doc"
            />
          </Box>
          <Box sx={styles.customButton}>
            <Button
              sx={{
                color: "#222222",
                fontWeight: "500",
                fontSize: "12px",
                px: "3px",
                py: "2px",
              }}
            >
              Ctrl + F
            </Button>
          </Box>
        </Box>
        <Box sx={styles.boderLine}></Box>
        <Box sx={styles.lookingCollab}>
          <Typography sx={styles.collabsheading}>I’m looking for</Typography>
          <Box sx={styles.collabButtons}>
            <Box sx={styles.buttonCollaboraters}>
              <ProfileUserIcon />
              <Typography sx={styles.collabsText}>Collaboraters</Typography>
              <OutlineCloseCircleIcon />
            </Box>
            <Box sx={styles.buttonCollaboraters}>
              <VideoIcon />
              <Typography sx={styles.collabsText}>Videos</Typography>
              <OutlineCloseCircleIcon />
            </Box>
          </Box>
        </Box>
        <Typography
          component="span"
          fontSize="12px"
          color="#888"
          display="inline-block"
          mb={1.5}
        >
          Last search &nbsp;
          <Typography
            component="span"
            color="#D8D8D8"
            fontSize="12px"
            fontWeight={600}
          >
            3
          </Typography>
        </Typography>
        {[...Array(3)].map((item, i) => (
          <Box
            key={i}
            sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}
          >
            <Box sx={{ width: 27, height: 27, borderRadius: "50%" }}>
              <Image src={SmallAvatar} alt="" width={26} height={27} />
            </Box>
            <Typography color="#222" fontSize="12px" fontWeight={500}>
              guy@icloud.com
            </Typography>
            <Typography color="#696969" fontSize="12px" fontWeight={500}>
              guy@icloud.com
            </Typography>
          </Box>
        ))}
        <Typography
          component="span"
          fontSize="12px"
          color="#888"
          display="inline-block"
          mb={1.5}
        >
          Quick Actions
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, cursor: "pointer" }}>
          <AddSquareIcon />
          <Typography fontSize="14px" color="#222">
            Create new Video
          </Typography>
          <Box
            sx={{
              width: 26,
              height: 22,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "6px",
              background: "rgba(249, 249, 249, 0.87)",
              ml: "auto",
            }}
          >
            <Typography fontSize="12px" color="#929292" fontWeight={500}>
              N
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, cursor: "pointer" }} onClick={handleModal}>
          <AddSquareIcon />
          <Typography fontSize="14px" color="#222">
            Add Collaborater
          </Typography>
          <Box
            sx={{
              width: 26,
              height: 22,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "6px",
              background: "rgba(249, 249, 249, 0.87)",
              ml: "auto",
            }}
          >
            <Typography fontSize="12px" color="#929292" fontWeight={500}>
              A
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, cursor: "pointer" }}>
          <ArrowSwapIcon />
          <Typography fontSize="14px" color="#222">
           Move File
          </Typography>
          <Box
            sx={{
              width: 26,
              height: 22,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "6px",
              background: "rgba(249, 249, 249, 0.87)",
              ml: "auto",
            }}
          >
            <Typography fontSize="12px" color="#929292" fontWeight={500}>
              M
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
      <Box>
      <InviteCollaboratersModal open={openCollab} handleClose={setOpenCollab} />
    </Box>
    </Box>
  );
};
