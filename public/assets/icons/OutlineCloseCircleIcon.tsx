import { SvgIcon } from "@mui/material";
import React from "react";

export const OutlineCloseCircleIcon = ({ ...props }) => {
  return (
    <SvgIcon
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      { ...props }
    >
      <path
        opacity="0.4"
        d="M7.99992 14.6667C11.6818 14.6667 14.6666 11.6819 14.6666 8C14.6666 4.3181 11.6818 1.33333 7.99992 1.33333C4.31802 1.33333 1.33325 4.3181 1.33325 8C1.33325 11.6819 4.31802 14.6667 7.99992 14.6667Z"
        fill="#222222"
        fill-opacity="0.27"
      />
      <path
        d="M8.70666 8.00001L10.24 6.46667C10.4333 6.27334 10.4333 5.95334 10.24 5.76001C10.0467 5.56667 9.72666 5.56667 9.53332 5.76001L7.99999 7.29334L6.46666 5.76001C6.27332 5.56667 5.95332 5.56667 5.75999 5.76001C5.56666 5.95334 5.56666 6.27334 5.75999 6.46667L7.29332 8.00001L5.75999 9.53334C5.56666 9.72667 5.56666 10.0467 5.75999 10.24C5.85999 10.34 5.98666 10.3867 6.11332 10.3867C6.23999 10.3867 6.36666 10.34 6.46666 10.24L7.99999 8.70667L9.53332 10.24C9.63332 10.34 9.75999 10.3867 9.88666 10.3867C10.0133 10.3867 10.14 10.34 10.24 10.24C10.4333 10.0467 10.4333 9.72667 10.24 9.53334L8.70666 8.00001Z"
        fill="#222222"
        fill-opacity="0.41"
      />
    </SvgIcon>
  );
};
