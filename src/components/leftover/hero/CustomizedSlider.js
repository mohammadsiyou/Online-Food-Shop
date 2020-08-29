import React from "react";
import { Slider } from "@material-ui/core/";

const CustomizedThumbComponent = (props) => (
  <span {...props}>
    <span className="bar" />
    <span className="bar" />
    <span className="bar" />
  </span>
);

const CustomizedSlider = (props) => (
  <Slider {...props} ThumbComponent={CustomizedThumbComponent} />
);

export default CustomizedSlider;
