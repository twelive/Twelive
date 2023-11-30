import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

function Search() {
  const { data } = useSelector((state: RootState) => state.data);
  const { searchValue } = useSelector((state: RootState) => state.searchValue);
  /*   const { searchHistoryValue } = useSelector(
    (state: RootState) => state.searchHistoryValue
  ); */

  const filterValue = data.items.filter((item: VideoItem) => {
    return item.snippet.title.toUpperCase().includes(searchValue.toUpperCase());
  });

  return (
    <Layout>
      {searchValue ? (
        <>
          {filterValue.map((item: VideoItem) => (
            <ListItem key={item.id}>{item.snippet.title}</ListItem>
          ))}
        </>
      ) : (
        <SearchHistory>검색 기록이 없습니다.</SearchHistory>
      )}
    </Layout>
  );
}

export default Search;

const Layout = styled.ul`
  position: absolute;
  top: 2.6563rem;
  left: 50%;
  height: 30rem;
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
  color: var(--darkmode-color);
`;

const SearchHistory = styled.p`
  margin-top: 1rem;
  text-align: center;
  color: var(--darkmode-color);
`;
