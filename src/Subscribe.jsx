import React from 'react'
import {  BiSolidBellRing} from 'react-icons/bi';
import {AiFillDislike,  } from 'react-icons/ai';
import {AiFillLike,  } from 'react-icons/ai';

function Subscribe() {
  return (
    <div className="flex justify-around border-2 border-black">
        <div className="p-2 m-2">
            <img className="w-12" src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" alt="user"/>
        </div>

        <div className="p-2 m-2">
            <h1>Rohit Negi</h1>
            <h1>140k subscribers</h1>
        </div>
        <div className="p-2 m-2">
        <select value="Subscribed">
        <option style="background-image:url(https://images.vexels.com/media/users/3/134939/isolated/lists/5ade3d1a62fbe78d1be88e574d45c2c7-bell-icon-16.png)">male</option>
        </select>
        </div>

       <div className="p-2 m-2">
        <button> <AiFillLike/> 3.2k</button>
        <button><AiFillDislike/> 1.2k</button>
       </div>

        <div className="p-2 m-2">
        <button>Download</button>
        </div>

        <div className="p-2 m-2">
        <button>...</button>
        </div>

    </div>
  )
}

export default Subscribe;