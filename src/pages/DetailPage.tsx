import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import CommentItem from '@/components/CommentItem';
import Spinner from '@/components/Spinner';
import ErrorPage from './ErrorPage';

function DetailPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data } = useSelector((state: RootState) => state.data);
  const { channelId } = useSelector((state: RootState) => state.channelId);
  const [detailData, setDetailData] = useState([]);
  const { snippet } = data.items.find(
    (i: VideoItem) => channelId === i.snippet.channelId
  );
  const [isLoading, setIsLoading] = useState(false);
  const [renderedData, setRenderedData] = useState([]);
  const [itemCount, setItemCount] = useState(10);
  const [isError, setIsError] = useState(false);

  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    const { scrollHeight, scrollTop, clientHeight } = e.currentTarget;
    if (scrollHeight - Math.ceil(scrollTop) <= clientHeight) {
      setItemCount((prevCount) => prevCount + 10);
    }
  }, []);

  useEffect(() => {
    setRenderedData(detailData.slice(0, itemCount));
  }, [detailData, itemCount]);

  const clickLink = (e: React.MouseEvent<HTMLDivElement>) => {
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

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setIsError(true);

      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&type=video&maxResults=50&key=${process.env.REACT_APP_IS_YOUTUBE_API_KEY}`
        );

        const data = await response.json();
        setDetailData(data.items);
        setRenderedData(data.items.slice(0, itemCount));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      setIsLoading(false);
      setIsError(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    setRenderedData(detailData.slice(0, itemCount));
  }, [detailData, itemCount]);

  if (isLoading) return <Spinner />;
  if (isError) return <ErrorPage />;

  return (
    <>
      {renderedData && (
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
              </ContentDetail>
            </VideoContent>
            <CommentItem></CommentItem>
          </MainBox>
          <ScrollBox onScroll={handleScroll}>
            {renderedData &&
              renderedData.map((item: Item) => (
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
                      <TimeContent>
                        {item.snippet.publishedAt.slice(0, 10)}
                      </TimeContent>
                    </SubTimeBox>
                  </SubTextBox>
                </SubBox>
              ))}
          </ScrollBox>
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
  color: var(--darkmode-color);

  h2 {
    margin-bottom: 0.625rem;
    font-size: 1.125rem;
    font-weight: 600;
  }

  dt {
    overflow: hidden;
    position: absolute;
    clip: rect(0 0 0 0);
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

const ScrollBox = styled.div`
  height: calc(100vh - 100px);
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0.625rem;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--button-hover-color);
    border-radius: var(--primary-margin);
  }

  &::-webkit-scrollbar-track {
    background: rgba(4, 90, 220, 0.1);
    border-radius: var(--primary-margin);
    margin-top: 0.625rem;
  }

  @media ${(props) => props.theme.tablet} {
    height: calc(100vh - 400px);
  }

  @media ${(props) => props.theme.laptop} {
    height: calc(100vh - 10px);
  }
`;

const SubBox = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: var(--primary-margin);

  @media ${(props) => props.theme.mobile} {
    display: flex;
    flex-direction: column;
  }
`;

const SubImgBox = styled.div`
  cursor: pointer;

  img {
    width: 10.5rem;
    height: 5.875rem;
    object-fit: cover;
    border-radius: 0.625rem;

    @media ${(props) => props.theme.mobile} {
      width: 100%;
      height: 20vh;
      object-fit: unset;

      @media (min-width: 26.875rem) {
        height: 25vh;
      }

      @media (min-width: 28.75rem) {
        height: 30vh;
      }

      @media (min-width: 35rem) {
        height: 40vh;
      }
    }
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
  color: var(--darkmode-color);
`;

const SubTitleText = styled.p`
  overflow: hidden;
  display: -webkit-box;
  font-weight: 600;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  color: var(--darkmode-color);
`;

const SubTimeBox = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.875rem;
  color: var(--darkmode-color);
`;

const TimeContent = styled.p`
  @media ${(props) => props.theme.mobile} {
    display: none;
    color: var(--darkmode-color);
  }
`;
