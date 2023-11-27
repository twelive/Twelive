import React, { ReactElement, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import menu from '@assets/common-menu.svg';
import shorts from '@assets/common-shorts.svg';
import subscribe from '@assets/common-subscribe.svg';
import playlist from '@assets/common-playlist.svg';
import history from '@assets/common-history.svg';
import rank from '@assets/common-rank.svg';
import shopping from '@assets/common-shopping.svg';
import music from '@assets/common-music.svg';
import movie from '@assets/common-movie.svg';
import live from '@assets/common-live.svg';
import game from '@assets/common-game.svg';
import sports from '@assets/common-sports.svg';
import educate from '@assets/common-educate.svg';
import podcast from '@assets/common-podcast.svg';
import mainlogo from '@assets/common-logo.svg';

interface VisibleMenuProps {
  isActive: boolean;
}

function MenuBar(): ReactElement {
  const dispatch = useDispatch();
  const { toggleMenu } = useSelector((state: RootState) => state.toggleMenu);
  const [activeButton, setActiveButton] = useState('');

  const handleToggle = () => {
    dispatch({ type: 'TOGGLE_CLICK', value: toggleMenu });
  };

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  const menuItems = [
    { name: 'shorts', icon: shorts, label: 'Shorts' },
    { name: 'subscribe', icon: subscribe, label: 'Subscribe' },
    { name: 'playlist', icon: playlist, label: 'Playlist' },
    { name: 'history', icon: history, label: 'History' },
    { name: 'rank', icon: rank, label: 'Rank' },
    { name: 'shopping', icon: shopping, label: 'Shopping' },
    { name: 'music', icon: music, label: 'Music' },
    { name: 'movie', icon: movie, label: 'Movie' },
    { name: 'live', icon: live, label: 'Live' },
    { name: 'game', icon: game, label: 'Game' },
    { name: 'sports', icon: sports, label: 'Sports' },
    { name: 'educate', icon: educate, label: 'Educate' },
    { name: 'podcast', icon: podcast, label: 'Podcast' },
  ];

  return (
    <>
      {toggleMenu && <Backdrop onClick={handleToggle} />}
      <VisibleMenu isActive={toggleMenu}>
        <Div>
          <button>
            <img src={menu} alt="메뉴" onClick={handleToggle} />
          </button>
          <button>
            <HomeImg src={mainlogo} alt="트웰리브" onClick={handleToggle} />
          </button>
        </Div>
        <Ul>
          {menuItems.map((item) => (
            <Li key={item.name}>
              <Button
                className={`${item.name}Button ${
                  activeButton === item.name ? 'active' : ''
                }`}
                onClick={() => handleButtonClick(item.name)}
              >
                <img src={item.icon} alt={item.label} className={item.name} />
                <Lable>{item.label}</Lable>
              </Button>
            </Li>
          ))}
        </Ul>
      </VisibleMenu>
    </>
  );
}

export default MenuBar;

const VisibleMenu = styled.div<VisibleMenuProps>`
  width: 15.625rem;
  height: 100vh;
  position: fixed;
  top: 0;
  left: ${({ isActive }) => (isActive ? '0' : '-250px')};
  transition: left 0.3s ease-in-out;
  background-color: #fff;
  backdrop-filter: blur(${({ isActive }) => (isActive ? '5px' : '0')});
  z-index: 3;
`;

const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 2;
`;

const Div = styled.div`
  display: flex;
  gap: 1rem;
  padding-left: 0.75rem;

  & button {
    display: flex;
    align-items: center;
    height: 1.5rem;
    box-sizing: border-box;
    padding: 1.25rem 0;
    background-color: transparent;
    border-style: none;
    cursor: pointer;

    &:hover {
      background-color: white;
    }
  }
`;

const HomeImg = styled.img`
  height: 2.5rem;
`;

const Button = styled.button`
  display: flex;
  width: 100%;
  height: 1.5rem;
  align-items: center;
  box-sizing: border-box;
  padding: 1.25rem 0;
  border-style: none;
  background-color: transparent;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    width: 95%;
    border-radius: 0.5rem;
    color: black;
    background-color: rgba(4, 90, 220, 0.5);
  }

  &.subscribeButton,
  &.historyButton {
    border-bottom: 1px solid #d4d4d4;
  }

  &.active {
    width: 95%;
    color: black;
    background-color: #045adc;
    border-radius: 0.5rem;
  }
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 0.75rem;
`;

const Li = styled.li`
  align-items: center;
  text-align: center;
  vertical-align: middle;
  padding-top: 0.3125rem;
  padding-bottom: 0.3125rem;
`;

const Lable = styled.p`
  text-align: center;
  margin-top: 0.3125rem;
  padding-left: 0.625rem;
`;
