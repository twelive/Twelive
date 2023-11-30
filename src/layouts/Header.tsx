import React, { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';

import Search from '@components/Search';
import DarkMode from '@hooks/DarkMode';
import HeaderButton from '@components/HeaderButton';
import HeaderBackButton from '@/hooks/HeaderBackButton';
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

function Header(): ReactElement {
  const dispatch = useDispatch();
  const { toggleMenu } = useSelector((state: RootState) => state.toggleMenu);
  const { inputValue } = useSelector((state: RootState) => state.inputValue);
  // const { searchValue } = useSelector((state: RootState) => state.searchValue);

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

  const handleToggle = () => {
    dispatch({ type: 'TOGGLE_CLICK', value: toggleMenu });
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'INPUT_TOGGLE', value: true });
    dispatch({ type: 'SEARCH_INPUT', value: e.target.value });
    dispatch({ type: 'SEARCHHISORY_UPDATE', value: e.target.value });

    if (!e.target.value) {
      e.target.value = '';
    }
  };

  return (
    <div>
      {isMobile && (
        <HeadBar>
          <HeaderLayout>
            {pathname === '/search' ? (
              <SearchMobileContainer>
                <HeaderBackButton src={currentImages.back} />
                <SearchContainer $justifyCenter>
                  <form
                    id="form"
                    name="form"
                    action="/videos/popular.json"
                    method="GET"
                  >
                    <fieldset className="search">
                      <input
                        type="text"
                        className="searchTxt"
                        name="searchTxt"
                        title="영상검색"
                        placeholder="검색"
                        autoComplete="off"
                        onChange={handleSearch}
                      />
                    </fieldset>
                  </form>
                  <HeaderButton
                    buttonClass="searchButton searchOption"
                    src={search}
                    title="영상검색"
                    type="submit"
                  ></HeaderButton>
                </SearchContainer>
                <DarkMode src={currentImages.darkModeButton} />
              </SearchMobileContainer>
            ) : (
              <>
                <HomeLogo src={currentImages.logo} />
                <Layout>
                  <SearchButton src={currentImages.search} isLink={true} />
                  <HeaderButton
                    buttonClass="loginButton"
                    src={currentImages.login}
                    imgClass="mobileImg"
                    title="사용자 "
                  ></HeaderButton>
                  <DarkMode src={currentImages.darkModeButton} />
                </Layout>
              </>
            )}
          </HeaderLayout>
        </HeadBar>
      )}
      {(isLaptop || isDesktop) && (
        <HeadBar>
          <HeaderLayout>
            <>
              {/* 메뉴바, 홈 */}
              <LeftContainer>
                <HeaderButton
                  buttonClass="hamburgerButton arrayOption"
                  imgClass="hamburger"
                  src={currentImages.menu}
                  title="상세 메뉴"
                  onClick={handleToggle}
                ></HeaderButton>
                <HomeLogo src={currentImages.logo} />
              </LeftContainer>
              {/* 검색영역 */}
              <SearchBox
                // ref={outside}
                // onClick={(e) => {
                //   if (e.target == outside.current) setIsInput(false);
                // }}
                $justifyCenter
              >
                <SearchContainer $justifyCenter>
                  <form
                    id="form"
                    name="form"
                    action="/videos/popular.json"
                    method="GET"
                  >
                    <fieldset className="search">
                      <input
                        type="text"
                        className="searchTxt"
                        name="searchTxt"
                        title="영상검색"
                        placeholder="검색"
                        autoComplete="off"
                        onChange={handleSearch}
                      />
                    </fieldset>
                  </form>
                  <HeaderButton
                    buttonClass="searchButton searchOption"
                    src={search}
                    title="영상검색"
                    type="submit"
                  ></HeaderButton>
                </SearchContainer>
                <HeaderButton
                  buttonClass="micButton"
                  src={currentImages.mic}
                  title="음성검색"
                ></HeaderButton>
              </SearchBox>
              {inputValue && <Search />}
              {/* 사용자 영역, 다크모드 */}
              <Layout>
                <HeaderButton
                  buttonClass="loginButton arrayOption roundedOption"
                  src={currentImages.login}
                  imgClass="loginImg"
                  title="사용자"
                >
                  <LoginBox $justifyCenter>로그인</LoginBox>
                </HeaderButton>
                <DarkMode src={currentImages.darkModeButton} />
              </Layout>
            </>
          </HeaderLayout>
        </HeadBar>
      )}
    </div>
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

const Layout = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderLayout = styled(Layout)<{ $justifyCenter?: boolean }>`
  justify-content: ${(props) =>
    props.$justifyCenter ? 'center' : 'space-between'};
`;

const SearchMobileContainer = styled(HeaderLayout)`
  width: 100%;
  padding-top: 0.25rem;
`;

const LeftContainer = styled(HeaderLayout)`
  vertical-align: middle;
`;

const SearchBox = styled(HeaderLayout)`
  min-width: 60%;
`;

const SearchContainer = styled(HeaderLayout)`
  right: 0;

  input {
    box-sizing: border-box;
    height: 2.1875rem;
    padding: 0.5rem;
    border: 0.05rem solid var(--button-border-color);
    border-radius: 1.25rem 0 0 1.25rem;

    @media ${(props) => props.theme.tablet} {
      width: 21.875rem;
    }
    @media ${(props) => props.theme.laptop} {
      width: 31.25rem;
    }
  }
`;

const LoginBox = styled(HeaderLayout)`
  color: var(--darkmode-color);
`;
