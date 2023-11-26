
import React, { ReactElement, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import styled, { ThemeProvider } from "styled-components";
import mainlogo from '../assets/common-logo.svg';
import whitemainlogo from '../assets/common-whitemainlogo.svg';
import search from '../assets/common-search.svg';
import whitesearch from '../assets/common-whitesearch.svg';
import login from '../assets/common-login.svg';
import whitelogin from '../assets/common-whitelogin.svg';
import menu from '../assets/common-menu.svg';
import whitemenu from '../assets/common-whitemenu.svg';
import mic from '../assets/common-mic.svg'
import whitemic from '../assets/common-whitemic.svg';
import blacksun from '../assets/common-blacksun.svg';
import whitemoon from '../assets/common-whitemoon.svg';
import HeaderButton from '../components/HeaderButton';
import MenuBar from '../layouts/MenuBar';
import theme from '@/theme';
import store from '@/store/store';
import { Provider } from 'react-redux';









interface Head {
Button?: string;
className: string;
alt: string;
onClick?: () => void;
}

function Header(): ReactElement {

  const dispatch = useDispatch();
  const { toggleMenu } = useSelector((state: RootState) => state.toggleMenu);
  const isMobile = useMediaQuery ({
    query : "(min-width : 20rem) and (max-width : 47.9375rem)"
  })
  const isLaptop = useMediaQuery ({
    query : "(min-width : 48rem) and (max-width : 63.125rem)"
  })
  const isDesktop = useMediaQuery ({
    query : "(min-width : 63.1875rem) and (max-width : 120rem)"
  })

  const handleToggle = () => {
    dispatch({ type: 'TOGGLE_CLICK', value: toggleMenu });
  };

  const images = {
    darkMode: {
      login: whitelogin,
      darkModeButton: whitemoon,
      logo: whitemainlogo,
      mic: whitemic,
      menu: whitemenu,
      search: whitesearch,
   
    },
    lightMode: {
      login: login,
      darkModeButton: blacksun,
      logo: mainlogo,
      mic: mic,
      menu: menu,
      search: search,
    },
  };
  

 
  const darkMode = useSelector((state: RootState) => state.darkMode.darkMode);

  const currentImages = darkMode ? images.darkMode : images.lightMode;

  const handleDarkModeToggle = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  return (  <>
  <HeadBar>

    <Div className='buttonContainer containerOption'>
      {isMobile && <HeaderButton buttonClass="homeButton" src={currentImages.logo} imgClass='homelogo' title="트웰브 홈으로">

  </HeaderButton>}
  {(isLaptop || isDesktop) && (<Div className ='leftContainer containerOption'> 
   <HeaderButton buttonClass='hamburgerButton arrayOption'  imgClass="hamburger" src={currentImages.menu} title="상세 메뉴"  onClick={handleToggle}
>

</HeaderButton> <HeaderButton buttonClass="homeButton" imgClass='homelogo' src={currentImages.logo} title="트웰브 홈으로">

</HeaderButton> </Div>)}
  
  






  {isMobile &&  <Div className='containerOption'><HeaderButton buttonClass="searchButton" imgClass='mobileImg'  src={currentImages.search} title="검색버튼"> </HeaderButton> <HeaderButton buttonClass="loginButton" src={currentImages.login} imgClass='mobileImg' title="사용자 ">
  </HeaderButton> <HeaderButton buttonClass='darkmodeButton ' src={currentImages.darkModeButton} title='다크모드' imgClass='darkMode' onClick={handleDarkModeToggle}></HeaderButton></Div>}

  {(isLaptop || isDesktop) && ( <Div className='searchWrapper containerOption'>
    <Div className='searchContainer containerOption'><form id="form" name="form" action="" method="get">
            <div className="search-wrapper">
                <fieldset className="search">
                    <input type="text" className="searchTxt" name="searchTxt" title="영상검색" placeholder="검색"/>
                </fieldset>
            </div>
</form>
<HeaderButton buttonClass='searchButton searchOption' src={search} title='영상검색' ></HeaderButton>

      </Div> <HeaderButton buttonClass='micButton' src={currentImages.mic} title='음성검색' ></HeaderButton>
  </Div>)}
  







  {(isLaptop || isDesktop) && (<Div className='rightContainer containerOption'>
    <HeaderButton buttonClass="loginButton arrayOption roundedOption" src={currentImages.login} imgClass='loginImg' title="사용자"><Div className='login containerOption'><span className='loginText'>로그인</span> </Div>
   
    
  </HeaderButton><HeaderButton buttonClass='darkmodeButton ' src={currentImages.darkModeButton} title='다크모드' imgClass='darkMode' onClick={handleDarkModeToggle}></HeaderButton>
  </Div>)}
  




    </Div>
  </HeadBar>
  
  </> 
  );
}

export default Header;


const HeadBar = styled.header `

background-color: ${(props) => props.theme.bgColor};


position: fixed;
width: 100%;
height: 3rem;
box-shadow: 1px 1px 4px 0px #D4D4D4;


`;


const Div = styled.div `
&.containerOption {
  display: flex;
  align-items: center;
  flex-direction: row;

}
&.leftContainer {

  justify-content: space-between;
    vertical-align: middle;


}
&.buttonContainer {
  
  justify-content: space-between;
  
}
&.searchContainer {
  
  justify-content: center;
  right: 0;
  input {
    box-sizing: border-box;
    border: 0.05rem solid var(--button-border-color);
    border-radius: 20px 0 0 20px;
    padding: 8px;
    height: 35px;
    
    @media ${(props) => props.theme.tablet}{
      width: 350px;
    }
    @media ${(props) => props.theme.laptop}{
      width: 500px;

    }
    
}

}
    

&.searchWrapper {

  justify-content: center;
  min-width: 60%;
  
  
}
&.loginText {
  


}
&.login {

  justify-content: center;
color: var(--darkmode-color);


}

`;

