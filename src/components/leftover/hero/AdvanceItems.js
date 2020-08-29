import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import classNames from "classnames";

import PriceSlider from "./PriceSlider";
import StarSlider from "./StarSlider";
import DropDown1 from "./DropDown1";
import DropDown2 from "./DropDown2";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    "& .column": {
      flex: "1 1 calc(25% - 2em)",
      margin: "1em",
    },
    "& .column:first-child": {
      marginLeft: "0em",
    },
  },
}));

const AdvanceItems = ({ className }) => {
  const classes = useStyles();

  return (
    <div className={classNames(classes.root, className)}>
      <div className="column px-4 py-2 rounded bg-white mr-4 flex items-center">
        <DropDown1 />
      </div>
      <div className="column px-4 py-2 rounded bg-white mr-4 flex items-center">
        <DropDown2 />
      </div>
      <div className="column px-4 py-2 rounded bg-white mr-4">
        <PriceSlider />
      </div>
      <div className="column px-4 py-2 rounded bg-white">
        <StarSlider />
      </div>
    </div>
  );
};

export default AdvanceItems;
