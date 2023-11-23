import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function DetailPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data } = useSelector((state: RootState) => state.data);
  const { channelId } = useSelector((state: RootState) => state.channelId);
  const [detailData, useDetailData] = useState([]);

  const clickLink = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget.parentElement) {
      const clickedIndex = Array.from(
        e.currentTarget.parentElement.children
      ).indexOf(e.currentTarget);

      if (data.items && data.items[clickedIndex]) {
        const clickedItem = data.items[clickedIndex];
        const currentChannelId = clickedItem.snippet.channelId;
        dispatch({ type: 'updateChannelId', update: currentChannelId });
        navigate(`/detail/${currentChannelId}`);
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `/videos/searchByChannels/search-by-channel-id-${channelId}.json`
        );
        const data = await response.json();
        useDetailData(data.items);
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
                <SubImgBox onClick={clickLink}>
                  <SubImg
                    src={item.snippet.thumbnails.high.url}
                    alt={item.snippet.title}
                  />
                </SubImgBox>
                <SubTextBox onClick={clickLink}>
                  <SubTitleText>{item.snippet.title} </SubTitleText>
                  <SubTimeBox>
                    <p>{item.snippet.channelTitle}</p>
                    <p>{item.snippet.publishedAt.slice(0, 10)}</p>
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
  margin: 0 0 4.3125rem 1.25rem;
`;

/* const MainImgBox = styled.div`
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
`; */

const SubBox = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 20px;
`;

const SubImgBox = styled.div`
  cursor: pointer;
`;

const SubImg = styled.img`
  width: 10.5rem;
  height: 5.875rem;
  object-fit: cover;
  border-radius: 0.625rem;
`;

const SubTextBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  gap: 0.5rem;
  opacity: 70%;
  cursor: pointer;
`;

const SubTitleText = styled.p`
  font-weight: 600;
`;

const SubTimeBox = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.875rem;
`;
