import React, { ReactElement, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from "styled-components";
import menu from '../assets/common-menu.svg';
import shorts from '../assets/common-shorts.svg';
import subscribe from '../assets/common-subscribe.svg';
import playlist from '../assets/common-playlist.svg';
import history from '../assets/common-history.svg';
import rank from '../assets/common-rank.svg';
import shopping from '../assets/common-shopping.svg';
import music from '../assets/common-music.svg';
import movie from '../assets/common-movie.svg';
import live from '../assets/common-live.svg';
import game from '../assets/common-game.svg';
import sports from '../assets/common-sports.svg';
import educate from '../assets/common-educate.svg';
import podcast from '../assets/common-podcast.svg';
import mainlogo from '../assets/common-logo.svg';

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
      {toggleMenu && <Backdrop onClick={handleToggle}/>}
      <VisibleMenu isActive={toggleMenu}>
        <Div>
          <Button className='activeTotalLogo'>
            <img src={menu} alt="메뉴" className="menu" onClick={handleToggle} /> 
          </Button>
          <Button className='activeTotalLogo'>
            <img src={mainlogo} alt="트웰리브" className="manilogo" onClick={handleToggle} />  
          </Button>
        </Div>
        <Ul>
          {menuItems.map((item) => (
            <Li key={item.name}>
              <Button
                className={`${item.name}Button ${activeButton === item.name ? 'active' : ''}`}
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

const Div = styled.div`
  padding-left: 0.75rem;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  cursor: pointer;
  &.activeTotalLogo {
    display: flex;
    flex-direction: row;
  }
`;

const Button = styled.button`
  width: 100%;
  border-style: none;
  box-sizing: border-box;
  height: 1.5rem;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  transition: background-color 0.3s ease;
  padding-top: 20px; 
  padding-bottom: 20px; 
  align-items: center;
  
  &:hover {
    background-color: rgba(4, 90, 220, 0.5); 
    color: black;
    border-radius: 8px;
  }

  &.activeTotalLogo:hover {
    background-color: white;
  }
  &.subscribeButton {
    border-bottom: 1px solid #D4D4D4;
  }
  &.historyButton {
    border-bottom: 1px solid #D4D4D4;
  }
  
  &.active {
    background-color: #045adc;
    color: black;
    border-radius: 8px;
  }
`;

const Ul = styled.ul` 
  display: flex;
  flex-direction: column;
  padding-left: 0.75rem;
`;

const Li = styled.li`
  padding-top: 5px;
  padding-bottom: 5px;
  vertical-align: middle;
  align-items: center;
  text-align: center;
`;

const Lable = styled.p`
  margin-top: 5px; 
  text-align: center;
  padding-left: 10px;
`;

const VisibleMenu = styled.div<VisibleMenuProps>`
  width: 250px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: ${({ isActive }) => (isActive ? '0' : '-250px')}; 
  transition: left 0.3s ease-in-out;
  background-color: #fff; 
  backdrop-filter: blur(${({ isActive }) => (isActive ? '5px' : '0')});
  z-index: 999; 
`;

const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7); 
  z-index: 998; 
`;
