import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { FormattedMessage } from "react-intl";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { openDialog } from "store/dialog";

import Card from "../Card";

const useStyles = makeStyles(() => ({
  root: {
    marginTop: "32px",
    "& .header > div > span": {
      color: "#63b3ed",
    },
    "& .content .imageItem": {
      overflow: "hidden",
      borderRadius: "4px",
      backgroundSize: "240px",
      backgroundColor: "#f5f5f5",
      backgroundImage: "url(/static/images/icons/fallback-pattern.svg)",
      backgroundPosition: "center",
      cursor: "pointer",
    },
  },
}));


const Photos = ({ openDialog, list }) => {
  const classes = useStyles();

  const Header = () => (
    <div>
      <FormattedMessage
        id="profile.photos.MorePhotos"
        defaultMessage="More photos"
      />
      (<span>{list.length}</span>)
    </div>
  );

  const ImageDialog = ({ address }) => (
    <div className="imageItem h-64">
      <div
        className="h-full w-auto bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${address})` }}
      />
    </div>
  );

  const imageClick = (address) => {
    openDialog({
      children: <ImageDialog address={address} />,
      maxWidth: "xs",
      fullWidth: true,
      fullScreen: false,
      scroll: "body",
      classes: { paper: "m-0 md:m-48" },
    });
  };

  const Content = () => (
    <div className="flex overflow-x-auto">
      {list.map(({ url }, index) => (
        <div
          className="imageItem h-48 w-56 mr-2 flex-none"
          key={index}
          onClick={() => imageClick(url)}
        >
          <div
            className="h-full w-auto bg-cover bg-no-repeat bg-center"
            style={{ backgroundImage: `url(${url})` }}
          />
        </div>
      ))}
    </div>
  );

  return <Card Header={Header} Content={Content} className={classes.root} />;
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      openDialog,
    },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(Photos);
