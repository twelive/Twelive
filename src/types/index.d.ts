// Reducer
type RootState = ReturnType<typeof rootReducer>;

// 상태의 타입 정의
interface NavState {
  navMenu: string;
}

interface ToggleState {
  toggleMenu: boolean;
}


// 액션 타입 정의
type NavAction = {
  type: 'click';
  payload?: string;
};

// 액션 타입 정의
type ToggleAction = {
  type: 'click';
  value? : boolean;
};

// popular.json 타입 정의

interface VideoSnippet {
  categoryId: string;
  channelId: string;
  channelTitle: string;
  defaultAudioLanguage: string;
  defaultLanguage: string;
  description: string;
  liveBroadcastContent: string;
  localized: {
    description: string;
    title: string;
  };
  publishedAt: string;
  tags: string[];
  thumbnails: {
    default: {
      height: number;
      url: string;
      width: number;
    };
    high: {
      height: number;
      url: string;
      width: number;
    };
    maxres: {
      height: number;
      url: string;
      width: number;
    };
    medium: {
      height: number;
      url: string;
      width: number;
    };
    standard: {
      height: number;
      url: string;
      width: number;
    };
  };
  title: string;
}

interface VideoItem {
  etag: string;
  id: string;
  kind: string;
  snippet: VideoSnippet;
}

interface RelatedVideoItem {
  etag: string;
  id: RelatedId;
  kind: string;
  snippet: VideoSnippet;
}

interface RelatedId {
  kind: string;
  videoId: string;
}

interface VideoListResponse {
  etag: string;
  items: VideoItem[];
  kind: string;
  nextPageToken: string;
  pageInfo: {
    resultsPerPage: number;
    totalResults: number;
  };
}

interface ThumbnailImg {
  $image?: string;
  $height?: number;
}
