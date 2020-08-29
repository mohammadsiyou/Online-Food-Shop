import React, { useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import {
  Icon,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import classNames from "classnames";
import { FormattedMessage } from "react-intl";

import { getCurrencies, currencyChange } from "store/currency";
import { openPopover, closePopover } from "store/popover";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const useStyles = makeStyles({
  button: {
    cursor: "pointer",
    padding: "0px 4px",
    "&:hover": {
      background: "#ebebeb",
    },
  },
});

const Currency = ({
  getCurrencies,
  currencyChange,
  currencies,
  currency,
  openPopover,
  closePopover,
}) => {
  useEffect(() => {
    getCurrencies();
  }, [getCurrencies]);

  const classes = useStyles();

  const CurrencyList = () => (
    <List>
      {currencies.map((item, index) => (
        <ListItem
          button
          className={classes.listItem}
          key={index}
          onClick={() => selectCurrency(item)}
        >
          <ListItemText
            className="truncate pr-0"
            primary={item.title}
            disableTypography={true}
          />
        </ListItem>
      ))}
    </List>
  );

  const selectCurrency = (item) => {
    currencyChange(item);
    closePopover();
  };

  const currencyClick = (event) => {
    openPopover(event.currentTarget, {
      children: <CurrencyList />,
      classes: { paper: "w-64 h-auto" },
    });
  };

  return (
    <div>
      <div
        className={classNames("flex items-center h-full", classes.button)}
        onClick={currencyClick}
      >
        <span>
          <FormattedMessage id="topheader.Currency" defaultMessage="Currency" />
          :
        </span>
        <span className="mx-2 text-black">{currency && currency.code}</span>
        <Icon className="cursor-pointer">arrow_drop_down</Icon>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  currency: state.currency.current,
  currencies: state.currency.currencies,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getCurrencies,
      currencyChange,
      closePopover,
      openPopover,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Currency);
