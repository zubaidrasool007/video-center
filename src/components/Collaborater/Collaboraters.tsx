import { Avatar, AvatarGroup, Box, Typography } from "@mui/material";
import React from "react";
import { SmallAvatar } from "../../../public/assets/images";

export const Collaboraters = () => {
  return (
    <Box sx={{display:'flex', alignItems:'center'}}>
      <Typography color="#474747" fontSize="12px" fontWeight={500}>
        Collaboraters (10):
      </Typography>
      <AvatarGroup
        total={11}
        sx={{
          "& .MuiAvatar-root": {
            width: 34,
            height: 34,
          },
        }}
      >
        {/* <Avatar alt="Remy Sharp" src={SmallAvatar} /> */}
        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
        <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
      </AvatarGroup>
    </Box>
  );
};
