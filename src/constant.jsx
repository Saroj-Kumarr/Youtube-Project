

const YOUTUBE_API_KEY = "AIzaSyD87xJYuvsrN8FiDbnVatTP4Iaz0OqwxNQ";


const YOUTUBE_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+YOUTUBE_API_KEY;
export { YOUTUBE_API };
  
  
export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
