import React from "react";
import ContentLoader from "react-content-loader";

export const SkeletonSidebar = () => {
  return <ContentLoader style={{marginBottom: '10'}}
    speed={2}
    width={220}
    height={21}
    viewBox="0 0 220 21"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="1" ry="1" width="220" height="21" />
  </ContentLoader>
};
