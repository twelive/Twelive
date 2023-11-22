import React, { ReactElement } from 'react';
import styled, { ThemeProvider } from "styled-components";
import mainlogo from '../assets/common-logo.svg';
import search from '../assets/common-search.svg';
import login from '../assets/common-login.svg';
import theme from '../../src/theme';


interface Head {
Button?: string;
className: string;
// src: string;
alt: string;

}

function Header(): ReactElement {
  return (  <>
  
  <HeadBar>
    <Div className='buttonContainer'>
  <Button className="homeButton">
    <img src={mainlogo} alt="트웰브 홈으로" className="logo"/>
  </Button>
  
  <Div>
    
  <Button className="searchButton">
    <img src={search} alt="검색버튼" className="search"/>
  </Button>

  <Button className="loginButton">
    <img src={login} alt="사용자 " className="userlo"/>
  </Button>

  </Div>


    </Div>
  </HeadBar>
  
  
  </> 
  );
}

export default Header;


const HeadBar = styled.header `

padding-left: 0.75rem;
padding-right: 0.75rem;

height: 3rem;
box-shadow: 1px 1px 4px 0px #D4D4D4;


`;

const Button = styled.button`
border-style: none;
box-sizing: border-box;
height: 1.5rem;
background-color: transparent;
cursor: pointer;



@media ${(props) => props.theme.mobile} {
  &.homeButton {
    background-color: red;
  
    height: 1.25rem;
  
  }
  
  &.searchButton {
    height: 1.5rem;
  }
  
  
  &.loginButton {
    height: 1.5rem;
  }

};
@media ${(props) => props.theme.tablet} {
  &.homeButton {
    background-color: blue;
    
    height: 1.25rem;
  
  };
  
  &.searchButton {
    height: 1.5rem;
  };
  
  
  &.loginButton {
    height: 1.5rem;
  };
};
@media ${(props) => props.theme.laptop} {
  &.homeButton {
    background-color: black;
    height: 1.25rem;
  
  };
  
  &.searchButton {
    height: 1.5rem;
  };
  
  
  &.loginButton {
    height: 1.5rem;
  };
};
`;

const Div = styled.div `
&.buttonContainer {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  transform: translate(0, 50%);

    

}

`;

