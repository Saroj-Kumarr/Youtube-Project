import React from "react";
import Button from "./Button";

const list = ["All", "Javascript", "React", "Music", "Javascript","Cricket","Movies","Front-end","Back-end","Full-stack","Stand-Up-Comedy","Programming","Tailwind"];

function ButtonList() {
  return (
    <div className="flex m-2 p-2 ">
      {
        list.map((obj,index) => {
          return <Button name={obj} key={index}/>
        })
      }
      
    </div>
  );
}

export default ButtonList;
