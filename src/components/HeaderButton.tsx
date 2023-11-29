import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface HeaderButtonProps {
  src: string;
  title: string;
  type?: 'button' | 'submit' | 'reset';
  href?: string;
  buttonClass?: string;
  className?: string;
  children?: ReactNode;
  imgClass?: string;
  onClick?: () => void;
}

function HeaderButton({
  src,
  title,
  type = 'button',
  href,
  buttonClass,
  children,
  imgClass,
  onClick,
}: HeaderButtonProps) {
  const ComponentName: React.ComponentType<any> = href ? StyledLink : Button;
  return (
    <ComponentName type={href ? type : null} to={href} className={buttonClass}>
      <Img src={src} className={imgClass} alt={title} onClick={onClick} />
      {children}
    </ComponentName>
  );
}

export default HeaderButton;

const StyledLink = styled(Link)`
  height: 3.125rem;
  box-sizing: border-box;
  margin-left: 0.75rem;
  border-style: none;
  background-color: transparent;
  cursor: pointer;

  &.homelogo {
    height: 2.5rem;
  }

  &.searchButton {
    width: 2.1875rem;
    height: 2.1875rem;
  }
`;

const Button = styled.button`
  border-style: none;
  box-sizing: border-box;
  height: 1.5rem;
  background-color: transparent;
  cursor: pointer;
  &.arrayOption {
    display: flex;
    vertical-align: middle;
    align-items: center;
  }
  &.hamburgerButton {
    width: 2.1875rem;
    height: 2.1875rem;
  }
  &.darkmodeButton {
    margin-top: 0.1875rem;
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
    padding: 0.3125rem;
    border-radius: 100%;
    width: 1.5rem;
    margin-right: 0.9375rem;
    &:hover {
      background-color: ${(props) => props.theme.hoverColor};
    }
  }

  &.mobileImg {
    padding: 0.3125rem;
    border-radius: 100%;
    &:hover {
      background-color: var(--button-hover-color);
    }
  }

  &.darkMode {
    width: 1.375rem;
    height: 1.375rem;
  }
`;
