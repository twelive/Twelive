import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

function DetailPage() {
  const { channelId } = useSelector((state: RootState) => state.channelId);
  const [detailData, useDetailData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `/videos/searchByChannels/search-by-channel-id-${channelId}.json`
        );
        const data = await response.json();
        useDetailData(data.items);
        console.log(data.items);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {detailData && (
        <MainBox key={channelId}>
          {detailData &&
            detailData.map((item: Item) => (
              <SubBox key={item.id.videoId}>
                <SubImgBox>
                  <SubImg
                    src={item.snippet.thumbnails.high.url}
                    alt={item.snippet.title}
                  />
                </SubImgBox>
                <SubTextBox>
                  <SubTitleText>{item.snippet.title} </SubTitleText>
                  <SubTimeBox>
                    <SubChannelTitle>
                      {item.snippet.channelTitle}
                    </SubChannelTitle>
                    <SubTime>{item.snippet.publishedAt}</SubTime>
                  </SubTimeBox>
                </SubTextBox>
              </SubBox>
            ))}
        </MainBox>
      )}
    </>
  );
}
export default DetailPage;

const MainBox = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const MainImgBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainImg = styled.img`
  width: 100%;
  height: 90%;
  border-radius: 20px;
`;

const MainTextBox = styled.div`
  width: 100%;
  margin-left: 20px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const MainTitleText = styled.p`
  color: black;
  font-size: 25px;
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

const MainChannelTitle = styled.p`
  color: black;
  opacity: 70%;
  font-size: 20px;
`;

const MainCommentBox = styled.div`
  width: 100%;
  // 추후 여기다가 스타일링해서 작성하면 될듯합니다.
`;

const MainCommentText = styled.p`
  font-size: 13px;
  // 추후 여기다가 스타일링해서 작성하면 될듯합니다.
`;

const SubBox = styled.div`
  display: flex;
  margin-top: 20px;
  margin-left: 20px;
`;

const SubImgBox = styled.div`
  padding-bottom: 10px;
`;

const SubImg = styled.img`
  object-fit: cover;
  width: 200%;
  border-radius: 20px;
`;

const SubTextBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const SubChannelTitle = styled.p``;

const SubTimeBox = styled.div`
  display: flex;
`;

const SubTitleText = styled.p``;

const SubTime = styled.p``;
