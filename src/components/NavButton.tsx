import React from 'react';
import styled from 'styled-components';

interface NavButtonProps {
  src: string;
  title: string;
}

function NavButton({ src, title }: NavButtonProps) {
  const handleNav = (e: React.MouseEvent<HTMLButtonElement>) => {
    const altText = (e.currentTarget.querySelector('img') as HTMLImageElement)
      ?.alt;
    console.log(altText);
  };

  return (
    <Button type="button" onClick={handleNav}>
      <img src={src} alt={title} />
      <p>{title}</p>
    </Button>
  );
}

export default NavButton;

const Button = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 6.0938rem;
  height: 3rem;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
