import React from 'react';
import { useDispatch } from 'react-redux';
import HeaderButton from '@/components/HeaderButton';

interface HeaderBackProps {
  src: string;
}

function HeaderBackButton({ src }: HeaderBackProps) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({ type: 'SEARCH_INPUT', value: '' });
  };
  return (
    <>
      <HeaderButton
        src={src}
        title={'뒤로가기'}
        href="/"
        buttonClass="searchButton"
        imgClass="mobileImg"
        onClick={handleClick}
      />
    </>
  );
}

export default HeaderBackButton;
