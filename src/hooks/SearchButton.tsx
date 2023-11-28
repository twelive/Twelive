import React from 'react';
import HeaderButton from '@components/HeaderButton';

interface SearchButtonProps {
  src: string;
  isLink: boolean;
}

function SearchButton({ src, isLink }: SearchButtonProps) {
  return (
    <HeaderButton
      buttonClass="searchButton"
      imgClass="mobileImg"
      src={src}
      href={isLink ? 'search' : ''}
      title="검색버튼"
    ></HeaderButton>
  );
}

export default SearchButton;
