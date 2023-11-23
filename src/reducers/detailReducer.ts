const initialState: DetailState = {
  channelId: '',
};

function detailReducer(
  state: DetailState = initialState,
  action: DetailAction
) {
  switch (action.type) {
    case 'updateChannelId': {
      return {
        ...state,
        channelId: action.update,
      };
    }
    default:
      return state;
  }
}

export default detailReducer;
