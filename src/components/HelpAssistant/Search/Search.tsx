import { FormControl, Input, InputAdornment, styled } from "@mui/material";
import React from "react";
import { SearchNormalIcon } from "../../../../public/assets/icons";

const SearchStyled = styled(Input)(({ theme }) => ({
  "&:before": {
    border: "none !important",
  },
  [theme.breakpoints.down("lg")]: {
    width: 250,
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
  width: 369,
  background: "#fff",
  borderRadius: "36px",
  fontSize: "14px",
  color: "#818181",
  padding: "15px 24px",
  minHeight: "51px",
}));

export const Search = ({ ...props }) => {
  return (
    <SearchStyled
      id="input-with-icon-adornment"
      disableUnderline={true}
      {...props}
    />
  );
};
