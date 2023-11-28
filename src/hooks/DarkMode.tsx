import React from 'react';
import HeaderButton from '@/components/HeaderButton';

interface DarkModeProps {
  src: string;
  handleEvent: () => void;
}

function DarkMode({ src, handleEvent }: DarkModeProps) {
  return (
    <HeaderButton
      buttonClass="darkmodeButton "
      src={src}
      title="다크모드"
      imgClass="darkMode"
      onClick={handleEvent}
    ></HeaderButton>
  );
}

export default DarkMode;
