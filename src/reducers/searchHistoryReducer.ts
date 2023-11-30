const storedSearchHistory = localStorage.getItem('searchHistory');

const initialState: SearchHistoryState = {
  searchHistoryValue:
    storedSearchHistory !== null ? JSON.parse(storedSearchHistory) : [],
};

function searchHistoryReducer(
  state: SearchHistoryState = initialState,
  action: SearchHistoryAction
) {
  switch (action.type) {
    case 'SEARCHHISTORY_UPDATE': {
      localStorage.setItem(
        'searchHistory',
        JSON.stringify([...state.searchHistoryValue, action.value])
      );
      return {
        ...state,
        searchHistoryValue: [...state.searchHistoryValue, action.value],
      };
    }
    default:
      return state;
  }
}

export default searchHistoryReducer;
