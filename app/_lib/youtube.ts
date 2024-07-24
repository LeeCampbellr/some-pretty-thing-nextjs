import { Duration } from "luxon";

export interface YoutubeVideoProps {
  kind: string;
  etag: string;
  id: string;
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      default: {
        url: string;
        width: number;
        height: number;
      };
      medium: {
        url: string;
        width: number;
        height: number;
      };
      high: {
        url: string;
        width: number;
        height: number;
      };
      standard: {
        url: string;
        width: number;
        height: number;
      };
      maxres: {
        url: string;
        width: number;
        height: number;
      };
    };
  };
  contentDetails: {
    duration: string;
    dimension: string;
    definition: string;
    caption: string;
    licensedContent: boolean;
    contentRating: any;
    projection: string;
  };
  statistics: {
    viewCount: string;
    likeCount: string;
    favoriteCount: string;
    commentCount: string;
  };
}

export async function fetchYoutubeVideos(desiredCount: number) {
  const API_URL = process.env.YOUTUBE_API_URL;
  const API_KEY = process.env.YOUTUBE_API_KEY;
  const channelId = "UChgmwsttG2qzHhPPlva1auA";
  const fetchMultiplier = 3; // Adjust this value between 3-5 based on your needs
  let maxResults = desiredCount * fetchMultiplier;

  let videoIds = await fetchVideoIds(API_URL, API_KEY, channelId, maxResults);
  if (!videoIds) return [];

  let videos = await fetchVideoDetails(API_URL, API_KEY, videoIds);
  let filteredVideos = filterVideosShorterThanMinute(videos);

  // If not enough videos, try fetching more, up to a limit (to prevent infinite loops or excessive API calls)
  while (
    filteredVideos.length < desiredCount &&
    maxResults < desiredCount * 5
  ) {
    maxResults += desiredCount; // Increase the number of results to fetch
    videoIds = await fetchVideoIds(API_URL, API_KEY, channelId, maxResults);
    if (!videoIds) break;

    videos = await fetchVideoDetails(API_URL, API_KEY, videoIds);
    filteredVideos = filterVideosShorterThanMinute(videos);
  }

  return filteredVideos.slice(0, desiredCount); // Return only the desired number of videos
}

async function fetchVideoIds(
  API_URL: string,
  API_KEY: string,
  channelId: string,
  maxResults: number
) {
  const endpoint = `${API_URL}/search?part=snippet&channelId=${channelId}&maxResults=${maxResults}&order=date&key=${API_KEY}`;
  try {
    const response = await fetch(endpoint);
    const data = await response.json();
    return data.items.map((video) => video.id.videoId).join("&id=");
  } catch (error) {
    return null;
  }
}
async function fetchVideoDetails(
  API_URL: string,
  API_KEY: string,
  videoIds: string
) {
  const endpoint = `${API_URL}/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoIds}&key=${API_KEY}`;
  try {
    const response = await fetch(endpoint);
    const data = await response.json();
    return data;
  } catch (error) {
    return [];
  }
}

export function filterVideosShorterThanMinute(videos) {
  const ONE_MINUTE_IN_MILLISECONDS = 60000; // 60 seconds in milliseconds

  const filteredVideos = videos?.items?.filter((item) => {
    const durationInMilliseconds = Duration.fromISO(
      item.contentDetails.duration
    ).as("milliseconds");

    return durationInMilliseconds >= ONE_MINUTE_IN_MILLISECONDS;
  });

  return filteredVideos;
}
