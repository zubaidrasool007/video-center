import { SvgIcon } from "@mui/material";
import React from "react";

export const NavAvatar = ({ ...props }) => {
  return (
    <SvgIcon
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_f_8_372)">
        <g clip-path="url(#clip0_8_372)">
          <rect
            x="3"
            y="3"
            width="34"
            height="34"
            rx="17"
            fill="url(#paint0_linear_8_372)"
          />
          <g opacity="0.5" filter="url(#filter1_f_8_372)">
            <circle cx="20.3696" cy="22.5872" r="10.7174" fill="#BD6AFF" />
          </g>
          <g filter="url(#filter2_f_8_372)">
            <circle cx="15.1957" cy="12.9785" r="10.7174" fill="#59FFA5" />
          </g>
          <g filter="url(#filter3_f_8_372)">
            <rect
              x="1.52173"
              y="17.7829"
              width="15.5217"
              height="15.5217"
              fill="#67BFFF"
            />
          </g>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_8_372"
          x="0.0434783"
          y="0.0434783"
          width="39.913"
          height="39.913"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="1.47826"
            result="effect1_foregroundBlur_8_372"
          />
        </filter>
        <filter
          id="filter1_f_8_372"
          x="-3.65213"
          y="-1.43454"
          width="48.0435"
          height="48.0435"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="6.65217"
            result="effect1_foregroundBlur_8_372"
          />
        </filter>
        <filter
          id="filter2_f_8_372"
          x="-8.82608"
          y="-11.0432"
          width="48.0435"
          height="48.0435"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="6.65217"
            result="effect1_foregroundBlur_8_372"
          />
        </filter>
        <filter
          id="filter3_f_8_372"
          x="-11.7826"
          y="4.4785"
          width="42.1304"
          height="42.1304"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="6.65217"
            result="effect1_foregroundBlur_8_372"
          />
        </filter>
        <linearGradient
          id="paint0_linear_8_372"
          x1="20"
          y1="3"
          x2="20"
          y2="37"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </linearGradient>
        <clipPath id="clip0_8_372">
          <rect x="3" y="3" width="34" height="34" rx="17" fill="white" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};
