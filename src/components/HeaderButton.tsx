import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface HeaderButtonProps {
  src: string;
  title: string;
  buttonClass?: string;
  className?: string;
  children?: ReactNode;
  imgClass?: string;
  onClick?: () => void;
}

function HeaderButton({
  src,
  title,
  buttonClass,
  children,
  imgClass,
  onClick,
}: HeaderButtonProps) {
  return (
    <Button type="button" className={buttonClass}>
      <Img src={src} className={imgClass} alt={title} onClick={onClick} />
      {children}
    </Button>
  );
}

export default HeaderButton;

const Button = styled.button`
  border-style: none;
  box-sizing: border-box;
  height: 1.5rem;
  background-color: transparent;
  cursor: pointer;
  &.arrayOption {
    display: flex;
    flex-direction: row;
    vertical-align: middle;
    align-items: center;
  }
  &.hamburgerButton {
    width: 35px;
    height: 35px;
  }
  &.darkmodeButton {
    margin-top: 3px;
    margin-right: 0.75rem;

    height: 2.1875rem;
    width: 2.1875rem;
    border-radius: 100%;

    &:hover {
      background-color: ${(props) => props.theme.hoverColor};
    }
  }
  &.roundedOption {
    border: 0.05rem solid var(--button-border-color);
    height: 2.1875rem;
    border-radius: 1.25rem;
    padding-left: 0.625rem;
    padding-right: 0.625rem;
    &:hover {
      border: 0.05rem solid var(--primary-color);
      background-color: ${(props) => props.theme.hoverColor};
    }
  }
  &.searchOption {
    border-radius: 0 1.25rem 1.25rem 0;
    border: 0.05rem solid var(--button-border-color);
    border-left: none;
    background-color: var(--button-color);
    &:hover {
      background-color: #dedede;
    }
    @media ${(props) => props.theme.tablet} {
      width: 2.8125rem;
    }
    @media ${(props) => props.theme.laptop} {
      width: 3.4375rem;
    }
  }

  &.homeButton {
    height: 3.125rem;
    margin-left: 0.75rem;
  }

  &.searchButton {
    height: 2.1875rem;
  }

  &.loginButton {
    height: 2.125rem;
    margin-right: 0.75rem;
  }

  &.micButton {
    border-radius: 100%;
    height: 2.1875rem;
    margin-left: 0.625rem;
    &:hover {
      background-color: ${(props) => props.theme.hoverColor};
    }
  }
`;

const Img = styled.img`
  &.homelogo {
    height: 2.5rem;
  }
  &.hamburger {
    /* height: 35px;
  width: 35px; */
    padding: 5px;
    border-radius: 100%;
    width: 1.5rem;
    margin-right: 15px;
    &:hover {
      background-color: ${(props) => props.theme.hoverColor};
    }
  }

  &.mobileImg {
    padding: 5px;
    border-radius: 100%;
    &:hover {
      background-color: var(--button-hover-color);
    }
  }

  &.darkMode {
    width: 22px;
    height: 22px;
  }
`;
