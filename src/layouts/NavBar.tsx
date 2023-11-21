import React from 'react';
import styled from 'styled-components';
import NavButton from '../components/NavButton';
import commonHome from '../assets/common-home.svg';
import commonHomeClick from '../assets/common-home-click.svg';
import commonShorts from '../assets/common-shorts.svg';
import commonSubscribe from '../assets/common-subscribe.svg';
import commonMe from '../assets/common-me.svg';

function NavBar() {
  return (
    <NavBox>
      <NavButton src={commonHome} title={'홈'} />
      <NavButton src={commonShorts} title={'Shorts'} />
      <NavButton src={commonSubscribe} title={'구독'} />
      <NavButton src={commonMe} title={'보관함'} />
    </NavBox>
  );
}

export default NavBar;

const NavBox = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 24.375rem;
  height: 3.0625rem;
`;
