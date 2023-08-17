import React from "react";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";

function body() {
  return (
    <div className="flex">
      <Sidebar />
      <MainContainer />
    </div>
  );
}

export default body;
