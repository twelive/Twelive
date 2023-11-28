import { combineReducers } from 'redux';
import navReducer from '@reducers/navReducer';
import dataReducer from '@reducers/dataReducer';
import detailReducer from '@reducers/detailReducer';
import toggleReducer from '@reducers/toggleReducer';
import themeReducer from '@reducers/themeReducer';
import searchReducer from '@reducers/searchReducer';

// Redux의 최상위 리듀서: 여러 리듀서를 하나로 합치는 역할
const rootReducer = combineReducers({
  navMenu: navReducer,
  data: dataReducer,
  channelId: detailReducer,
  toggleMenu: toggleReducer,
  searchValue: searchReducer,
  darkMode: themeReducer,
});

export default rootReducer;
