import { Avatar, AvatarGroup, Box, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { SmallAvatar, UserAvatr, MiniBar } from "../../../public/assets/images";
import { MessageTextIcon } from "../../../public/assets/icons";

interface Collaborator {
  id: number;
  name: string;
  mail: string;
  img: any;
}

const Collaborater: Collaborator[] = [
  { id: 1, name: "Travis", mail: "", img: SmallAvatar.src },
  { id: 2, name: "Agnes", mail: "", img: MiniBar.src },
  { id: 3, name: "Trevor ", mail: "", img: UserAvatr.src },
];

export const Collaboraters = () => {
  const [showDetail, setShowDetail] = useState(false)
  const [collaborater, setCollaborater] = useState({
    name: "",
    img: "",
  })
  const collabModalRef = useRef<HTMLDivElement | null>(null);


  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        showDetail &&
        collabModalRef.current &&
        !collabModalRef.current.contains(event.target as Node)
      ) {
        setShowDetail(false);
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showDetail]);

  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
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
            <div key={index} onClick={() => { setShowDetail(!showDetail), setCollaborater(item) }}>
              <Avatar key={index} alt={item.name} src={item.img} />
            </div>
          ))
          }
        </AvatarGroup>
      </Box>
      {showDetail &&
        <Box
          sx={{
            px: 2.5,
            py: 2,
            background: "#fff",
            display: "flex",
            alignItems: "cenetr",
            gap: "57px",
            borderRadius: "16px",
            position: "absolute",
            zIndex: 9999,
          }}
          ref={collabModalRef}
        >
          <Box sx={{ display: "flex", gap: "10px" }}>
            <Avatar src={collaborater?.img} sx={{ width: 45, height: 45 }} />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography fontSize="18px" fontWeight={500} color="#222">
                {collaborater?.name}
              </Typography>
              <Typography fontSize="12px" color="#3E3E3E">
                AI editor
              </Typography>
            </Box>
          </Box>
          <MessageTextIcon />
        </Box>
      }
    </Box>
  );
};
