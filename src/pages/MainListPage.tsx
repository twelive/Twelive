import NavBar from '../layouts/NavBar';
import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';

interface ListItem {
  title: string;
  channelTitle: string;
  publishedAt: string;
  url: string;
}

function MainListPage({ title, channelTitle, publishedAt, url }: ListItem) {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/videos/popular.json');
        const list = await response.json();
        setData(list);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {data &&
        data.items.map((item: any, index: number) => (
          <MainBox key={index}>
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
          </MainBox>
        ))}
      <NavBar />
    </>
  );
}

export default MainListPage;

const MainBox = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 20px;
`;

const MainImg = styled.img`
  width: 100%;
  height: 90%;
`;

const SubBox = styled.div`
  width: 100%;
  margin-left: 12px;
  margin-top: 10px;
  display: flex;
  gap: 12px;
`;

const InfoBox = styled.div`
  width: 100%;
  height: 100%;
`;

const TitleTxt = styled.p`
  color: black;
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
  color: black;
  opacity: 70%;
  font-size: 14px;
`;
