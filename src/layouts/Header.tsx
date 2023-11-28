import React, { ReactElement, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import HeaderButton from '@components/HeaderButton';
import HomeLogo from '@hooks/HomeLogo';
import SearchButton from '@/hooks/SearchButton';

import mainlogo from '@assets/common-logo.svg';
import whitemainlogo from '@assets/common-whitemainlogo.svg';
import arrowLeft from '@assets/common-arrow-left.svg';
import whitearrowLeft from '@assets/common-whitearrow-left.svg';
import search from '@assets/common-search.svg';
import whitesearch from '@assets/common-whitesearch.svg';
import login from '@assets/common-login.svg';
import whitelogin from '@assets/common-whitelogin.svg';
import menu from '@assets/common-menu.svg';
import whitemenu from '@assets/common-whitemenu.svg';
import mic from '@assets/common-mic.svg';
import whitemic from '@assets/common-whitemic.svg';
import blacksun from '@assets/common-blacksun.svg';
import whitemoon from '@assets/common-whitemoon.svg';
import DarkMode from '@hooks/DarkMode';
import HeaderBackButton from '@/hooks/HeaderBackButton';

function Header(): ReactElement {
  const dispatch = useDispatch();
  const { toggleMenu } = useSelector((state: RootState) => state.toggleMenu);
  const { searchValue } = useSelector((state: RootState) => state.searchValue);

  const location = useLocation();
  const pathname = location.pathname;

  const isMobile = useMediaQuery({
    query: '(min-width : 20rem) and (max-width : 47.9375rem)',
  });
  const isLaptop = useMediaQuery({
    query: '(min-width : 48rem) and (max-width : 63.125rem)',
  });
  const isDesktop = useMediaQuery({
    query: '(min-width : 63.1875rem) and (max-width : 120rem)',
  });

  const handleToggle = () => {
    dispatch({ type: 'TOGGLE_CLICK', value: toggleMenu });
  };

  const images = {
    darkMode: {
      login: whitelogin,
      darkModeButton: whitemoon,
      logo: whitemainlogo,
      back: whitearrowLeft,
      mic: whitemic,
      menu: whitemenu,
      search: whitesearch,
    },
    lightMode: {
      login: login,
      darkModeButton: blacksun,
      logo: mainlogo,
      back: arrowLeft,
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

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    dispatch({ type: 'SEARCH_INPUT', value: e.target.value });
    console.log(searchValue);
  };

  return (
    <HeadBar>
      <Div className="buttonContainer containerOption">
        {isMobile && (
          <>
            {pathname === '/search' ? (
              <>
                <HeaderBackButton src={currentImages.back} />
                <Div className="searchMobileContainer containerOption">
                  <form
                    id="form"
                    name="form"
                    action="/videos/popular.json"
                    method="GET"
                  >
                    <div className="search-wrapper">
                      <fieldset className="search">
                        <input
                          type="text"
                          className="searchTxt"
                          name="searchTxt"
                          title="영상검색"
                          placeholder="검색"
                          onChange={handleSearch}
                        />
                      </fieldset>
                    </div>
                  </form>
                  <HeaderButton
                    buttonClass="searchButton searchOption"
                    src={search}
                    title="영상검색"
                    type="submit"
                  ></HeaderButton>
                </Div>
                <DarkMode
                  src={currentImages.darkModeButton}
                  handleEvent={handleDarkModeToggle}
                />
              </>
            ) : (
              <>
                <HomeLogo src={currentImages.logo} />
                <Div className="containerOption">
                  <SearchButton src={currentImages.search} isLink={true} />
                  <HeaderButton
                    buttonClass="loginButton"
                    src={currentImages.login}
                    imgClass="mobileImg"
                    title="사용자 "
                  ></HeaderButton>
                  <DarkMode
                    src={currentImages.darkModeButton}
                    handleEvent={handleDarkModeToggle}
                  />
                </Div>
              </>
            )}
          </>
        )}

        {(isLaptop || isDesktop) && (
          <>
            {/* 메뉴바, 홈 */}
            <Div className="leftContainer containerOption">
              <HeaderButton
                buttonClass="hamburgerButton arrayOption"
                imgClass="hamburger"
                src={currentImages.menu}
                title="상세 메뉴"
                onClick={handleToggle}
              ></HeaderButton>
              <HomeLogo src={currentImages.logo} />
            </Div>
            {/* 검색영역 */}
            <Div className="searchWrapper containerOption">
              <Div className="searchContainer containerOption">
                <form
                  id="form"
                  name="form"
                  action="/videos/popular.json"
                  method="GET"
                >
                  <div className="search-wrapper">
                    <fieldset className="search">
                      <input
                        type="text"
                        className="searchTxt"
                        name="searchTxt"
                        title="영상검색"
                        placeholder="검색"
                      />
                    </fieldset>
                  </div>
                </form>
                <HeaderButton
                  buttonClass="searchButton searchOption"
                  src={search}
                  title="영상검색"
                  type="submit"
                ></HeaderButton>
              </Div>
              <HeaderButton
                buttonClass="micButton"
                src={currentImages.mic}
                title="음성검색"
              ></HeaderButton>
            </Div>
            {/* 사용자 영역, 다크모드 */}
            <Div className="rightContainer containerOption">
              <HeaderButton
                buttonClass="loginButton arrayOption roundedOption"
                src={currentImages.login}
                imgClass="loginImg"
                title="사용자"
              >
                <Div className="login containerOption">
                  <span className="loginText">로그인</span>
                </Div>
              </HeaderButton>
              <DarkMode
                src={currentImages.darkModeButton}
                handleEvent={handleDarkModeToggle}
              />
            </Div>
          </>
        )}
      </Div>
    </HeadBar>
  );
}

export default Header;

const HeadBar = styled.header`
  background-color: ${(props) => props.theme.bgColor};
  position: fixed;
  width: 100%;
  height: 3rem;
  box-shadow: 0.0625rem 0.0625rem 0.25rem 0 #d4d4d4;
  z-index: 1;
`;

const Div = styled.div`
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
  &.searchMobileContainer {
    justify-content: center;
    right: 0;
    input {
      box-sizing: border-box;
      height: 2.1875rem;
      border: 0.05rem solid var(--button-border-color);
      border-radius: 1.25rem 0 0 1.25rem;
      padding: 0.5rem;
    }
  }
  &.searchContainer {
    justify-content: center;
    right: 0;
    input {
      box-sizing: border-box;
      border: 0.05rem solid var(--button-border-color);
      border-radius: 1.25rem 0 0 1.25rem;
      padding: 0.5rem;
      height: 2.1875rem;

      @media ${(props) => props.theme.tablet} {
        width: 21.875rem;
      }
      @media ${(props) => props.theme.laptop} {
        width: 31.25rem;
      }
    }
  }

  &.searchWrapper {
    justify-content: center;
    min-width: 60%;
  }
  &.login {
    justify-content: center;
    color: var(--darkmode-color);
  }
`;
