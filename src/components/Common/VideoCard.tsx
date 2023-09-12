import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import { FP } from "../../../public/assets/images";
import { OutlineMoreIcon } from "../../../public/assets/icons";
import Image from "next/image";

const StyledCard = styled(Card)(({ theme, isSelected }: any) => ({
  maxWidth: 235,
  boxShadow: "none",
  borderRadius: "18px",
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: '#fff',
  backgroundColor: isSelected ? "#725DFF" : 'transparent',

}));

export const VideoCard = ({ item, isSelected, ...props }: any) => {
  return (
    <StyledCard isSelected={isSelected} {...props}>
      <Image width={235} height={214} src={item.thumbnailUrl} alt={""} />
      <CardContent
        sx={{
          px: "14px",
          pb: "14px",
          pt: "12px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography
            variant="h5"
            component="div"
            color={isSelected ? "#FFFFFF" : '#222'}
            fontSize="1rem"
            fontWeight={500}
          >
            {item.title}
          </Typography>
          <Typography
            component="span"
            fontSize="12.405px"
            color={isSelected ? "#FFFFFF" : "#747474"}
            display="inline-block"
          >
            Created at:
            <Typography component="span" fontSize="12.405px" fontWeight={500}>
              {item.uploadTime}
            </Typography>
          </Typography>
        </Box>
        <OutlineMoreIcon />
      </CardContent>
    </StyledCard>
  );
};
