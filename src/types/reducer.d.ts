// Reducer
type RootState = ReturnType<typeof rootReducer>;

// 상태의 타입 정의
interface NavState {
  navMenu: string;
}

interface SearchState {
  searchValue: string;
}

interface SearchHistoryState {
  searchHistoryValue: string[];
}

interface ToggleState {
  toggleMenu: boolean;
}

interface DataState {
  data: JsonObject;
}

interface DetailState {
  channelId: string;
}

interface ThemeState {
  darkMode: boolean;
}

// 액션 타입 정의
type NavAction = {
  type: 'NAV_CLICK';
  payload?: string;
};

type SearchAction = {
  type: 'SEARCH_INPUT';
  value?: string;
};

type SearchHistoryAction = {
  type: 'SEARCHHISTORY_UPDATE';
  value?: string;
};

type ToggleAction = {
  type: 'TOGGLE_CLICK';
  value?: boolean;
};

interface ClickAction {
  type: 'DATA_FETCH';
  payload: JsonObject;
}

type DataAction = ClickAction;

interface DetailAction {
  type: `CHANNELID_UPDATE`;
  update: stiring;
}

type ThemeAction = {
  type: 'TOGGLE_THEME';
};
