import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Search() {
  const dispatch = useDispatch();
  const { data } = useSelector((state: RootState) => state.data);
  const { searchValue } = useSelector((state: RootState) => state.searchValue);
  const { inputValue } = useSelector((state: RootState) => state.inputValue);
  const { searchHistoryValue } = useSelector(
    (state: RootState) => state.searchHistoryValue
  );

  const filterValue = data.items.filter((item: VideoItem) => {
    return item.snippet.title.toUpperCase().includes(searchValue.toUpperCase());
  });

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (e.currentTarget.parentElement) {
      const clickedIndex = Array.from(
        e.currentTarget.parentElement.children
      ).indexOf(e.currentTarget);

      if (data.items && data.items[clickedIndex]) {
        const clickedItem = data.items[clickedIndex];
        const currentChannelId = clickedItem.snippet.channelId;
        dispatch({ type: 'CHANNELID_UPDATE', update: currentChannelId });
        dispatch({ type: 'INPUT_TOGGLE', value: false });
      }
    }
  };

  const handleInput = () => {
    if (inputValue) {
      dispatch({ type: 'INPUT_TOGGLE', value: false });
    }
  };

  return (
    <Backdrop onClick={handleInput}>
      <Layout>
        {searchValue ? (
          <>
            {filterValue.map((item: VideoItem) => (
              <ListItem key={item.id}>
                <StyledLink
                  to={`/detail/${item.snippet.channelId}`}
                  onClick={handleClick}
                >
                  {item.snippet.title}
                </StyledLink>
              </ListItem>
            ))}
          </>
        ) : (
          <>
            {searchHistoryValue ? (
              <>
                {searchHistoryValue.map((item: string, index: number) => (
                  <ListItem key={index}>{item}</ListItem>
                ))}
              </>
            ) : (
              <SearchHistory>검색 기록이 없습니다.</SearchHistory>
            )}
          </>
        )}
      </Layout>
    </Backdrop>
  );
}

export default Search;

const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
`;

const Layout = styled.ul`
  position: absolute;
  top: 2.6563rem;
  left: 50%;
  border: 0.0625rem solid var(--button-hover-color);
  background: var(--darkmode-bgColor);
  overflow-y: auto;
  z-index: 2;

  @media ${(props) => props.theme.tablet} {
    width: 20.8125rem;
    transform: translateX(-63.5%);
  }
  @media ${(props) => props.theme.laptop} {
    width: 482.5px;
    transform: translateX(-60.5%);
  }
`;

const ListItem = styled.li`
  min-height: var(--primary-margin);
  max-height: fit-content;
  overflow: hidden;
  padding: 1rem;
  border: 0.0625rem solid var(--button-hover-color);
`;

const StyledLink = styled(Link)`
  color: var(--darkmode-color);
`;

const SearchHistory = styled.p`
  margin: 1rem;
  text-align: center;
  color: var(--darkmode-color);
`;
