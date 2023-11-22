import React, { ReactNode } from 'react';
import styled, { ThemeProvider } from "styled-components";

interface HeaderButtonProps {
  src: string;
  title: string;
  buttonClass: string;
  className?: string;
  children?: ReactNode;
  imgClass?: string;
}

function HeaderButton ({ src, title, buttonClass,children, imgClass }: HeaderButtonProps) {

  return (
    <Button type="button" className={buttonClass}>
      <Img src={src} className={imgClass}  alt={title} />
      {children}
    </Button>
  );

}



export default HeaderButton

const Button = styled.button`
border-style: none;
box-sizing: border-box;
height: 1.5rem;
background-color: transparent;
cursor: pointer;

&.homeButton {
  height: 50px;

  
  
  }

  
  
  &.searchButton {
    height: 2.5rem;
    
  }
  &.hamburger {
    height: 1.5rem;
    
  }
  
  
  &.loginButton {
    height: 2.125rem;
  }

  &.micButton {
   border-radius: 100%;
   background-color: red;
   height: 35px;
   margin-left: 10px;
  }

  



@media ${(props) => props.theme.tablet} {
  &.homeButton {
   
  
  };
  
  &.searchButton {
    border-radius: 0 20px 20px 0;
    border: 1px solid;
    height: 35px;
    border-left: none;
   
  };
  
  
  &.loginButton {

    display: flex;
    vertical-align: middle;
    align-items: center;
    height: 35px;
    background-color: purple;
    border-radius: 20px;
    padding-left: 10px;
    padding-right: 10px;

  };
};
@media ${(props) => props.theme.laptop} {
  &.homeButton {
   

  
  };
  
  &.searchButton {
    border-radius: 0 20px 20px 0;
    border: 1px solid;
    height: 35px;
    border-left: none;

  };
  
  
  &.loginButton {

    display: flex;
    vertical-align: middle;
    align-items: center;
    height: 35px;
    background-color: purple;
    border-radius: 20px;
    padding-left: 10px;
    padding-right: 10px;
  };
};
`;

const Img = styled.img`
&.homelogo {
  height: 40px;
}
`;
