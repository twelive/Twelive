// Reducer
type RootState = ReturnType<typeof rootReducer>;

// 상태의 타입 정의
interface NavState {
  navMenu: string;
}

// 액션 타입 정의
type NavAction = {
  type: 'click';
  payload?: string;
};
