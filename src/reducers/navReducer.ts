type NavAction =
  | { type: 'NAV_CLICK', payload?: string }
 
const initialState: NavState = {
  navMenu: '홈',
};

function navReducer(state: NavState = initialState, action: NavAction) {
  switch (action.type) {
    case 'NAV_CLICK': {
      return {
        ...state,
        navMenu: action.payload || '홈', // payload가 없으면 '홈'으로 기본값 사용
      };
    }
    default:
      return state;
  }
}

export default navReducer;
