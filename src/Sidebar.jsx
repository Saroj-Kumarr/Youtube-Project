import React from "react";
import { AiFillHome, AiFillSetting } from "react-icons/ai";
import {
  MdExplore,
  MdMore,
  MdSubscriptions,
  MdVideoLibrary,
} from "react-icons/md";
import { PiYoutubeLogoDuotone } from "react-icons/pi";
import { TbHistory } from "react-icons/tb";
import { useSelector } from "react-redux";

function Sidebar() {

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) {
    return null;
  }



  return (
    <div>
      <h1 className="text-md mt-2 p-1 font-extrabold bg-gray-300 rounded-md w-24 hover:bg-gray-400 duration-300">
        <AiFillHome className="inline-block relative bottom-[3px]" /> Home
      </h1>
      <ul className="font-semibold">
        <li className="m-1 hover:bg-gray-200 w-20 hover:rounded-md">
          <PiYoutubeLogoDuotone className="inline-block relative bottom-[2px] mr-1 " />
          Shorts
        </li>
        <li className="m-1 hover:bg-gray-200 w-28 hover:rounded-md">
          <MdSubscriptions className="inline-block relative bottom-[2px] mr-1 " />
          Subscription
        </li>
        <li className="m-1 hover:bg-gray-200 w-20 hover:rounded-md">
          <MdVideoLibrary className="inline-block relative bottom-[2px] mr-1 " />
          Library
        </li>

        <li className="m-1 hover:bg-gray-200 w-20 hover:rounded-md">
          <TbHistory className="inline-block relative bottom-[2px] mr-1 " />
          History
        </li>
      </ul>
      <hr className="border-gray-400 w-28 my-2" />
      <h1 className="p-1 font-extrabold text-md mt-2 font-bold bg-gray-300 rounded-md w-24 hover:bg-gray-400 duration-300">
        <MdExplore className="inline-block relative bottom-[2px]" /> Explore
      </h1>
      <ul className="font-semibold">
        <li className="m-1 hover:bg-gray-200 w-20 hover:rounded-md">
          Trending
        </li>
        <li className="m-1 hover:bg-gray-200 w-20 hover:rounded-md ">
          Shopping
        </li>
        <li className="m-1 hover:bg-gray-200 w-20 hover:rounded-md">Music</li>
        <li className="m-1 hover:bg-gray-200 w-20 hover:rounded-md">Movies</li>
        <li className="m-1 hover:bg-gray-200 w-20 hover:rounded-md">Live</li>
        <li className="m-1 hover:bg-gray-200 w-20 hover:rounded-md">Gaming</li>
        <li className="m-1 hover:bg-gray-200 w-20 hover:rounded-md">News</li>
        <li className="m-1 hover:bg-gray-200 w-20 hover:rounded-md">Sports</li>
        <li className="m-1 hover:bg-gray-200 w-20 hover:rounded-md">
          Learning
        </li>

        <li className="m-1 hover:bg-gray-200 w-36 hover:rounded-md">
          Fashion & Beauty
        </li>
      </ul>
      <hr className="border-gray-400 w-36 my-2" />
      <h1 className="p-1 font-extrabold text-md mt-2 font-bold bg-gray-300 rounded-md w-48 hover:bg-gray-400 duration-300">
        <MdMore className="inline-block relative bottom-[2px] mr-1 right-[1px]" />
        More from YouTube
      </h1>
      <ul className="font-semibold">
        <li className="m-1 hover:bg-gray-200 w-36 hover:rounded-md">
          YouTube Premium
        </li>
        <li className="m-1 hover:bg-gray-200 w-36 hover:rounded-md">
          YouTube Music
        </li>
        <li className="m-1 hover:bg-gray-200 w-36 hover:rounded-md">
          YouTube Kids
        </li>
      </ul>
      <hr className="border-gray-400 w-28 my-2" />
      <h1 className="p-1 font-extrabold text-md mt-2 font-bold bg-gray-300 rounded-md w-24 hover:bg-gray-400 duration-300">
        <AiFillSetting className="inline-block relative bottom-[2px] mr-1" />
        Settings
      </h1>
      <ul className="font-semibold">
        <li className="m-1 hover:bg-gray-200 w-36 hover:rounded-md">
          Report history
        </li>
        <li className="m-1 hover:bg-gray-200 w-36 hover:rounded-md">Help</li>
        <li className="m-1 hover:bg-gray-200 w-36 hover:rounded-md">
          Send feedback
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
