import React from "react";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import {
  ActivityIcon,
  BulkCategory,
  ColorSwatchIcon,
  DocumentTextIcon,
  MicroPhoneSlashIcon,
  OutlineNotificationIcon,
  OutlineSendIcon,
  OutlineUserIcon,
  OutlineWalletIcon,
  SearchNormalIcon,
  TwoToneMenuIcon,
} from "../../../public/assets/icons";

const overview = [
  {
    icon: <ActivityIcon />,
    titile: "Recent Videos",
  },
  {
    icon: <TwoToneMenuIcon />,
    titile: "Projects",
  },
  {
    icon: <OutlineSendIcon />,
    titile: "Collaboraters",
  },
];

const payment = [
  {
    icon: <OutlineWalletIcon />,
    titile: "Payment",
  },
  {
    icon: <OutlineUserIcon />,
    titile: "Messages",
  },
  {
    icon: <DocumentTextIcon />,
    titile: "News",
  },
];

interface Props {
  isSideBar: boolean;
}

export const LeftNavBar = ({ isSideBar }: Props) => {
  return (
    <Box
      sx={{
        width: isSideBar ? "308px" : "0px",
        background: "#F9F9F9",
        boxShadow: "0px 4px 18px 0px rgba(217, 217, 217, 0.25) inset",
        padding: isSideBar ? "40px 24px" : "0px",
        flexShrink: 0,
        transition: "all 0.3s",
        overflowY: "auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "cente",
          justifyContent: "space-between",
          mb: 4,
        }}
      >
        <BulkCategory />
        <Box sx={{ display: "flex", alignItems: "cente", gap: 4 }}>
          <SearchNormalIcon />
          <MicroPhoneSlashIcon />
        </Box>
      </Box>
      <Typography sx={{ fontSize: "14px", color: "#676767", mb: 3.75 }}>
        Overview
      </Typography>
      <List sx={{ p: 0 }}>
        {overview.map((item, i) => (
          <ListItem
            key={i}
            sx={{
              p: 0,
              mb: 5,
              "&:last-child": {
                mb: 0,
              },
            }}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText
              primary={item.titile}
              sx={{
                color: "#000",
                "& span": {
                  lineHeight: "normal",
                  fontSize: "16px",
                },
              }}
            />
          </ListItem>
        ))}
      </List>
      <Divider sx={{ borderColor: "#F0F0F0", my: 5 }} />
      <Typography sx={{ fontSize: "14px", color: "#676767", mb: 3.75 }}>
        General
      </Typography>
      <List sx={{ p: 0 }}>
        {payment.map((item, i) => (
          <ListItem
            key={i}
            sx={{
              p: 0,
              mb: 5,
              "&:last-child": {
                mb: 0,
              },
            }}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText
              primary={item.titile}
              sx={{
                color: "#000",
                "& span": {
                  lineHeight: "normal",
                  fontSize: "16px",
                },
              }}
            />
          </ListItem>
        ))}
      </List>
      <Divider sx={{ borderColor: "#F0F0F0", my: 5 }} />
      <List sx={{ p: 0 }}>
        <ListItem
          sx={{
            p: 0,
            mb: 5,
            "&:last-child": {
              mb: 0,
            },
          }}
        >
          <ListItemIcon>
            <OutlineNotificationIcon />
          </ListItemIcon>
          <ListItemText
            primary="Notification"
            sx={{
              color: "#000",
              "& span": {
                lineHeight: "normal",
                fontSize: "16px",
              },
            }}
          />
        </ListItem>
        <ListItem
          sx={{
            p: 0,
            mb: 5,
            "&:last-child": {
              mb: 0,
            },
          }}
        >
          <ListItemIcon>
            <ColorSwatchIcon />
          </ListItemIcon>
          <ListItemText
            primary="Theme"
            sx={{
              color: "#000",
              "& span": {
                lineHeight: "normal",
                fontSize: "16px",
              },
            }}
          />
        </ListItem>
      </List>
    </Box>
  );
};
