import React from 'react';
import HeaderButton from '@components/HeaderButton';

interface HomeLogoProps {
  src: string;
}

function HomeLogo({ src }: HomeLogoProps) {
  return (
    <HeaderButton
      buttonClass="homeButton"
      src={src}
      imgClass="homelogo"
      title="트웰브 홈으로"
      href="/"
    ></HeaderButton>
  );
}

export default HomeLogo;
