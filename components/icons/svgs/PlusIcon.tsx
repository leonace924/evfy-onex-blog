import React, { SVGAttributes } from 'react';

const PlusIcon = (props: SVGAttributes<SVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#clip0_2877_165)">
      <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="black" fillOpacity="0.54"/>
    </g>
    <defs>
      <clipPath id="clip0_2877_165">
        <rect width="24" height="24" fill="white"/>
      </clipPath>
    </defs>
  </svg>
);

export default PlusIcon;
