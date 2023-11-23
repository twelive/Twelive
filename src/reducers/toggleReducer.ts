const initialState: ToggleState = {
  toggleMenu: false,
};

function toggleReducer(state: ToggleState = initialState, action: ToggleAction) {
  switch (action.type) {
    case 'click': {
      return {
        ...state,
        toggleMenu: !action.value,
      };
    }
    default:
      return state;
  }
}

export default toggleReducer;
