import React from "react";
import { Typography } from "@material-ui/core/";
import { makeStyles } from '@material-ui/core/styles';
import classNames from "classnames";
import { useDispatch, useSelector } from 'react-redux';
import { changeLeftOverFilters } from "store/leftover";
import { FormattedMessage } from "react-intl";

import CustomizedSlider from "./CustomizedSlider";

const useStyles = makeStyles((theme) => ({
  title: {
    color: "#0d0c0c",
  },
}));

const StarSlider = ({ className }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const filters = useSelector(state => state.leftover.leftOversFilters);

  const setRate = (event, newValue) => dispatch(changeLeftOverFilters({rate:newValue}));
  const {rate} = filters;
 
  return (
    <div className={classNames(className, "h-full")}>
      <Typography id="range-star" gutterBottom className={classes.title}>
         <FormattedMessage id="leftover.hero.rate" defaultMessage="Rate" /> : {rate[0]} - {rate[1]}
      </Typography>
      <CustomizedSlider
        value={rate}
        onChange={setRate}
        aria-labelledby="range-star"
        min={0}
        max={5}
      />
    </div>
  );
};

export default StarSlider;
