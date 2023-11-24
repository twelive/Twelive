const initialState: DataState = {
  data: {},
};

function dataReducer(state: DataState = initialState, action: DataAction) {
  switch (action.type) {
    case 'fetch': {
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
