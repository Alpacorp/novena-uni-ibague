import React, { FC, CSSProperties } from "react";

interface BrandLogoProps {
  src?: string;
  alt?: string;
  style?: CSSProperties;
}

const BrandLogo: FC<BrandLogoProps> = ({ src, alt, style }) => {
  return (
    <>
      <div className="brandLogo">
        <img src={src} alt={alt} title={alt} style={style || {}} />
      </div>
    </>
  );
};

export default BrandLogo;
