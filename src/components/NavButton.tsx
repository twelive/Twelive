import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

interface NavButtonProps {
  src: string;
  title: string;
}

function NavButton({ src, title }: NavButtonProps) {
  const dispatch = useDispatch();
  const { navMenu } = useSelector((state: RootState) => state.navMenu);

  const handleNav = (e: React.MouseEvent<HTMLButtonElement>) => {
    const altText = (e.currentTarget.querySelector('img') as HTMLImageElement)
      ?.alt;

    if (altText !== undefined && navMenu !== altText) {
      dispatch({ type: 'NAV_CLICK', payload: altText });
    }
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
