import React from "react";
import { InputBase, Icon } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import classNames from "classnames";
import { injectIntl } from "react-intl";

import { useDispatch, useSelector } from 'react-redux';
import { setSearchText } from "store/leftover";


const useStyles = makeStyles(() => ({
  input: {
    border: "1px solid #e8e8e8",
  },
}));

const SearchInput = ({className, intl }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const searchText = useSelector(state => state.leftover.searchText);
  
  const search = {
    input: intl.formatMessage({
      id: "home.hero.ShippingAddress",
      defaultMessage: "Enter shipping address ...",
    }),
  };

  const inputChange = event => dispatch(setSearchText(event));

  return (
    <div className={className}>
      <div
        className={classNames(
          "flex w-full h-12 items-center rounded bg-white",
          classes.input
        )}
      >
        <Icon className="mx-2 text-black">search</Icon>
        <InputBase
          placeholder={search.input}
          className="w-full"
          onChange={inputChange}
		  value={searchText}
        />
      </div>
    </div>
  );
};

export default injectIntl(SearchInput);
