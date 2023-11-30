import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function SearchPage() {
  const dispatch = useDispatch();
  const { data } = useSelector((state: RootState) => state.data);
  const { searchValue } = useSelector((state: RootState) => state.searchValue);
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

  return (
    <ul>
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
          {/* {searchHistoryValue ? (
            <>
              {searchHistoryValue.map((item: VideoItem) => (
                <ListItem key={item.id}>{item.snippet.title}</ListItem>
              ))}
            </>
          ) : ( */}
          <SearchHistory>검색 기록이 없습니다.</SearchHistory>
          {/*   )} */}
        </>
      )}
    </ul>
  );
}

export default SearchPage;

const ListItem = styled.li`
  min-height: var(--primary-margin);
  max-height: fit-content;
  overflow: hidden;
  padding: 1rem;
  border: 0.0625rem solid var(--button-hover-color);
  color: var(--darkmode-color);
`;

const StyledLink = styled(Link)`
  color: var(--darkmode-color);
`;

const SearchHistory = styled.p`
  margin-top: 1rem;
  text-align: center;
  color: var(--darkmode-color);
`;
