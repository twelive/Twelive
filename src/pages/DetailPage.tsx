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
  const { snippet } = data.items.find(
    (i: VideoItem) => channelId === i.snippet.channelId
  );

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
        <Box key={channelId}>
          <MainBox>
            <Video
              controls
              src={snippet.thumbnails.maxres.url}
              poster={snippet.thumbnails.maxres.url}
              title={snippet.title}
            />
            <VideoContent>
              <h2>{snippet.title}</h2>
              <dl>
                <dt>채널명</dt>
                <dd>{snippet.channelTitle}</dd>
              </dl>
              <ContentDetail>
                <dl>
                  <dt>날짜</dt>
                  <dd>{snippet.publishedAt.slice(0, 10)}</dd>
                  <dt>설명</dt>
                  <dd>{snippet.description}</dd>
                </dl>
                {/* <button type="button">더보기</button> */}
              </ContentDetail>
            </VideoContent>
          </MainBox>
          <div>
            {detailData &&
              detailData.map((item: Item) => (
                <SubBox key={item.id.videoId}>
                  <SubImgBox onClick={clickLink}>
                    <img
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
          </div>
        </Box>
      )}
    </>
  );
}
export default DetailPage;

const Box = styled.div`
  margin: 0 var(--primary-margin) 4.3125rem;

  @media ${(props) => props.theme.laptop} {
    display: flex;
    gap: var(--primary-margin);
    margin-bottom: var(--primary-margin);
  }
`;

const MainBox = styled.div`
  @media ${(props) => props.theme.laptop} {
    width: 100%;
  }
`;

const Video = styled.video`
  width: 100%;
  margin-top: var(--primary-margin);
  border-radius: 0.625rem;
`;

const VideoContent = styled.div`
  margin: 0.625rem 0 1.5rem 0;

  h2 {
    margin-bottom: 0.625rem;
    font-size: 1.125rem;
    font-weight: 600;
  }

  dt {
    overflow: hidden;
    position: absolute;
    clip: rect(0 0 0 0); /* IE 6,7 */
    clip: rect(0, 0, 0, 0);
    width: 0.0625rem;
    height: 0.0625rem;
    margin: -0.0625rem;
    border: 0;
    padding: 0;
  }

  dd {
    font-size: 0.875rem;
  }
`;

const ContentDetail = styled.dl`
  margin-top: 0.625rem;
  padding: 0.625rem;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 0.625rem;
  font-size: var(--font-small);
  line-height: var(--primary-margin);

  dd {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
`;

const SubBox = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: var(--primary-margin);
`;

const SubImgBox = styled.div`
  cursor: pointer;

  img {
    width: 10.5rem;
    height: 5.875rem;
    object-fit: cover;
    border-radius: 0.625rem;
  }
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
