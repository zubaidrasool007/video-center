import { FormControl, Input, InputAdornment, styled } from "@mui/material";
import React from "react";
import { SearchNormalIcon } from "../../../../public/assets/icons";

const SearchStyled = styled(Input)(() => ({
  "&:before": {
    border: "none !important",
  },
  width: 369,
  background: "#fff",
  borderRadius: "36px",
  fontSize: "14px",
  color: "#818181",
  padding: '15px 24px',
  minHeight: "51px",
}));

export const Search = ({ ...props }) => {
  return (
    <FormControl variant="standard">
      <SearchStyled
        id="input-with-icon-adornment"
        {...props}
      />
    </FormControl>
  );
};
