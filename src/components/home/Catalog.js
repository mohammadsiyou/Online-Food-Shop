import React, { useState, useEffect } from "react";
import { Icon } from "@material-ui/core";
import useAutocomplete from "@material-ui/lab/useAutocomplete";
import classNames from "classnames";
import { FormattedMessage } from "react-intl";
import { injectIntl } from "react-intl";
import { makeStyles } from '@material-ui/core/styles';

import { connect } from "react-redux";
import { setSearchText } from "store/restaurant";
import { openMenu } from "store/menu";
import { bindActionCreators } from "redux";

import TimeList from "../widgets/TimeList";

const yellow = "rgb(255, 224, 51)";
const searchPlace = [
  {
    name: "Смузи бар Te Gusto",
    tags: ["Вегетарианская", "Здоровая еда", "Веганская"],
    image:
      "/static/images/restaurants/34185a36ace211be649797390d18db99-100x100.jpg",
  },
  {
    name: "Смузи бар Te Gusto",
    tags: ["Вегетарианская", "Здоровая еда", "Веганская"],
    image:
      "/static/images/restaurants/34185a36ace211be649797390d18db99-100x100.jpg",
  },
  {
    name: "Смузи бар Te Gusto",
    tags: ["Вегетарианская", "Здоровая еда", "Веганская"],
    image:
      "/static/images/restaurants/34185a36ace211be649797390d18db99-100x100.jpg",
  },
  {
    name: "Смузи бар Te Gusto",
    tags: ["Вегетарианская", "Здоровая еда", "Веганская"],
    image:
      "/static/images/restaurants/34185a36ace211be649797390d18db99-100x100.jpg",
  },
  {
    name: "Смузи бар Te Gusto",
    tags: ["Вегетарианская", "Здоровая еда", "Веганская"],
    image:
      "/static/images/restaurants/34185a36ace211be649797390d18db99-100x100.jpg",
  },
  {
    name: "Смузи бар Te Gusto",
    tags: ["Вегетарианская", "Здоровая еда", "Веганская"],
    image:
      "/static/images/restaurants/34185a36ace211be649797390d18db99-100x100.jpg",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "20px 80px",
    borderBottom: "8px solid #fafafa",
  },
  input: {
    border: "1px solid #e8e8e8",
  },
  timeBox: {
    height:"100%",
    color: "gray",
    border: "1px solid #eee",
    padding: "0 5px",
    position: "relative",
    background: "linear-gradient(to bottom, #ffffff, #f5f5f5)",
    borderRadius: 3,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    cursor: "pointer",
    marginLeft: 16,
    minWidth: 300,
  },
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
  listbox:{
    boxShadow: "0 2px 7px 0 rgba(0, 0, 0, 0.15)",
  },
  searchPlaceRoot: {
    display: "flex",
    margin: "10px 20px",
    minHeight: "54px",
    alignItems: "flex-start",
    padding: "20px 0px",
    borderBottom: "1px solid #eee",

  },
  bgLoading: {
    backgroundSize: "240px",
    backgroundImage: "url(/static/images/restaurants/fallback-pattern.svg)",
    backgroundColor: "#f5f5f5",
    backgroundPosition: "center",
    width: "36px",
    float: "left",
    height: "36px",
    overflow: "hidden",
    marginTop: "7px",
    marginRight: "16px",
    borderRadius: "8px",
  },
  placeImage: {
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  placeInfo: {
    flex: "1",
    marginTop: "6px",
    paddingRight: "20px",
  },
  placeTag: {
    height: "16px",
    display: "flex",
    overflow: "hidden",
    flexWrap: "wrap",
    alignItems: "center",
    color: " #b0b0b0",
  },
  timeWrapper:{
	  width:'100%',
	  padding:'0px',
  },
}));

const now = <FormattedMessage id="home.catalog.Now" defaultMessage="Now" />;
const delivery = (
  <FormattedMessage id="home.catalog.Delivery" defaultMessage="Delivery" />
);

const Catalog = ({ setSearchText, openMenu, selectedItem, intl }) => {
  const classes = useStyles();
  const search = {
    input: intl.formatMessage({
      id: "home.catalog.SearchInput",
      defaultMessage: "Name, cuisine or dish",
    }),
  };

  const timeClick = (event) => {
    openMenu(event.currentTarget, {
      children: <TimeList />,
      classes: { list: classes.timeWrapper },
    });
  };

  const [options, setOptions] = useState([]);
  const [input, setInput] = useState("");
  const inputChange = (event) => setInput(event.target.value);

  useEffect(() => {
    if (input === "") {
      setOptions([]);
      return undefined;
    }
    const result = searchPlace.filter(
      (item) => item.name.toLocaleLowerCase().indexOf(input) > -1
    );

    setOptions(result);
  }, [input]);

  const {
    getRootProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
  } = useAutocomplete({
    getOptionLabel: (option) => option.name,
    options: options,
    clearOnEscape: true,
    onInputChange: inputChange,
  });
  return (
    <div className={classes.root}>
      <div
        className={classNames(
          "flex flex-row flex-no-wrap h-12 items-center rounded bg-white"
        )}
      >
        <div {...getRootProps()} className={classNames("w-11/12 h-full flex flex-no-wrap",
           classes.input)}>
          <Icon className="mx-4 my-auto">search</Icon>
          <input
            {...getInputProps()}
            placeholder={search.input}
            className="w-full"
          />
        </div>

        <div className={classes.timeBox} onClick={timeClick}>
          <Icon className="mx-4">access_time</Icon>
          <div className="text-black">
            {delivery} :{selectedItem === null ? now : selectedItem}
          </div>
          <Icon className="mx-4">keyboard_arrow_down</Icon>
        </div>
      </div>
      <ul className={classes.listbox} {...getListboxProps()}>
        {groupedOptions.map((option, index) => (
          <li
            {...getOptionProps({ option, index })}
            className={classes.searchPlaceRoot}
            key={index}
          >
            <div className={classes.bgLoading}>
              <img
                src={option.image}
                className={classes.placeImage}
                alt={option.name}
              />
            </div>
            <div className={classes.placeInfo}>
              <div className="font-bold text-xl leading-tight">
                {option.name}
              </div>
              <ul className={classes.placeTag}>
                {option.tags.map((tag) => (
                  <li className="text-sm mr-3" key={tag}>
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    time: state.timeList.time,
    selectedItem: state.menu.selectedItem,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      setSearchText,
      openMenu,
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectIntl(Catalog));
