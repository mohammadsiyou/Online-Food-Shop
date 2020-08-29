import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import classNames from "classnames";

const useStyles = makeStyles(() => ({
  root: {
    "& .card": {
      padding: "20px 16px",
      border: "1px solid #f2f2f2",
      background: "white",
      "& .header": {
        fontSize: "24px",
        marginBottom: "16px",
      },
      "& .content": {
        color: "#4f4e4e",
        lineHeight: "20px",
        fontSize: "17px",
        padding: "0px 8px",
      },
    },
  },
}));

const Card = ({ className, Header, Content }) => {
  const classes = useStyles();

  return (
    <div className={classNames(classes.root, className)}>
      <div className="card">
        <div className="header">
          <Header />
        </div>
        <div className="content">
          <Content />
        </div>
      </div>
    </div>
  );
};
export default Card;
