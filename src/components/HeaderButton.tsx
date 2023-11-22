import React, { ReactNode } from 'react';
import styled, { ThemeProvider } from "styled-components";

interface HeaderButtonProps {
  src: string;
  title: string;
  buttonClass: string;
  className?: string;
  children?: ReactNode;
}

function HeaderButton ({ src, title, buttonClass,children }: HeaderButtonProps) {

  return (
    <Button type="button" className={buttonClass}>
      <img src={src}  alt={title} />
      {children}
    </Button>
  );

}

const Button = styled.button`
border-style: none;
box-sizing: border-box;
height: 1.5rem;
background-color: transparent;
cursor: pointer;

&.homeButton {
  height: 30px;  
  
  
  
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

  


@media ${(props) => props.theme.mobile} {
  &.homeButton {
    
  
  
  
  }
  
  &.searchButton {
  
  }
  
  
  &.loginButton {

  }

};
@media ${(props) => props.theme.tablet} {
  &.homeButton {
   
  
  };
  
  &.searchButton {

  };
  
  
  &.loginButton {

  };
};
@media ${(props) => props.theme.laptop} {
  &.homeButton {
   

  
  };
  
  &.searchButton {

  };
  
  
  &.loginButton {

  };
};
`;


export default HeaderButton

