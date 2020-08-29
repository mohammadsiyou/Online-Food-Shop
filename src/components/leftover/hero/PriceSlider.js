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

const PriceSlider = ({ className }) => {
  const classes = useStyles(); 
  const dispatch = useDispatch();
  const filters = useSelector(state => state.leftover.leftOversFilters);
  const currency = useSelector(state => state.currency.current);
  const priceRange = useSelector(state => state.setting.priceRange);
   
  const setPrice = (event, newValue) => dispatch(changeLeftOverFilters({price:newValue}));
  
  const price = filters.price !== null ? filters.price : [priceRange["0"], priceRange["1"]];
  
  const {symbol} = currency;
  	
  return (
    <div className={classNames(className, "h-full")}>
      <Typography id="range-price" gutterBottom className={classes.title}>
        <FormattedMessage id="leftover.hero.price" defaultMessage="Price" /> : {price[0]}{symbol} - {price[1]}{symbol}
      </Typography>
      <CustomizedSlider
        value={price}
        onChange={setPrice}
        aria-labelledby="range-price"
		min={priceRange["0"]}
        max={priceRange["1"]}
      />
    </div>
  );
};

export default PriceSlider;
