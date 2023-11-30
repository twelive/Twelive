// 로컬 스토리지 키
const LOCAL_STORAGE_KEY = 'data';

// 초기 상태를 로컬 스토리지에서 가져오는 함수
const loadStateFromLocalStorage = (): DataState => {
  // 이 함수 안에서 초기 상태를 정의합니다.
  const initialState: DataState = {
    data: {
      items: [],
    },
  };

  // 로컬 스토리지에서 이전 상태를 가져와서 병합합니다.
  const storedState = localStorage.getItem(LOCAL_STORAGE_KEY);
  return storedState
    ? { ...initialState, ...JSON.parse(storedState) }
    : initialState;
};

// 데이터를 로컬 스토리지에 저장하는 함수
const saveStateToLocalStorage = (state: DataState) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
};

// 초기 상태를 로컬 스토리지에서 가져옵니다.
const initialState: DataState = loadStateFromLocalStorage();

function dataReducer(state: DataState = initialState, action: DataAction) {
  switch (action.type) {
    case 'DATA_FETCH': {
      const newState = {
        ...state,
        data: {
          ...state.data,
          items: action.payload,
        },
      };

      // 새로운 상태를 로컬 스토리지에 저장합니다.
      saveStateToLocalStorage(newState);

      return newState;
    }
    default:
      return state;
  }
}

export default dataReducer;
