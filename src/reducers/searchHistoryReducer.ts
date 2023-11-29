const initialState: SearchHistoryState = {
  searchHistoryValue: [],
};

function searchHistoryReducer(
  state: SearchHistoryState = initialState,
  action: SearchHistoryAction
) {
  switch (action.type) {
    case 'SEARCHHISTORY_UPDATE': {
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
