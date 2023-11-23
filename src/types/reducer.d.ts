// Reducer
type RootState = ReturnType<typeof rootReducer>;

// 상태의 타입 정의
interface NavState {
  navMenu: string;
}

interface DataState {
  data: JsonObject;
}

// 액션 타입 정의
type NavAction = {
  type: 'click';
  payload?: string;
};

interface ClickAction {
  type: 'fetch';
  payload: JsonObject;
}

type DataAction = ClickAction;
