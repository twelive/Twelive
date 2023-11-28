const initialState: DataState = {
  data: {
    items: [],
  },
};

function dataReducer(state: DataState = initialState, action: DataAction) {
  switch (action.type) {
    case 'DATA_FETCH': {
      return {
        ...state,
        data: {
          ...state.data,
          items: action.payload,
        },
      };
    }
    default:
      return state;
  }
}

export default dataReducer;
