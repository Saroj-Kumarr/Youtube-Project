import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "./appSlice";
import { useSearchParams } from "react-router-dom";
import { useParams } from "react-router-dom";

function Watchpage() {
  const dispatch = useDispatch();

  // const [searchParams] = useSearchParams();

  const { id } = useParams();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
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
    </div>
  );
}

export default Watchpage;
