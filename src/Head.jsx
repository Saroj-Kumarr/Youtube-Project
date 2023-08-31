import React, { useState } from "react";
import hamberger from "./hamberger.jpg";
import ytlogo from "./ytlogonext.jpg";
import user from "./user.png";
import { useDispatch } from "react-redux";
import { toggleMenu } from "./appSlice";
import { BsSearch } from "react-icons/bs";
import { IoMicCircleSharp } from "react-icons/io5";
import { YOUTUBE_SEARCH_API } from "./constant";
import { useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";

function Head() {
  const [searchText, setSearchText] = useState([]);
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => getSearchResult(), 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);

  async function getSearchResult() {
    const data = await fetch(YOUTUBE_SEARCH_API + searchText);
    const json = await data.json();
    setSuggestion(json[1]);
    console.log(json[1]);
  }

  const dispatch = useDispatch();

  function toggleHandler() {
    dispatch(toggleMenu());
  }
 
  return (
    <div className="flex justify-between p-2 m-2 shadow-xl hover:shadow-2xl">
      <div className=" flex">
        <img
          onClick={() => toggleHandler()}
          className="h-12 cursor-pointer"
          src={hamberger}
          alt="hamberger-menu"
        />
        <img className="h-12 ml-2" src={ytlogo} alt="yt-logo" />
      </div>
      <div className="relative right-14">
        <div>
          <input
            className="border-2 focus:border-blue-500 rounded-l-2xl p-1 mr-2 w-[600px] border-gray-400 focus:outline-none"
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
          />
          <button className="border-2 rounded-r-2xl relative right-2 p-[3px] bottom-[2px] border-gray-400 w-16 bg-gray-400">
            <BsSearch className="inline-block text-2xl " />
          </button>
          <button className="">
            <IoMicCircleSharp className="inline-block relative bottom-1 text-4xl text-gray-600" />
          </button>
        </div>
        {showSuggestion && (
          <div className="fixed p-2 m-2 w-[37rem] bg-white rounded-xl shadow-lg">
            <ul>
              {suggestion.map((obj) => (
                <li className="p-1 font-medium">
                  <AiOutlineSearch className="inline-block mr-1" /> {obj}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div>
        <img className="h-12 mr-10" src={user} alt="user-icon" />
      </div>
    </div>
  );
}

export default Head;

// https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=[YOUR_API_KEY]
