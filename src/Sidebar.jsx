import React from "react";
import { AiFillHome, AiFillSetting } from "react-icons/ai";
import {
  MdExplore,
  MdMore,
  MdSubscriptions,
  MdVideoLibrary,
  MdLocalMovies,
  MdSportsBaseball,
  MdWorkspacePremium,
  MdFeedback,
} from "react-icons/md";
import { PiYoutubeLogoDuotone } from "react-icons/pi";
import { TbHistory } from "react-icons/tb";
import { useSelector } from "react-redux";
import { HiTrendingUp } from "react-icons/hi";
import { FaBagShopping, FaRadio } from "react-icons/fa6";
import {
  BiSolidBookAdd,
  BiSolidReport,
  BiSolidHelpCircle,
} from "react-icons/bi";

import { ImMusic } from "react-icons/im";
import { RiLiveFill } from "react-icons/ri";
import { IoGameController } from "react-icons/io5";
import { GiClothes } from "react-icons/gi";
import { BsFillFileMusicFill, BsSearch } from "react-icons/bs";

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
        <li className="m-1 hover:bg-gray-200 w-24 hover:rounded-md">
          <HiTrendingUp className="text-lg inline-block relative bottom-[2px] mr-1" />
          Trending
        </li>
        <li className="m-1 hover:bg-gray-200 w-24 hover:rounded-md ">
          <FaBagShopping className="inline-block left-[2px] relative bottom-[2px] right-[2px] mr-1" />
          Shopping
        </li>
        <li className="m-1 hover:bg-gray-200 w-20 hover:rounded-md">
          <ImMusic className="inline-block relative bottom-[2px] mr-1" /> Music
        </li>
        <li className="m-1 hover:bg-gray-200 w-20 hover:rounded-md">
          <MdLocalMovies className="inline-block relative bottom-[2px] mr-1" />
          Movies
        </li>
        <li className="m-1 hover:bg-gray-200 w-20 hover:rounded-md">
          <RiLiveFill className="inline-block relative bottom-[2px] mr-1" />{" "}
          Live
        </li>
        <li className="m-1 hover:bg-gray-200 w-20 hover:rounded-md">
          <IoGameController className="inline-block relative bottom-[2px] mr-1" />
          Gaming
        </li>
        <li className="m-1 hover:bg-gray-200 w-20 hover:rounded-md">
          <FaRadio className="inline-block relative bottom-[2px] mr-1" /> News
        </li>
        <li className="m-1 hover:bg-gray-200 w-20 hover:rounded-md">
          <MdSportsBaseball className="inline-block relative bottom-[2px] mr-2" />
          Sports
        </li>
        <li className="m-1 hover:bg-gray-200 w-24 hover:rounded-md">
          <BiSolidBookAdd className="inline-block relative bottom-[2px] mr-2" />
          Learning
        </li>

        <li className="m-1 hover:bg-gray-200 w-40 hover:rounded-md">
          <GiClothes className="inline-block relative bottom-[2px]" /> Fashion &
          Beauty
        </li>
      </ul>
      <hr className="border-gray-400 w-36 my-2" />
      <h1 className="p-1 font-extrabold text-md mt-2 font-bold bg-gray-300 rounded-md w-48 hover:bg-gray-400 duration-300">
        <MdMore className="inline-block relative bottom-[2px] mr-1 right-[1px]" />
        More from YouTube
      </h1>
      <ul className="font-semibold">
        <li className="m-1 hover:bg-gray-200 w-40 hover:rounded-md">
          <MdWorkspacePremium className="inline-block relative bottom-[3px] mr-1" />
          YouTube Premium
        </li>
        <li className="m-1 hover:bg-gray-200 w-36 hover:rounded-md">
          <BsFillFileMusicFill className="inline-block relative bottom-[3px] mr-1" />
          YouTube Music
        </li>
        <li className="m-1 hover:bg-gray-200 w-36 hover:rounded-md">
          <PiYoutubeLogoDuotone className="inline-block relative bottom-[3px] mr-1" />
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
          <BiSolidReport className="inline-block relative bottom-[2px] mr-1" />
          Report history
        </li>
        <li className="m-1 hover:bg-gray-200 w-36 hover:rounded-md">
          <BiSolidHelpCircle className="inline-block relative bottom-[2px] mr-1" />
          Help
        </li>
        <li className="m-1 hover:bg-gray-200 w-36 hover:rounded-md">
          <MdFeedback className="inline-block relative bottom-[2px] mr-1" />
          Send feedback
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
