import { combineReducers } from 'redux';
import navReducer from './reducers/navReducer';

// Redux의 최상위 리듀서: 여러 리듀서를 하나로 합치는 역할
const rootReducer = combineReducers({
  navMenu: navReducer,
});

export default rootReducer;
