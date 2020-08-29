import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { FormattedMessage } from "react-intl";

import Card from "../Card";

const useStyles = makeStyles(() => ({
  root: {
    marginTop: "32px",
    width: "100%",
    "& .header span": {
      color: "#7aa3e6",
    },
    "& .content .item": {
      padding: "12px 0px",
      marginTop: "4px",
      borderBottom: "1px #ebebeb solid",
      "& .name": {
        color: "#7aa3e6",
        fontWeight: "500",
      },
    },
  },
}));

const Qualifications = ({list}) => { 
  const classes = useStyles();

  const Header = () => (
    <FormattedMessage id="profile.qualifications.Qualifications" defaultMessage="Qualifications" />
  );

  const Content = () => (
    <div>
      {list.map(
        ({ title:name, status, subtitle, description, date }, index) => (
          <div className="item" key={index}>
            <div className="flex justify-between items-center">
              <div className="name capitalize flex-1">{name}</div>
              <div className="bg-green-300 text-white p-1 uppercase">
                {status}
              </div>
            </div>
            <div className="font-bold my-2">{subtitle}</div>
            <div className="my-1">{description}</div>
            <div className="">{date}</div>
          </div>
        )
      )}
    </div>
  );

  return <Card Header={Header} Content={Content} className={classes.root} />;
};
export default Qualifications;
