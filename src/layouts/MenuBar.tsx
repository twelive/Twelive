import React, { ReactElement, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import menu from '@assets/common-menu.svg';
import whitemenu from '@assets/common-whitemenu.svg';
import shorts from '@assets/common-shorts.svg';
import whiteshorts from '@assets/common-whiteshorts.svg';
import subscribe from '@assets/common-subscribe.svg';
import whitesubscribe from '@assets/common-whitesubscribe.svg';
import playlist from '@assets/common-playlist.svg';
import whiteplaylist from '@assets/common-whiteplaylist.svg';

import rank from '@assets/common-rank.svg';
import whiterank from '@assets/common-whiterank.svg';
import shopping from '@assets/common-shopping.svg';
import whiteshopping from '@assets/common-whiteshopping.svg';
import music from '@assets/common-music.svg';
import whitemusic from '@assets/common-whitemusic.svg';
import history from '@assets/common-history.svg';
import whitehistory from '@assets/common-whitehistory.svg';
import movie from '@assets/common-movie.svg';
import whitemovie from '@assets/common-whitemovie.svg';
import live from '@assets/common-live.svg';
import whitelive from '@assets/common-whitelive.svg';
import game from '@assets/common-game.svg';
import whitegame from '@assets/common-whitegame.svg';
import sports from '@assets/common-sports.svg';
import whitesports from '@assets/common-whitesports.svg';
import educate from '@assets/common-educate.svg';
import whiteeducate from '@assets/common-whiteeducate.svg';
import podcast from '@assets/common-podcast.svg';
import whitepodcast from '@assets/common-whitepodcast.svg';
import mainlogo from '@assets/common-logo.svg';
import whitemainlogo from '@assets/common-whitemainlogo.svg';

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
  const images = {
    darkMode: {
      menu: whitemenu,
      shorts: whiteshorts,
      subscribe: whitesubscribe,
      playlist: whiteplaylist,
      history: whitehistory,
      rank: whiterank,
      shopping: whiteshopping,
      music: whiteshopping,
      movie: whitemovie,
      live: whitelive,
      game: whitegame,
      sports: whitesports,
      educate: whiteeducate,
      podcast: whitepodcast,
      mainlogo: whitemainlogo,

        },
    lightMode: {
      menu: menu,
      shorts: shorts,
      subscribe: subscribe,
      playlist: playlist,
      history: history,
      rank: rank,
      shopping: shopping,
      music: shopping,
      movie: movie,
      live: live,
      game: game,
      sports: sports,
      educate: educate,
      podcast: podcast,
      mainlogo: mainlogo,
    },
  };
  const darkMode = useSelector((state: RootState) => state.darkMode.darkMode);

  const currentImages = darkMode ? images.darkMode : images.lightMode;

  const menuItems = [
    { name: 'shorts', icon: currentImages.shorts, label: 'Shorts' },
    { name: 'subscribe', icon: currentImages.subscribe, label: 'Subscribe' },
    { name: 'playlist', icon: currentImages.playlist, label: 'Playlist' },
    { name: 'history', icon: currentImages.history, label: 'History' },
    { name: 'rank', icon: currentImages.rank, label: 'Rank' },
    { name: 'shopping', icon: currentImages.shopping, label: 'Shopping' },
    { name: 'music', icon: currentImages.music, label: 'Music' },
    { name: 'movie', icon: currentImages.movie, label: 'Movie' },
    { name: 'live', icon: currentImages.live, label: 'Live' },
    { name: 'game', icon: currentImages.game, label: 'Game' },
    { name: 'sports', icon: currentImages.sports, label: 'Sports' },
    { name: 'educate', icon: currentImages.educate, label: 'Educate' },
    { name: 'podcast', icon: currentImages.podcast, label: 'Podcast' },
  ];



  return (
    <>
      {toggleMenu && <Backdrop onClick={handleToggle} />}
      <VisibleMenu isActive={toggleMenu}>
        <Div>
          <button>
            <img src={currentImages.menu} alt="메뉴" onClick={handleToggle} />
          </button>
          <button>
            <HomeImg src={currentImages.mainlogo} alt="트웰리브" onClick={handleToggle} />
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
  background-color: var(--darkmode-bgColor);
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
    background-color: ${(props) => props.theme.hoverColor};
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
  color: var(--darkmode-color);
`;
