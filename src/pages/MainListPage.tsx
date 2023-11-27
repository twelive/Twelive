import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

function MainListPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data } = useSelector((state: RootState) => state.data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/videos/popular.json');
        const list = await response.json();
        dispatch({ type: 'DATA_FETCH', payload: list });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const MainClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget.parentElement) {
      const clickedIndex = Array.from(
        e.currentTarget.parentElement.children
      ).indexOf(e.currentTarget);

      if (data.items && data.items[clickedIndex]) {
        const clickedItem = data.items[clickedIndex];
        const currentChannelId = clickedItem.snippet.channelId;
        dispatch({ type: 'CHANNELID_UPDATE', update: currentChannelId });
        navigate(`/detail/${currentChannelId}`);
      }
    }
  };

  return (
    <Main>
      {data.items &&
        data.items.map((item: VideoItem, index: number) => (
          <motion.div
            whileHover={{
              backgroundColor: 'var(--darkmode-bgColor)',
              scale: 1.1,
              color: 'var(--darkmode-color)',
            }}
            key={index}
            style={{
              backgroundColor: 'transparent',
              transition: 'background-color 0.2s ease-in-out',
              color: 'var(--darkmode-color)',
            }}
            onClick={MainClick}
          >
            <MainBox key={index} onClick={MainClick}>
              <ImgBox>
                <MainImg
                  src={item.snippet.thumbnails.maxres.url}
                  alt={item.snippet.title}
                />
                <SubBox>
                  <InfoBox>
                    <TitleTxt>{item.snippet.title}</TitleTxt>
                    <SubTxt>
                      {item.snippet.channelTitle}﹒
                      {item.snippet.publishedAt.slice(0, 10)}
                    </SubTxt>
                  </InfoBox>
                </SubBox>
              </ImgBox>
            </MainBox>
          </motion.div>
        ))}
    </Main>
  );
}

export default MainListPage;

const Main = styled.div`
  width: 100%;
  margin-left: 12px;
  padding-top: 20px;
  gap: 20px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);

  @media ${(props) => props.theme.tablet} {
    max-width: 1010px;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  @media ${(props) => props.theme.laptop} {
    max-width: 1920px;
    grid-template-columns: repeat(4, 1fr);
  }
`;

const MainBox = styled.div`
  width: 100%;
  height: 100%;
  margin-left: 12px;
  cursor: pointer;
`;

const MainImg = styled.img`
  width: 90%;
  height: 90%;
  border-radius: 20px;
`;

const ImgBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const SubBox = styled.div`
  width: 100%;
  margin-left: 12px;
  margin-top: 10px;
  display: flex;
  gap: 12px;
`;

const InfoBox = styled.div`
  width: 90%;
  height: 100%;
`;

const TitleTxt = styled.p`
  color: var(--darkmode-color);
  font-size: 18px;
  font-weight: 500;
  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: keep-all;
  margin-bottom: 8px;
`;

const SubTxt = styled.p`
  color: var(--darkmode-color);
  opacity: 70%;
  font-size: 14px;
`;
