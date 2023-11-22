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

    <Div className='buttonContainer'>
      {isMobile && <HeaderButton buttonClass="homeButton" src={mainlogo} title="트웰브 홈으로">

  </HeaderButton>}
  {(isLaptop || isDesktop) && (<div className ='leftContainer'>  <HeaderButton buttonClass="hamburger" src={menu} title="상세 메뉴">

</HeaderButton> <HeaderButton buttonClass="homeButton" src={mainlogo} title="트웰브 홈으로">

</HeaderButton> </div>)}
  
  
  
  {isMobile &&  <div><HeaderButton buttonClass="searchButton" src={search} title="검색버튼"> </HeaderButton> <HeaderButton buttonClass="loginButton" src={login} title="사용자 ">
  </HeaderButton></div>}

  {(isLaptop || isDesktop) && ( <div className='searchWrapper'>
    <div className='searchContainer'><form id="form" name="form" action="" method="get">
            <div className="search-wrapper">
                <fieldset className="search">
                    <input type="text" className="searchTxt" name="searchTxt" title="영상검색" placeholder="검색"/>
                </fieldset>
            </div>
</form>
<HeaderButton buttonClass='searchButton' src={search} title='영상검색' ></HeaderButton>

      </div> <HeaderButton buttonClass='searchButton' src={mic} title='음성검색' ></HeaderButton>
  </div>)}
  


  {(isLaptop || isDesktop) && (<div>
    <HeaderButton buttonClass="loginButton" src={login} title="사용자"><span>로그인</span>
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
&.buttonContainer {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  transform: translate(0, 50%);

    

}

&.searchWrapper {
  

}

`;

