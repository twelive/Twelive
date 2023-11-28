import React from 'react';
import { useDispatch } from 'react-redux';
import HeaderButton from '@/components/HeaderButton';

interface DarkModeProps {
  src: string;
}

function DarkMode({ src }: DarkModeProps) {
  const dispatch = useDispatch();

  const handleDarkModeToggle = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  return (
    <HeaderButton
      buttonClass="darkmodeButton "
      src={src}
      title="다크모드"
      imgClass="darkMode"
      onClick={handleDarkModeToggle}
    ></HeaderButton>
  );
}

export default DarkMode;
