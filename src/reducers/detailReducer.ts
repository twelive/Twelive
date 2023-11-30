const storedChannelId = localStorage.getItem('channelId');

const channelId = storedChannelId ? JSON.parse(storedChannelId) : '';

const initialState: DetailState = {
  channelId: channelId || '',
};

function detailReducer(
  state: DetailState = initialState,
  action: DetailAction
) {
  switch (action.type) {
    case 'CHANNELID_UPDATE': {
      localStorage.setItem('channelId', JSON.stringify(action.update));
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
