import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "./appSlice";
import { useSearchParams } from "react-router-dom";
import { useParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import Subscribe from "./Subscribe";

function Watchpage() {
  const dispatch = useDispatch();

  const { id } = useParams();  

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div>
      <div className="ml-20">
        <iframe
          width="900"
          height="500"
          src={"https://www.youtube.com/embed/" + id}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        {/* <div><Subscribe/></div> */}
      </div>
      <div>
        <CommentContainer />
      </div>
    </div>
  );
}

export default Watchpage;

