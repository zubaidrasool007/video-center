import { Avatar, AvatarGroup, Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { InviteCollaboratersModal } from "./InviteCollaboratersModal";

interface Collaborator {
  id: number;
  name: string;
  mail: string;
  img: string;
}

interface CollaboratersProps { }

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
      <Box>
        <InviteCollaboratersModal open={open} handleClose={() => { setOpen(false) }} />
      </Box>
    </Box>
  );
};
