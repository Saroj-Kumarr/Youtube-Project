import React from 'react';
import { Image, Shimmer } from 'react-shimmer';

function VideoCard({ info }) {
    
    console.log(info);

    const { snippet, statistics } = info;
    const { channelTitle, title, thumbnails } = snippet;

  return (
      <div className="p-2 m-2 w-72 shadow-xl rounded-lg">
          <img className="rounded-xl hover:scale-105 duration-300 " src={thumbnails.medium.url} alt="thumb" />
          <ul>
              <li className="font-bold py-2" >{title}</li>
              <li>{channelTitle}</li>
              <li>{(statistics.viewCount/1000000).toFixed(2)}M views</li>
          </ul>
    </div>
  )
}

export default VideoCard;

