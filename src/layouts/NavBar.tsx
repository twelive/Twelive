import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import NavButton from '../components/NavButton';
import commonHome from '../assets/common-home.svg';
import commonHomeClick from '../assets/common-home-click.svg';
import commonShorts from '../assets/common-shorts.svg';
import commonSubscribe from '../assets/common-subscribe.svg';
import commonSubscribeClick from '../assets/common-subscribe-click.svg';
import commonPlaylist from '../assets/common-playlist.svg';
import commonMeClick from '../assets/common-me-click.svg';

function NavBar() {
  const { navMenu } = useSelector((state: RootState) => state.navMenu);

  const menuItems = [
    { title: '홈', normal: commonHome, clicked: commonHomeClick },
    { title: 'Shorts', normal: commonShorts, clicked: commonShorts }, // 여기는 clicked 이미지가 없어서 같은 이미지로 대체
    { title: '구독', normal: commonSubscribe, clicked: commonSubscribeClick },
    { title: '보관함', normal: commonPlaylist, clicked: commonMeClick },
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
  background-color: white;

  @media ${(props) => props.theme.laptop} {
    display: none;
  }
`;
