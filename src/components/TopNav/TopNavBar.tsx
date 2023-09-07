import React from "react";
import { Avatar, Box, InputAdornment, Typography } from "@mui/material";
import { MicrPhoneIcon, NavAvatar } from "../../../public/assets/icons";
import { Search } from "../HelpAssistant/Search/Search";
import Image from "next/image";
import { UserAvatr } from "../../../public/assets/images";

export const TopNavBar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        justifyContent: "space-between",
        p: 3,
        pb: 0,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <NavAvatar />
        <Typography
          component="span"
          fontSize="16px"
          color="#222"
          display="inline-block"
          fontWeight={500}
        >
          Hi,
          <Typography component="span" fontSize="16px" color="#7B7B7B">
            John
          </Typography>
        </Typography>
      </Box>
      <Search
        placeholder="Need any Assistance?"
        startAdornment={
          <InputAdornment position="end">
            <MicrPhoneIcon />
          </InputAdornment>
        }
        sx={{ background: "#F9F9F9" }}
      />
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
        <Box textAlign="end">
          <Typography fontSize="16px" fontWeight={500} color="#000">
            Marvin McKinney
          </Typography>
          <Typography fontSize="14px" fontWeight={300} color="#8D8D8D">
            marving@gmail.com
          </Typography>
        </Box>
        <Box
          sx={{
            width: 52,
            height: 52,
            borderRadius: "16px",
            background: "#F3F3F3",
          }}
        >
          <Image src={UserAvatr} width={52} height={52} alt="" />
        </Box>
      </Box>
    </Box>
  );
};
