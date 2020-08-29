import React from "react";

import Sidebar from "./Sidebar";
import Content from "./Content";


const LeftoverWrapper = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Content />
    </div>
  );
};

export default LeftoverWrapper;
