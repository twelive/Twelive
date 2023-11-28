const initialState: ThemeState = {
  darkMode: JSON.parse(localStorage.getItem("darkMode") || "false"),
//.
};

const themeReducer = (
  state = initialState,
  action: ThemeAction
): ThemeState => {
  switch (action.type) {
    case 'TOGGLE_THEME': {
      const newDarkMode = !state.darkMode;
      localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
      return { darkMode: newDarkMode };

    }
    default:
      return state;
  }
};

export default themeReducer;
