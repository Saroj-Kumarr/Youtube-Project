import React from "react";
import hamberger from "./hamberger.jpg";
import ytlogo from "./ytlogonext.jpg";
import user from "./user.png";
import { useDispatch } from "react-redux";
import { toggleMenu } from "./appSlice";

function Head() {
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
      <div>
        <input
          className="border-2 rounded-l-2xl p-1 mr-2 w-[600px] border-gray-400 w-12 focus:outline-none"
          type="text"
          placeholder="Search"
        />
        <button className="border-2 rounded-r-xl relative right-2 p-1 border-gray-400 w-16 bg-gray-400">
          Search
        </button>
      </div>
      <div>
        <img className="h-12 mr-10" src={user} alt="user-icon" />
      </div>
    </div>
  );
}

export default Head;
