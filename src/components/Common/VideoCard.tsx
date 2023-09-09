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

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 235,
  boxShadow: "none",
  borderRadius: "18px",
  borderWidth:'1px',
  borderStyle:'solid',
  borderColor:'#fff'
}));

export const VideoCard = ({ ...props }: any) => {
  return (
    <StyledCard {...props}>
      <Image width={235} height={214} src={FP} alt={""} />
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
            color="#222"
            fontSize="1rem"
            fontWeight={500}
          >
            First Project
          </Typography>
          <Typography
            component="span"
            fontSize="12.405px"
            color="#747474"
            display="inline-block"
          >
            Created at:
            <Typography component="span" fontSize="12.405px" fontWeight={500}>
              13 Aug, 2023
            </Typography>
          </Typography>
        </Box>
        <OutlineMoreIcon />
      </CardContent>
    </StyledCard>
  );
};
