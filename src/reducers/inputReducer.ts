const initialState: InputState = {
  inputValue: false,
};

function inputReducer(state: InputState = initialState, action: InputAction) {
  switch (action.type) {
    case 'INPUT_TOGGLE': {
      return {
        ...state,
        inputValue: action.value || false,
      };
    }
    default:
      return state;
  }
}

export default inputReducer;
