import React, { ReactElement, useState } from 'react';
import styled from "styled-components";
import menu from '../assets/common-menu.svg';
import home from '../assets/common-home.svg';
import shorts from '../assets/common-shorts.svg';
import subscribe from '../assets/common-subscribe.svg';
import me from '../assets/common-me.svg';
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

interface Menu {
  Button?: string;
  className: string;
  alt: string;
}

interface VisibleMenuProps {
    isActive: boolean;
  }
  
  function MenuBar(): ReactElement {
    const [isActive, setIsActive] = useState(false);
  
    
    const toggleMenu = () => {
      setIsActive(!isActive);
    };

    
  return (
    <>
      <MenuBarContainer>
        <Div className='buttonContainer'>
            <img src={menu} alt="메뉴 버튼" className="menu" onClick={toggleMenu}/>
        </Div>
      </MenuBarContainer>

      {isActive && (
        <Backdrop />
      )}
        <VisibleMenu isActive={isActive}>
          {
            <>
            <Div className='activeTotalLogo'>
              <Button>
                <img src={menu} alt="메뉴" className="menu" onClick={toggleMenu}/> 
                </Button>
                <Button>
                <img src={mainlogo} alt="트웰리브" className="manilogo" onClick={toggleMenu}/>  
              </Button>
            </Div>
          
          
          <Ul>

            <Li>
            <Button className="homeButton">
            <img src={home} alt="홈" className="home" /> 
            <Lable>Home</Lable>
            </Button>
            </Li>

            <Li>
            <Button className="shortsButton">
            <img src={shorts} alt="쇼츠" className="shorts" />
            <Lable>Shorts</Lable>
            </Button>
            </Li>

            <Li>
            <Button className="subscribeButton">
            <img src={subscribe} alt="구독" className="subscribe" />
            <Lable>subscribe</Lable>
            </Button>
            </Li>

            <Li>
            <Button className="meButton">
            <img src={me} alt="나" className="me" />
            <Lable>me</Lable>
            </Button>
            </Li>
            
            <Li>
            <Button className="historyButton">
            <img src={history} alt="시청기록" className="history" />
            <Lable>history</Lable>
            </Button>
            </Li>

            <p>
              탐색
            </p>

            <Li>
            <Button className="rankButton">
            <img src={rank} alt="인기 급상승" className="rank" />
            <Lable>rank</Lable>
            </Button>
            </Li>

            <Li>
            <Button className="shoppingButton">
            <img src={shopping} alt="쇼핑" className="shopping" />
            <Lable>shopping</Lable>
            </Button>
            </Li>
            
            <Li>
            <Button className="musicButton">
            <img src={music} alt="음악" className="music" />
            <Lable>music</Lable>
            </Button>
            </Li>

            <Li>
            <Button className="movieButton">
            <img src={movie} alt="영화" className="movie" />
            <Lable>movie</Lable>
            </Button>
            </Li>

            <Li>
            <Button className="liveButton">
            <img src={live} alt="실시간" className="live" />
            <Lable>live</Lable>
            </Button>
            </Li>

            <Li>
            <Button className="sportsButton">
            <img src={sports} alt="스포츠" className="sports" />
            <Lable>sports</Lable>
            </Button>
            </Li>

            <Li>
            <Button className="sportsButton">
            <img src={game} alt="게임" className="game" />
            <Lable>game</Lable>
            </Button>
            </Li>
            
            <Li>
            <Button className="educateButton">
            <img src={educate} alt="학습" className="educate" />
            <Lable>educate</Lable>
            </Button>
            </Li>

            <Li>
            <Button className="podcastButton">
            <img src={podcast} alt="팟캐스트" className="podcast" />
            <Lable>podcast</Lable>
            </Button>
            </Li>

          </Ul>
            </>
          }
        </VisibleMenu>
    </>
  );
}

export default MenuBar;

const MenuBarContainer = styled.div`
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  height: 2rem;
  
  `;

const Div = styled.div`
    padding-left: 0.75rem;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    cursor: pointer;
    &.activeTotalLogo{
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
  &.subscribeButton{
    border-bottom: 1px solid #D4D4D4;
  }
  &.historyButton{
    border-bottom: 1px solid #D4D4D4;
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
    vertical-align:middle;
    align-items: center;
    text-align: center;
    &.activeMain {
      display: flex;
      flex-direction: row;
    }
    
    `;

const Lable = styled.p`
 margin-top: 5px; 
 text-align: center;
 padding-left:10px;
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
  overflow-y: scroll;
  `;


const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3); 
  z-index: 998; 
`;