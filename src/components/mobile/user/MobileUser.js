import React from "react";
import { Divider } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

import MobileUserOrder from "./orders/MobileUserOrder";
import MobileUserInfo from "./info/MobileUserInfo";
import MobileUserLogout from "./logout/MobileUserLogout";
import MobileUserAddress from "../address/MobileUserAddress";

const useStyles = makeStyles((theme) => ({
  divid: {
    backgroundColor: "rgba(0, 0, 0, 0.05)",
  },
}));

const MobileUser = () => {
  const classes = useStyles();

  return (
    <>
      <MobileUserOrder />
      <Divider className={classes.divid} />
      <MobileUserInfo />
      <Divider className={classes.divid} />
      <MobileUserAddress />
      <Divider className={classes.divid} />
      <MobileUserLogout />
    </>
  );
};

export default MobileUser;
