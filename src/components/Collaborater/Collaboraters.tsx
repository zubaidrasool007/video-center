import { Avatar, AvatarGroup, Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { InviteCollaboratersModal } from "./InviteCollaboratersModal";

interface Collaborator {
  id: number;
  name: string;
  mail: string;
  img: string;
}

const Collaborater: Collaborator[] = [
  { id: 1, name: "Travis Howard", mail: "", img: "/static/images/avatar/2.jpg" },
  { id: 2, name: "Agnes Walker", mail: "", img: "/static/images/avatar/4.jpg" },
  { id: 3, name: "Trevor Henderson", mail: "", img: "/static/images/avatar/5.jpg" },
];

export const Collaboraters = () => {
  const [open, setOpen] = useState(false);

  const addCollaburater = () => {
    setOpen(true)
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }} onClick={addCollaburater}>
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
          {Collaborater.map((item, index) => (
            <Avatar key={index} alt={item.name} src={item.img} />
          ))
          }
        </AvatarGroup>
      </Box>
      {/* <Box
        sx={{
          px: 2.5,
          py: 2,
          background: "#fff",
          display: "flex",
          alignItems: "cenetr",
          gap: "57px",
          borderRadius: "16px",
        }}
      >
        <Box sx={{ display: "flex", gap: "10px" }}>
          <Avatar src="" sx={{ width: 45, height: 45 }} />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography fontSize="18px" fontWeight={500} color="#222">
              First Project
            </Typography>
            <Typography fontSize="12px" color="#3E3E3E">
              AI editor
            </Typography>
          </Box>
        </Box>
        <MessageTextIcon />
      </Box> */}
      <Box>
        <InviteCollaboratersModal open={open} handleClose={() => { setOpen(false) }} />
      </Box>
    </Box>
  );
};
