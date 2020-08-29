import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import classNames from "classnames";
import { FormattedMessage } from "react-intl";

import { connect } from "react-redux";
import { openDialog } from "store/dialog";
import { bindActionCreators } from "redux";

import InfoModal from "./InfoModal";

const useStyles = makeStyles((theme) => ({
  menuList: {
    background: "#ffffff",
    borderTop: "1px solid rgba(0,0,0,.05)",
    marginTop: "8px",
    borderBottom: "1px solid rgba(0,0,0,.05)",
    marginBottom: "8px",
  },
  menuIcon: {
    width: "24px",
    height: " 24px",
    display: "inline-block",
    backgroundSize: "24px 24px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  dialogPaper: {
    height: "100%",
    width: "100%",
    margin: 0,
    maxWidth: "none",
    borderRadius: 0,
  },
}));

const infoIcon = {
  src: "/static/images/header/login.svg",
  alt: "information",
};

const MobileUserInfo = ({ openDialog }) => {
  const classes = useStyles();

  const InfoButton = () => (
    <button
      onClick={() =>
        openDialog({
          children: <InfoModal />,
          fullScreen: true,
          scroll: "paper",
          classes: { paper: classes.dialogPaper },
        })
      }
      className={classNames("text-black flex items-center p-5 text-md w-full")}
    >
      <div className={classes.menuIcon}>
        <img alt={infoIcon.alt} src={infoIcon.src} />
      </div>
      <div className="rtl:mr-2 ltr:ml-2">
        <FormattedMessage id="header.myInfo" defaultMessage="My Information" />
      </div>
    </button>
  );
  return <InfoButton />;
};
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      openDialog,
    },
    dispatch
  );
}
export default connect(null, mapDispatchToProps)(MobileUserInfo);
