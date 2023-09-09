import { SvgIcon } from "@mui/material";
import React from "react";

export const VideoIcon = ({ ...props }) => {
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
        d="M8.66667 2.16667H4.66667C2.38667 2.16667 1.5 3.05334 1.5 5.33334V10.6667C1.5 12.2 2.33333 13.8333 4.66667 13.8333H8.66667C10.9467 13.8333 11.8333 12.9467 11.8333 10.6667V5.33334C11.8333 3.05334 10.9467 2.16667 8.66667 2.16667Z"
        fill="#222222"
      />
      <path
        d="M7.66666 7.58667C8.35886 7.58667 8.92 7.02553 8.92 6.33334C8.92 5.64114 8.35886 5.08 7.66666 5.08C6.97447 5.08 6.41333 5.64114 6.41333 6.33334C6.41333 7.02553 6.97447 7.58667 7.66666 7.58667Z"
        fill="#222222"
      />
      <path
        d="M14.4334 4.11334C14.1601 3.97334 13.5867 3.81334 12.8067 4.36L11.8201 5.05334C11.8267 5.14667 11.8334 5.23334 11.8334 5.33334V10.6667C11.8334 10.7667 11.8201 10.8533 11.8201 10.9467L12.8067 11.64C13.2201 11.9333 13.5801 12.0267 13.8667 12.0267C14.1134 12.0267 14.3067 11.96 14.4334 11.8933C14.7067 11.7533 15.1667 11.3733 15.1667 10.42V5.58667C15.1667 4.63334 14.7067 4.25334 14.4334 4.11334Z"
        fill="#222222"
      />
    </SvgIcon>
  );
};
