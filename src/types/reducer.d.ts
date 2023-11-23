// Reducer
type RootState = ReturnType<typeof rootReducer>;

// 상태의 타입 정의
interface NavState {
  navMenu: string;
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

// 액션 타입 정의
type NavAction = {
  type: 'click';
  payload?: string;
};

type ToggleAction = {
  type: 'click';
  value?: boolean;
};

interface ClickAction {
  type: 'fetch';
  payload: JsonObject;
}

type DataAction = ClickAction;

interface DetailAction {
  type: `updateChannelId`;
  update: stiring;
}
