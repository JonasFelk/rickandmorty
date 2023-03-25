import React, { FC } from "react";
import ContentLoader from "react-content-loader"
export const Skeleton: FC = () => {
  return <ContentLoader
    speed={2}
    width={257}
    height={382}
    viewBox="0 0 257 382"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  
  >
    <rect x="5" y="333" rx="0" ry="0" width="218" height="13" />
    <rect x="5" y="283" rx="0" ry="0" width="215" height="26" />
    <rect x="5" y="353" rx="0" ry="0" width="218" height="19" />
    <rect x="0" y="0" rx="0" ry="0" width="257" height="267" />
  </ContentLoader>
};
