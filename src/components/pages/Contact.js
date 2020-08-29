import React, { useReducer } from "react";
import { Icon } from "@material-ui/core";
import MetaTags from 'react-meta-tags';
import { FormattedMessage } from "react-intl";
import { injectIntl } from "react-intl";
import { makeStyles } from '@material-ui/core/styles';

import { FaceBook, Twitter, Telegram } from "assert/CustomIcons";

const useStyles = makeStyles(() => ({
  root: {
    margin: "24px 0px",
    "& .headerTitle": {
      fontSize: "30px",
    },
    "& .cart": {
      flex: "1 1 calc(50% - 3em)",
      margin: "1em",
      border: "1px solid #f2f2f2",
      padding: "32px",
      background: "white",
    },
    "& .cartTitle": {
      fontSize: "24px",
      marginBottom: "40px",
    },
    "& .input": {
      width: "100%",
      height: "40px",
      border: "1px solid #cccccc",
      boxShadow: "inset 0 1px 3px 0 rgba(0, 0, 0, 0.2)",
      borderRadius: "4px",
      marginBottom: "24px",
    },
    "& .textarea": {
      height: "150px",
      padding: "8px",
      border: "1px solid #cccccc",
      boxShadow: "inset 0 1px 3px 0 rgba(0, 0, 0, 0.2)",
      borderRadius: "4px",
      marginTop: "6px",
    },
    "& .button": {
      border: " 1px solid rgb(255, 224, 51)",
      backgroundColor: "rgb(255, 224, 51)",
      borderRadius: "3px",
      padding: "12px 16px",
    },
    "& .rightCart": {
      color: "#7e7d8f",
      "& h3": {
        display: "flex",
        marginBottom: "12px",
        fontSize: "20px",
        lineHeight: "1.2",
      },
      "& p": {
        marginBottom: "20px",
        fontSize: "16px",
        lineHeight: "1.5",
      },
      "& a": {
        color: "#7aa3e4",
        margin: "0px 4px",
      },
    },
    "& .social": {
      display: "flex",
      marginTop: "20px",
      paddingLeft: "8px",
      "& *": {
        marginRight: "20px",
        cursor: "pointer",
      },
      "& .facebook": {
        color: "#3b5998",
        borderRadius: "0.125rem",
      },
      "& .twitter": {
        color: "#00acee",
      },
      "& .instagram": {
        backgroundImage: "url(/static/images/footer/instagram.png)",
        backgroundRepeat: "no-repeat",
        width: "24px",
        height: "24px",
      },
      "& .telegram": {
        color: "#08C",
      },
    },
  },
}));

const initialState = {
  name: "",
  email: "",
  message: "",
};

const reducer = (state, { field, value }) => {
  return {
    ...state,
    [field]: value,
  };
};

const Contact = ({ intl }) => {
  const classes = useStyles();

  const ArrowRight = () => (
    <Icon className="text-green-300">arrow_forward_ios</Icon>
  );

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (event) => {
    dispatch({ field: event.target.name, value: event.target.value });
  };

  const { name, email, message } = state;

  return (
    <div className={classes.root}>
      <MetaTags>
        <title>about me </title>
      </MetaTags>
      <h1 className="headerTitle ml-4 md:ml-0 py-3 md:py-0">
        <FormattedMessage
          id="home.SideBarFooter.ContactUS"
          defaultMessage="Contact us"
        />
      </h1>
      <div className="flex flex-wrap my-6">
        <div className="cart">
          <div className="cartTitle">
            <FormattedMessage
              id="contact.ContactUsHere"
              defaultMessage="Contact us here"
            />
          </div>
          <input
            className="input text-md px-3 py-1"
            placeholder={intl.formatMessage({
              id: "home.userInfoInput.YourName",
              defaultMessage: "Your name",
            })}
            name="name"
            value={name}
            onChange={handleChange}
          />

          <input
            className="input text-md px-3 py-1"
            placeholder={intl.formatMessage({
              id: "home.userInfoInput.Email",
              defaultMessage: "Email",
            })}
            name="email"
            value={email}
            onChange={handleChange}
          />

          <textarea
            maxLength="10000"
            className="textarea text-md px-3 py-1 w-full"
            placeholder={intl.formatMessage({
              id: "contact.Message",
              defaultMessage: "Message",
            })}
            name="message"
            value={message}
            onChange={handleChange}
          />

          <button className="button flex-1 text-center font-bold mt-5 text-base">
            <FormattedMessage
              id="home.userInfo.SaveChanges"
              defaultMessage="Save changes"
            />
          </button>
        </div>
        <div className="cart rightCart">
          <h3>
            <ArrowRight />
            <FormattedMessage
              id="contact.Telephone"
              defaultMessage="Telephone (weekdays 9:00am - 5:00pm)"
            />
          </h3>
          <p>
            0203 151 0012 -
            <FormattedMessage
              id="contact.GeneralEnquiries"
              defaultMessage="General enquiries"
            />
          </p>
          <h3>
            <ArrowRight />
            <FormattedMessage
              id="contact.PostalAddress"
              defaultMessage="Our Postal Address"
            />
          </h3>
          <p>
            <FormattedMessage
              id="contact.PostalAddress"
              defaultMessage="Our Postal Address"
            />

            <FormattedMessage
              id="contact.OfficePostalAddress"
              defaultMessage="Mashhad - Way around sanabad - Between Qa'im and Pasteur, plaque 210
              of the first floor"
            />
          </p>
          <h3>
            <ArrowRight />
            <FormattedMessage
              id="home.userInfoInput.Email"
              defaultMessage="Email"
            />
          </h3>
          <p>
            <FormattedMessage
              id="contact.GeneralEnquiries"
              defaultMessage="General enquiries"
            />
            :{" "}
            <a href="mailto:mohammadcj003@gmail.com">mohammadcj003@gmail.com</a>
            <FormattedMessage
              id="contact.ContactDeveloper"
              defaultMessage="for Tutor Hunt members, please use the contact form as we can validate your details quicker Press / Advertising"
            />
            : <a href="mailto:info@pdf.co.ir">info@pdf.co.ir</a>
          </p>
          <h3>
            <ArrowRight />
            <FormattedMessage
              id="contact.GeneralEnquiries"
              defaultMessage="General enquiries"
            />
            :{" "}
          </h3>
          <p>130 5954 26</p>
          <h3>
            <ArrowRight />
            <FormattedMessage
              id="contact.Social"
              defaultMessage="Social"
            />
          </h3>
          <div className="social">
            <FaceBook className="facebook" />
            <Twitter className="twitter" />
            <div className="instagram" />
            <Telegram className="telegram" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default injectIntl(Contact);
