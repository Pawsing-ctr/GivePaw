import React from 'react';

const Heart = ({width="36", height="34", color="white"}) => {
  console.log(color);
  
  return (
    <svg width={width} height={height} viewBox="0 0 36 34" fill={color} xmlns="http://www.w3.org/2000/svg">
  <path fill={color} d="M20.9332 3.07919C20.9332 3.07919 19.145 4.08423 18 5.7069C18 5.7069 16.855 4.08423 15.0668 3.07919C15.0668 3.07919 12.2618 1.50273 9.14563 2.16052C9.14563 2.16052 6.02947 2.81831 4.01474 5.41216C4.01474 5.41216 2 8.00602 2 11.3601C2 11.3601 2 18.5626 9.79975 25.9717C9.79975 25.9717 12.1764 28.2293 15.0232 30.2524C15.0232 30.2524 16.4525 31.2682 17.4209 31.8405C17.7807 32.0532 18.2193 32.0532 18.5793 31.8404C18.5793 31.8404 19.5516 31.2655 20.9816 30.249C20.9816 30.249 23.8285 28.2253 26.2046 25.9675C26.2046 25.9675 34 18.5605 34 11.3601C34 11.3601 34 8.00602 31.9853 5.41216C31.9853 5.41216 29.9705 2.81831 26.8544 2.16052C26.8544 2.16052 23.7382 1.50273 20.9332 3.07919ZM13.9527 5.28743C13.9527 5.28743 16.0097 6.44351 16.906 8.71397C17.0262 9.01853 17.2556 9.26063 17.5442 9.38756L17.5483 9.38935C17.8374 9.51498 18.1622 9.51516 18.4513 9.38953L18.4558 9.38753C18.7444 9.26063 18.9738 9.01853 19.094 8.71397C19.094 8.71397 19.9903 6.44351 22.0473 5.28743C22.0473 5.28743 24.1043 4.13136 26.3895 4.61374C26.3895 4.61374 28.6747 5.09612 30.1522 6.99828C30.1522 6.99828 31.6296 8.90044 31.6296 11.3601C31.6296 11.3601 31.6296 17.4465 24.6186 24.1082C24.6186 24.1082 22.3662 26.2484 19.6575 28.1739C19.6575 28.1739 18.7164 28.8429 18 29.3005C18 29.3005 17.2863 28.8447 16.3471 28.1772C16.3471 28.1772 13.6384 26.2522 11.3854 24.1121C11.3854 24.1121 4.37037 17.4484 4.37037 11.3601C4.37037 11.3601 4.37037 8.90044 5.84784 6.99828C5.84784 6.99828 7.32532 5.09612 9.6105 4.61374C9.6105 4.61374 11.8957 4.13136 13.9527 5.28743Z" stroke={color} stroke-width="3"/>
    </svg>
  );
};

export default Heart;