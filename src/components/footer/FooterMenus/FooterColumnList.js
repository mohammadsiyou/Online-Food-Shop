import React from "react";
import { Link } from "react-router-dom";

const FooterColumnList = (props) => {
  const { footerList, showMore } = props;
  return (
    <>
      {!showMore
        ? footerList.slice(0, 6).map((list, index) => (
            <li className="my-5" key={index}>
              <Link to={list.link}>{list.text}</Link>
            </li>
          ))
        : footerList.map((list, index) => (
            <li className="my-5" key={index}>
              <Link to={list.link}>{list.text}</Link>
            </li>
          ))}
    </>
  );
};

export default FooterColumnList;
