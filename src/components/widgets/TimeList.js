import React, { useState, useEffect, forwardRef } from "react";
import { Button, MenuItem } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import classNames from "classnames";
import { FormattedMessage } from "react-intl";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getTimeList } from "store/time";
import { selectedMenuItem } from "store/menu";

const yellow = "rgb(255, 224, 51)";

const useStyles = makeStyles(() => ({
  buttonsBox: {
    display: "flex",
    justifyContent: "center",
    color: "black",
    padding: 12,
    borderBottom: "1px solid #eeeeee",
  },
  rightButton: {
    borderRight: "none",
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    border: "1px solid #e0e0e0",
    color: "black",
    padding: 8,
    outline: "none !important",
    "&:hover": {
      background: "transparent",
    },
  },
  leftButton: {
    borderLeft: "none",
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    border: "1px solid #e0e0e0",
    color: "black",
    padding: 8,
    outline: "none !important",
    "&:hover": {
      background: "transparent",
    },
  },
  selectedButton: {
    cursor: "default",
    background: yellow,
    fontWeight: "bold",
    borderColor: yellow,
    "&:hover": {
      background: yellow,
    },
  },
  listItemText: {
    color: "black",
    fontWeight: "bold",
    "&:hover": {
      color: yellow,
    },
  },
  listItem: {
    "&:hover": {
      background: "transparent",
    },
  },
  itemSelected: {
    fontWeight: 900,
  },
}));

const today = (
  <FormattedMessage id="home.timeList.Today" defaultMessage="Today" />
);
const tomorrow = (
  <FormattedMessage id="home.timeList.Tomorrow" defaultMessage="Tomorrow" />
);
const now = <FormattedMessage id="home.catalog.Now" defaultMessage="Now" />;

const TimeList = forwardRef(
  ({ selectedMenuItem, selectedItem, time, getTimeList, when }, ref) => {
    useEffect(() => {
      getTimeList();
    }, [getTimeList]);

    const classes = useStyles();

    const [activeTime, setActiveTime] = useState(today);
    const setToday = () => setActiveTime(today);
    const setTomorrow = () => setActiveTime(tomorrow);

    const times = activeTime === today ? time.todayTimes : time.tomorrowTimes;

    return (
      <div ref={ref}>
        <div className={classes.buttonsBox}>
          <Button
            className={classNames(
              //classes.rightButton,
              activeTime === today ? classes.selectedButton : ""
            )}
            onClick={setToday}
          >
            {today}
          </Button>
          <Button
            className={classNames(
              //classes.leftButton,
              activeTime === tomorrow ? classes.selectedButton : ""
            )}
            onClick={setTomorrow}
          >
            {tomorrow}
          </Button>
        </div>
        {activeTime === today && (
          <MenuItem
            selected={now === selectedItem && when === now}
            onClick={() => selectedMenuItem(now, now)}
            className={classNames("pr-0 text-center", classes.listItemText)}
          >
            <div className="text-center w-full my-1 text-sm">{now}</div>
          </MenuItem>
        )}
        {times.map((option) => (
          <MenuItem
            className={classNames("pr-0 text-center", classes.listItemText)}
            key={option}
            selected={option === selectedItem && when === activeTime}
            onClick={() => selectedMenuItem(option, activeTime)}
          >
            <div className="text-center w-full my-1 text-sm">{option}</div>
          </MenuItem>
        ))}
      </div>
    );
  }
);

function mapStateToProps(state) {
  return {
    time: state.timeList.time,
    selectedItem: state.menu.selectedItem,
    when: state.menu.when,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      selectedMenuItem,
      getTimeList,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps, null, {
  forwardRef: true,
})(TimeList);
