import React from "react";
import { Box, CardMedia } from "@mui/material";
import {
  BoldFolder,
  Discover,
  LogoutIcon,
  Setting,
  User,
  Wallet,
  Notification,
  AddIcon,
} from "../../../public/assets/icons";
import { OutlineArrowRightIcon } from "../../../public/assets/icons";
import Image from "next/image";
import { MiniBar } from "../../../public/assets/images";

export const LeftMenuBar = ({ isSideBar }: any) => {
  return (
    <Box
      sx={{
        width: "100px",
        height: "100%",
        background: "#FFF",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        paddingTop: "24px",
        position: "relative",
        flexShrink: 0,
        gap:2,
        overflow:"scroll"
      }}
    >
      <Box
        sx={{
          width: "28px",
          height: "28px",
          display: { xs: "none", md: "flex" },
          justifyContent: "center",
          alignItems: "center",
          background: "#F9F9F9",
          borderRadius: "8px",
          position: "absolute",
          top: "36px",
          right: "-13px",
          cursor: "pointer",
        }}
        onClick={isSideBar}
      >
        <OutlineArrowRightIcon />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Box
          sx={{
            width: "52px",
            height: "52px",
            borderRadius: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid #F3F3F3",
            padding: "4px",
          }}
        >
          <Image src={MiniBar} alt={""} width={44} height={44} />
        </Box>
        <Box
          sx={{
            width: "52px",
            height: "52px",
            borderRadius: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#1E1E1E",
            fontWeight: 800,
            color: "#fff",
            fontSize: "24px",
          }}
        >
          D
        </Box>
        <Box
          sx={{
            width: "40px",
            height: "40px",
            border: "1px solid #5C43FF",
            borderRadius: "50%",
            background: "linear-gradient(90deg, #725DFF -0.12%, #B265FF 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          <AddIcon sx={{ stroke: "#fff" }} />
          <Box
            sx={{
              width: "40px",
              height: "40px",
              border: "1px solid #5C43FF",
              borderRadius: "50%",
              background:
                "conic-gradient(from 180deg at 50% 50%, #725DFF 0deg, #865CAF 360deg)",
              filter: " blur(9.5px)",
              position: "absolute",
              top: "7px",
              zIndex: -1,
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "31px",
          alignItems: "center",
        }}
      >
        <Discover />
        <BoldFolder />
        <User />
        <Wallet />
        <Notification />
        <Setting />
      </Box>
      <LogoutIcon sx={{ mb: 10 }} />
    </Box>
  );
};
