type ToggleAction =
  | { type: 'TOGGLE_CLICK' }


const initialState: ToggleState = {
  toggleMenu: false,
};

function toggleReducer(state: ToggleState = initialState, action: ToggleAction) {
  switch (action.type) {
    case 'TOGGLE_CLICK': {
      return {
        ...state,
        toggleMenu: !state.toggleMenu,
      };
    }
    default:
      return state;
  }
}

export default toggleReducer;
