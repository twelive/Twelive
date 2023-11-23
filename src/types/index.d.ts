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

// detail.json 타입 정의
interface Thumbnail {
  url: string;
  width: number;
  height: number;
}

interface Snippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: {
    default: Thumbnail;
    medium: Thumbnail;
    high: Thumbnail;
  };
  channelTitle: string;
  liveBroadcastContent: string;
  publishTime: string;
}

interface VideoId {
  kind: string;
  videoId: string;
}

interface Item {
  kind: string;
  etag: string;
  id: VideoId;
  snippet: Snippet;
}

interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}

interface SearchResult {
  kind: string;
  etag: string;
  nextPageToken: string;
  regionCode: string;
  pageInfo: PageInfo;
  items: Item[];
}
