import React, { useEffect, useState, useRef } from "react";
import {
  Avatar,
  Box,
  InputAdornment,
  Typography,
  useMediaQuery,
} from "@mui/material";
import {
  MenuIcon,
  MicrPhoneIcon,
  NavAvatar,
} from "../../../public/assets/icons";
import { Search } from "../HelpAssistant/Search/Search";
import Image from "next/image";
import { UserAvatr } from "../../../public/assets/images";
import { Collaboraters } from "../Collaborater/Collaboraters";
import { DefaultSearch } from "../HelpAssistant/Search/DefaultSearch";

export const TopNavBar = () => {
  const [open, setOpen] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement | null>(null);

  const matches = useMediaQuery("(min-width:1400px)");
  const avatarMatches = useMediaQuery("(min-width:992px)");

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        open &&
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [open]);

  const handleSearchContainerClick = (event: React.MouseEvent) => {
    event.stopPropagation(); 
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        justifyContent: "space-between",
        p: 3,
        pb: 0,
        flexWrap: "wrap",
      }}
    >
      <Box
        sx={{
          display: { xs: "flex", sm: "none" },
          borderRadius: "16px",
          width: 52,
          height: 52,
          background: "#F2F2F2",
          alignItems: "center",
          justifyContent: "center",
          mr: 2,
        }}
      >
        <MenuIcon />
      </Box>
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
      <Box
        sx={{
          position: "relative",
          width: { xs: "100%", sm: "unset" },
          order: { xs: 4, sm: "unset" },
          mt: { xs: 3, sm: 0 },
        }}
      >
        <Search
          placeholder="Need any Assistance?"
          startAdornment={
            <InputAdornment position="end">
              <MicrPhoneIcon />
            </InputAdornment>
          }
          onClick={() => setOpen(true)}
          sx={{
            background: "#F9F9F9",
            "& .MuiInputAdornment-root": {
              position: "absolute",
              right: "14px",
            },
          }}
        />
        {open && (
          <Box
            ref={searchContainerRef}
            className="default-search-container"
            onClick={handleSearchContainerClick}
            sx={{
              position: "absolute",
              zIndex: 1111,
              width: "100%",
              top: "73px",
            }}
          >
           <DefaultSearch
            className="default-search-container"
          />
          </Box>
        )}
      </Box>
      {matches && <Collaboraters />}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
        {avatarMatches && (
          <Box textAlign="end">
            <Typography fontSize="16px" fontWeight={500} color="#000">
              Marvin McKinney
            </Typography>
            <Typography fontSize="14px" fontWeight={300} color="#8D8D8D">
              marving@gmail.com
            </Typography>
          </Box>
        )}
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
