const initialState: SearchState = {
  searchValue: '',
};

function searchReducer(
  state: SearchState = initialState,
  action: SearchAction
) {
  switch (action.type) {
    case 'SEARCH_INPUT': {
      return {
        ...state,
        searchValue: action.value,
      };
    }
    default:
      return state;
  }
}

export default searchReducer;
