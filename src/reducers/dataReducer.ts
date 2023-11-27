const initialState: DataState = {
  data: {},
};

function dataReducer(state: DataState = initialState, action: DataAction) {
  switch (action.type) {
    case 'DATA_FETCH': {
      return {
        ...state,
        data: action.payload,
      };
    }
    default:
      return state;
  }
}

export default dataReducer;
