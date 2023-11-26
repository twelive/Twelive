import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import NavButton from '../components/NavButton';
import commonHome from '../assets/common-home.svg';
import commonwhiteHome from '../assets/common-whitehome.svg';
import commonHomeClick from '../assets/common-home-click.svg';
import commonShorts from '../assets/common-shorts.svg';
import commonwhiteShorts from '../assets/common-whiteshorts.svg';
import commonShortsClick from '../assets/common-shorts-click.svg';
import commonSubscribe from '../assets/common-subscribe.svg';
import commonwhiteSubscribe from '../assets/common-whitesubscribe.svg';
import commonSubscribeClick from '../assets/common-subscribe-click.svg';
import commonPlaylist from '../assets/common-playlist.svg';
import commonwhiteMe from '../assets/common-whiteme.svg';
import commonMeClick from '../assets/common-me-click.svg';

function NavBar() {
  const { navMenu } = useSelector((state: RootState) => state.navMenu);
  const darkMode = useSelector((state: RootState) => state.darkMode.darkMode); // 다크모드 상태를 가져옵니다.

  const menuItems = [
    { 
      title: '홈', 
      normal: darkMode ? commonwhiteHome : commonHome, 
      clicked: commonHomeClick 
    },
    { 
      title: 'Shorts', 
      normal: darkMode ? commonwhiteShorts : commonShorts, 
      clicked: commonShortsClick 
    },
    { 
      title: '구독', 
      normal: darkMode ? commonwhiteSubscribe : commonSubscribe, 
      clicked: commonSubscribeClick 
    },
    { 
      title: '보관함', 
      normal: darkMode ? commonwhiteMe : commonPlaylist, 
      clicked: commonMeClick 
    },
  ];

  return (
    <NavBox>
      {menuItems.map(({ title, normal, clicked }) => (
        <NavButton
          key={title}
          src={navMenu === title ? clicked : normal}
          title={title}
        />
      ))}
    </NavBox>
  );
}

export default NavBar;

const NavBox = styled.nav`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  height: 3.0625rem;
  position: fixed;
  bottom: 0rem;
  background-color: ${(props) => props.theme.bgColor};


  @media ${(props) => props.theme.laptop} {
    display: none;
  }
`;
