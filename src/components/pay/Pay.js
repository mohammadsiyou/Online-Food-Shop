import React, { useReducer } from "react";
import {
  TextField,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from "@material-ui/core";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles';
import classNames from "classnames";
import { Link, useRouteMatch } from "react-router-dom";
import { FormattedMessage } from "react-intl";

const useStyles = makeStyles((theme) => ({
  content: {
    margin: "auto",
    display: "flex",
    maxWidth: "672px",
    flexDirection: "column",
  },
  title: {
    fontSize: "33px",
    textAlign: "center",
    paddingTop: "25px",
    fontWeight: "bold",
    lineHeight: "1.5",
  },
  number: {
    color: "#b8b8b8",
    fontSize: "20px",
    textAlign: "center",
    fontWeight: "bold",
    paddingBottom: "50px",
  },
  root: {
    color: "#3f3f3f",
    margin: "0 auto",
    maxWidth: "460px",
    backgroundColor: "#ffffff",
  },
  addCard: {
    margin: "auto",
    padding: "0px",
    maxWidth: "720px",
  },
  form: {
    padding: "30px 40px",
    marginBottom: "40px",
    borderRadius: "8px",
    backgroundColor: "#fafafa",
  },
  width: {
    width: "100%",
  },
  semiwidth: {
    width: "45%",
  },
  boxLabel: {
    color: "#b0b0b0",
    fontSize: "14px",
  },
  disabledBtn: {
    padding: "16px",
    color: "#b0b0b0",
    border: "none",
    background: "#f5f5f5",
    boxShadow: "none",
    borderRadius: "8px",
  },
}));

const useStylesReddit = makeStyles((theme) => ({
  root: {
    border: "1px solid #e0e0e0",
    overflow: "hidden",
    borderRadius: 4,
    backgroundColor: "#fff",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "& .MuiFormLabel-root": {
      color: "#b0b0b0",
      "&.Mui-focused": {
        color: "#b0b0b0",
      },
    },
    "& label.Mui-focused": {
      color: "#b0b0b0",
    },
    "& label.MuiFormLabel-root": {
      color: "#b0b0b0",
      fontSize: "16px",
    },
    "&:hover": {
      backgroundColor: "#fff",
    },
    "&$focused": {
      backgroundColor: "#fff",
      boxShadow: `${fade("#e0e0e0, 0.25")} 0 0 0 2px`,
      borderColor: "#e0e0e0",
      color: "#b0b0b0",
    },
  },
  focused: {},
}));
function RedditTextField(props) {
  const classes = useStylesReddit();

  return (
    <TextField InputProps={{ classes, disableUnderline: true }} {...props} />
  );
}
const GrayCheckbox = withStyles({
  root: {
    color: "#dcdbdb",
    "&:hover, &:focus": {
      backgroundColor: "transparent",
    },
    padding: "3px",
    "&$checked": {
      color: "#b0b0b0",
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const cardNumber = {
  name: <FormattedMessage id="pay.CardNumber" defaultMessage="Card number" />,
};
const cardExpiry = {
  name: <FormattedMessage id="pay.CardExpiry" defaultMessage="Card expiry" />,
};
const cardCvc = {
  name: <FormattedMessage id="pay.CardCvc" defaultMessage="Card cvc" />,
};

const initialState = {
  number: "",
  expiry: "",
  cvc: "",
  checkbox: true,
};
function reducer(state, { field, value }) {
  return {
    ...state,
    [field]: value,
  };
}
const Pay = () => {
  const classes = useStyles();
  const match = useRouteMatch({path: '/:language/:city'}); 
  const [state, dispatch] = useReducer(reducer, initialState);
  const { number, expiry, cvc, checkbox } = state;

  const handleChange = (event) => {
    dispatch({
      field: event.target.name,
      value:
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value,
    });
  };
  const checkboxText = (
    <div className={classes.boxLabel}>
      <FormattedMessage
        id="pay.RememberCard"
        defaultMessage="Remember card for next orders"
      />
    </div>
  );

  return (
    <div className="w-full bg-white">
      <div className={classes.content}>
        <div className={classes.title}>
          <FormattedMessage
            id="pay.OrderPayment"
            defaultMessage="Order payment"
          />
        </div>
        <div className={classes.number}>№ 132565</div>
        <div className={classes.root}>
          <div className={classes.addCard}>
            <form noValidate autoComplete="off">
              <div className={classes.form}>
                <RedditTextField
                  label={cardNumber.name}
                  className={classes.width}
                  value={number}
                  variant="filled"
                  id="number"
                  onChange={handleChange}
                />
                <div className="w-full flex flex-row justify-between mt-10">
                  <RedditTextField
                    label={cardExpiry.name}
                    className={classes.semiwidth}
                    value={expiry}
                    variant="filled"
                    id="expiry"
                    onChange={handleChange}
                  />
                  <RedditTextField
                    label={cardCvc.name}
                    className={classes.semiwidth}
                    value={cvc}
                    variant="filled"
                    id="cvc"
                    onChange={handleChange}
                  />
                </div>
                <FormGroup row className="mt-5">
                  <FormControlLabel
                    control={
                      <GrayCheckbox
                        checked={checkbox}
                        onChange={handleChange}
                        name="checkbox"
                      />
                    }
                    label={checkboxText}
                  />
                </FormGroup>
              </div>
            </form>
          </div>
          <button
            className={classNames(
              classes.disabledBtn,
              "text-center w-full text-lg mb-16"
            )}
          >
            <Link to={`${match.url}/pay`}>
              <span className="w-full h-full relative flex flex-no-wrap items-center">
                <div className="flex mx-auto items-center">
                  <div>
                    <FormattedMessage
                      id="Checkout.Payment"
                      defaultMessage="Payment"
                    />
                  </div>
                  <div className="ml-2">50 ₽</div>
                </div>
              </span>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pay;
