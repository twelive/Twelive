const initialState: ThemeState = {
  darkMode: false,
};

const themeReducer = (
  state = initialState,
  action: ThemeAction
): ThemeState => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return { darkMode: !state.darkMode };
    default:
      return state;
  }
};

export default themeReducer;
