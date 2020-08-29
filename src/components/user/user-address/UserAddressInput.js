import React, { useReducer } from "react";
import { makeStyles } from '@material-ui/core/styles';
import classNames from "classnames";
import { FormattedMessage } from "react-intl";
import { injectIntl } from "react-intl";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { addAddress, editAddress, removeAddress } from "store/user";

import Utils from "assert/Utils";

const useStyles = makeStyles((theme) => ({
  codeInput: {
    height: " 34px",
    border: "1px solid #cccccc",
    boxShadow: "inset 0 1px 3px 0 rgba(0, 0, 0, 0.2)",
    borderRadius: "4px",
    marginTop: "6px",
  },
  gray: {
    color: "#b0b0b0",
  },
  textArea: {
    height: " 54px",
    border: "1px solid #cccccc",
    boxShadow: "inset 0 1px 3px 0 rgba(0, 0, 0, 0.2)",
    borderRadius: "4px",
    marginTop: "6px",
  },
}));

const officeInput = {
  name: (
    <FormattedMessage
      id="home.userAddressInput.Office"
      defaultMessage="SQ / office"
    />
  ),
};
const intercomInput = {
  name: (
    <FormattedMessage
      id="home.userAddressInput.Intercom"
      defaultMessage="Intercom"
    />
  ),
};
const porchInput = {
  name: (
    <FormattedMessage id="home.userAddressInput.Porch" defaultMessage="Porch" />
  ),
};
const floorInput = {
  name: (
    <FormattedMessage id="home.userAddressInput.Floor" defaultMessage="Floor" />
  ),
};
const commentInput = {
  name: (
    <FormattedMessage
      id="home.userAddressInput.Comment"
      defaultMessage="Comment on the order"
    />
  ),
};
const initialState = {
  id: null,
  description: "",
  office: "",
  intercom: "",
  porch: "",
  floor: "",
  comment: "",
  emptyAddress: true,
};

const reducer = (state, { field, value }) => {
  return {
    ...state,
    [field]: value,
  };
};

const UserAddressInput = ({
  intl,
  address,
  addAddress,
  editAddress,
  removeAddress,
  goToBack,
}) => {
  const classes = useStyles();
  const descriptionAddressInput = {
    name: intl.formatMessage({
      id: "home.userAddressInput.DeliveryAddress",
      defaultMessage: "Delivery address",
    }),
  };

  const [state, dispatch] = useReducer(
    reducer,
    Object.assign({}, initialState, address || {})
  );

  const handleChange = (event) => {
    dispatch({ field: event.target.name, value: event.target.value });
  };

  const {
    description,
    office,
    intercom,
    porch,
    floor,
    comment,
  } = state;

  const editAddressClick = () => {
    if (state.id === null) addAddress({ ...state, id: Utils.generateGUID() });
    else editAddress(state);
    goToBack();
  };

  const removeAddressClick = () => {
    if (state.id !== null) removeAddress(address);
    goToBack();
  };
 
  return (
    <>
      <div className="my-3">
        <ul>
          <div>
            <div>
              <input
                name="description"
                value={description}
                onChange={handleChange}
                className={classNames(
                  classes.codeInput,
                  "text-md px-3 py-1 w-full"
                )}
                placeholder={descriptionAddressInput.name}
              />
            </div>
            <div className="flex flex-row w-full mt-2">
              <div className="w-1/5 mr-2">
                <label className={classes.gray}>{officeInput.name}</label>
                <input
                  name="office"
                  value={office}
                  onChange={handleChange}
                  className={classNames(
                    classes.codeInput,
                    "text-md px-3 py-1 w-full"
                  )}
                />
              </div>
              <div className="w-1/3 mr-2">
                <label className={classes.gray}>{intercomInput.name}</label>
                <input
                  name="intercom"
                  value={intercom}
                  onChange={handleChange}
                  className={classNames(
                    classes.codeInput,
                    "text-md px-3 py-1 w-full"
                  )}
                />
              </div>
              <div className="w-1/3 mr-2">
                <label className={classes.gray}>{porchInput.name}</label>
                <input
                  name="porch"
                  value={porch}
                  onChange={handleChange}
                  className={classNames(
                    classes.codeInput,
                    "text-md px-3 py-1 w-full"
                  )}
                />
              </div>
              <div className="w-1/5">
                <label className={classes.gray}>{floorInput.name}</label>
                <input
                  name="floor"
                  value={floor}
                  onChange={handleChange}
                  className={classNames(
                    classes.codeInput,
                    "text-md px-3 py-1 w-full"
                  )}
                />
              </div>
            </div>
            <div className="flex flex-row w-full mt-2">
              <div className="w-full">
                <label className={classes.gray}>{commentInput.name}</label>
                <textarea
                  name="comment"
                  value={comment}
                  onChange={handleChange}
                  maxLength="1000"
                  className={classNames(
                    classes.textArea,
                    "text-md px-3 py-1 w-full"
                  )}
                />
              </div>
            </div>
          </div>
        </ul>
      </div>
      <div className="flex flex-row w-full">
        <button
          className={classNames(
            classes.submitBtn,
            "text-center font-bold p-3 text-base",
            // emptyAddress ? "opacity-25 pointer-events-none" : null
          )}
          onClick={editAddressClick}
          // disabled={address.description.length >0}
        >
          <FormattedMessage id="home.userAddress.Save" defaultMessage="Save" />
        </button>
        <button
          className={classNames(
            classes.moreBtn,
            "text-center py-3 px-4 text-base ml-3"
          )}
          onClick={() => goToBack()}
        >
          <FormattedMessage
            id="home.mobileSearchInput.Cancel"
            defaultMessage="Cancel"
          />
        </button>
        <button
          className={classNames(
            classes.moreBtn,
            "text-center py-3 px-5 text-base ml-auto"
          )}
          onClick={removeAddressClick}
        >
          <FormattedMessage
            id="home.userAddress.Delete"
            defaultMessage="Delete"
          />
        </button>
      </div>
    </>
  );
};
function mapStateToProps(state) {
  return { addressList: state.user.addressList };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      addAddress,
      editAddress,
      removeAddress,
    },
    dispatch
  );
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectIntl(UserAddressInput));
