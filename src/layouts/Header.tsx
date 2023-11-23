
import React, { ReactElement } from 'react';
import { useMediaQuery } from 'react-responsive';
import styled, { ThemeProvider } from "styled-components";
import mainlogo from '../assets/common-logo.svg';
import search from '../assets/common-search.svg';
import login from '../assets/common-login.svg';
import menu from '../assets/common-menu.svg';
import mic from '../assets/common-mic.svg'
import theme from '../../src/theme';
import HeaderButton from '../components/HeaderButton';









interface Head {
Button?: string;
className: string;
// src: string;
alt: string;

}

function Header(): ReactElement {

  const isMobile = useMediaQuery ({
    query : "(min-width : 20rem) and (max-width : 47.9375rem)"
  })
  const isLaptop = useMediaQuery ({
    query : "(min-width : 48rem) and (max-width : 63.125rem)"
  })
  const isDesktop = useMediaQuery ({
    query : "(min-width : 63.1875rem) and (max-width : 120rem)"
  })

  return (  <>
  
  <HeadBar>

    <Div className='buttonContainer containerOption'>
      {isMobile && <HeaderButton buttonClass="homeButton" src={mainlogo} imgClass='homelogo' title="트웰브 홈으로">

  </HeaderButton>}
  {(isLaptop || isDesktop) && (<Div className ='leftContainer containerOption'>  <HeaderButton buttonClass='hamburgerButton arrayOption'  imgClass="hamburger" src={menu} title="상세 메뉴">

</HeaderButton> <HeaderButton buttonClass="homeButton" imgClass='homelogo' src={mainlogo} title="트웰브 홈으로">

</HeaderButton> </Div>)}
  
  






  {isMobile &&  <div><HeaderButton buttonClass="searchButton" imgClass='mobileImg'  src={search} title="검색버튼"> </HeaderButton> <HeaderButton buttonClass="loginButton" src={login} imgClass='mobileImg' title="사용자 ">
  </HeaderButton></div>}

  {(isLaptop || isDesktop) && ( <Div className='searchWrapper containerOption'>
    <Div className='searchContainer containerOption'><form id="form" name="form" action="" method="get">
            <div className="search-wrapper">
                <fieldset className="search">
                    <input type="text" className="searchTxt" name="searchTxt" title="영상검색" placeholder="검색"/>
                </fieldset>
            </div>
</form>
<HeaderButton buttonClass='searchButton searchOption' src={search} title='영상검색' ></HeaderButton>

      </Div> <HeaderButton buttonClass='micButton' src={mic} title='음성검색' ></HeaderButton>
  </Div>)}
  







  {(isLaptop || isDesktop) && (<div>
    <HeaderButton buttonClass="loginButton arrayOption roundedOption" src={login} imgClass='loginImg' title="사용자"><Div className='login containerOption'><span>로그인</span></Div>
   
    
  </HeaderButton>
  </div>)}
  




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
  min-width: 300px;
  right: 0;
  input {
    box-sizing: border-box;
    border: 0.05rem solid var(--button-border-color);
    border-radius: 20px 0 0 20px;
    padding: 8px;
    height: 35px;
    
    @media ${(props) => props.theme.tablet}{
      width: 300px;
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

&.login {

  justify-content: center;
}

`;

