import React from "react";
import { Icon, InputBase } from "@material-ui/core";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import classNames from "classnames";
import { FormattedMessage } from "react-intl";
import { injectIntl } from "react-intl";

import { openMenu } from "store/menu";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import CartStyles from "../cart/CartStyles";
import CheckoutStyles from "./CheckoutStyles";
import TimeList from "../widgets/TimeList";

const useStyles = makeStyles((theme) => ({
  ...CartStyles,
  ...CheckoutStyles(theme),
}));

const Symbol = "€";

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

const StyledRadio = (props) => {
  const classes = useStyles();

  return (
    <Radio
      className={classes.radioRoot}
      disableRipple
      color="default"
      checkedIcon={
        <Icon style={{ color: "#ffe033" }}>radio_button_checked</Icon>
      }
      icon={<Icon>radio_button_unchecked</Icon>}
      {...props}
    />
  );
};
const min = (
  <FormattedMessage id="restaurant.cart.Minute" defaultMessage="Min" />
);
const Checkout = ({ openMenu, selectedItem, intl }) => {
  const classes = useStyles();
  const [payment, setPayment] = React.useState("cash");

  const paymentChange = (event) => {
    setPayment(event.target.value);
  };

  const timeClick = (event) => {
    openMenu(event.currentTarget, {
      children: <TimeList />,
      classes: { paper: "w-64 h-auto" },
    });
  };

  return (
    <div className={classes.checkoutPageIndexRoot}>
      <div className={classes.checkoutPageIndexContentWrapper}>
        <div className={classes.checkoutPageIndexContent}>
          <div className={classes.checkoutPageIndexFormWithMeta}>
            <div className={classes.checkoutPageIndexFormWrapper}>
              <div className={classes.checkoutPageIndexForm}>
                <div className={classes.checkoutPageFormGroup}>
                  <div className={classes.checkoutPageFormAddressTitle}>
                    <FormattedMessage
                      id="home.userAddressInput.DeliveryAddress"
                      defaultMessage="Delivery address"
                    />
                  </div>
                  <div
                    className={classNames(
                      classes.checkoutPageFormAddressInputs,
                      classes.marginFirstAddress
                    )}
                  >
                    <div
                      className={classNames(
                        classes.uIInputComponentContainer,
                        classes.disabledInput
                      )}
                    >
                      <InputBase
                        placeholder={intl.formatMessage({
                          id: "home.userAddressInput.DeliveryAddress",
                          defaultMessage: "Delivery address",
                        })}
                        disabled
                      />
                    </div>
                  </div>
                  <div
                    className={classNames(
                      classes.checkoutPageFormAddressInputs,
                      "flex"
                    )}
                  >
                    <div className={classes.checkoutPageFormAddressInput}>
                      <label
                        htmlFor="id_1"
                        className={classes.uIInputComponentLabel}
                      >
                        {officeInput.name}
                      </label>
                      <div
                        className={classNames(
                          classes.uIInputComponentContainer,
                          "h-8"
                        )}
                      >
                        <InputBase
                          id="id_1"
                          classes={{ root: classes.uIInputComponentInput }}
                        />
                      </div>
                    </div>
                    <div className={classes.checkoutPageFormAddressInput}>
                      <label
                        htmlFor="id_2"
                        className={classes.uIInputComponentLabel}
                      >
                        {intercomInput.name}
                      </label>
                      <div
                        className={classNames(
                          classes.uIInputComponentContainer,
                          "h-8"
                        )}
                      >
                        <InputBase
                          id="id_2"
                          classes={{ root: classes.uIInputComponentInput }}
                        />
                      </div>
                    </div>
                    <div className={classes.checkoutPageFormAddressInput}>
                      <label
                        htmlFor="id_3"
                        className={classes.uIInputComponentLabel}
                      >
                        {porchInput.name}
                      </label>
                      <div
                        className={classNames(
                          classes.uIInputComponentContainer,
                          "h-8"
                        )}
                      >
                        <InputBase
                          id="id_3"
                          classes={{ root: classes.uIInputComponentInput }}
                        />
                      </div>
                    </div>
                    <div className={classes.checkoutPageFormAddressInput}>
                      <label
                        htmlFor="id_4"
                        className={classes.uIInputComponentLabel}
                      >
                        {floorInput.name}
                      </label>
                      <div
                        className={classNames(
                          classes.uIInputComponentContainer,
                          "h-8"
                        )}
                      >
                        <InputBase
                          id="id_4"
                          classes={{ root: classes.uIInputComponentInput }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className={classes.checkoutPageFormAddressInputs}>
                    <div className={classes.checkoutPageFormAddressInput}>
                      <label
                        htmlFor="id_5"
                        className={classes.uIInputComponentLabel}
                      >
                        {commentInput.name}
                      </label>
                      <div
                        className={classNames(
                          classes.uIInputComponentContainer,
                          "h-24"
                        )}
                      >
                        <InputBase
                          id="id_5"
                          classes={{ root: classes.uIInputComponentInput }}
                          multiline={true}
                          rows={3}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={classes.checkoutPageFormGroup}>
                  <div>
                    <div className={classes.checkoutPageFormAddressTitle}>
                      <FormattedMessage
                        id="Checkout.Payment"
                        defaultMessage="Payment"
                      />
                    </div>
                    <FormControl component="fieldset">
                      <RadioGroup
                        aria-label="payment"
                        name="payment"
                        value={payment}
                        onChange={paymentChange}
                      >
                        <FormControlLabel
                          value="credit"
                          control={<StyledRadio />}
                          label={
                            <FormattedMessage
                              id="Checkout.CreditCardPayment"
                              defaultMessage="Credit card payment"
                            />
                          }
                        />
                        <div>
                          {payment === "credit" && (
                            <div className={classes.paymentDesWrapper}>
                              <div className={classes.radioContentDescription}>
                                <FormattedMessage
                                  id="Checkout.FreezeCreditCard"
                                  defaultMessage="We will freeze the order amount on your card and write off after delivery"
                                />
                              </div>
                              <div
                                className={classNames(
                                  classes.uIInputComponentContainer,
                                  "h-8"
                                )}
                              >
                                <InputBase
                                  id="id_6"
                                  classes={{
                                    root: classes.uIInputComponentInput,
                                  }}
                                />
                                <div className={classes.yellowButton}>
                                  <FormattedMessage
                                    id="Checkout.Apply"
                                    defaultMessage="Apply"
                                  />
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                        <FormControlLabel
                          value="cash"
                          control={<StyledRadio />}
                          label={
                            <FormattedMessage
                              id="Checkout.CashPayment"
                              defaultMessage="Cash payment"
                            />
                          }
                        />
                        <div>
                          {payment === "cash" && (
                            <div className={classes.paymentDesWrapper}>
                              <div className={classes.radioContentDescription}>
                                <FormattedMessage
                                  id="Checkout.FreezeCreditCard"
                                  defaultMessage="We will freeze the order amount on your card and write off after delivery"
                                />
                              </div>
                              <div
                                className={classNames(
                                  classes.uIInputComponentContainer,
                                  "h-8"
                                )}
                              >
                                <InputBase
                                  id="id_6"
                                  classes={{
                                    root: classes.uIInputComponentInput,
                                  }}
                                />
                                <div className={classes.yellowButton}>
                                  <FormattedMessage
                                    id="Checkout.Apply"
                                    defaultMessage="Apply"
                                  />
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </RadioGroup>
                    </FormControl>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.checkoutPageIndexMeta}>
              <div className={classes.checkoutPageMetaRoot}>
                <div className={classes.checkoutPageMetaDelivery}>
                  <div className={classes.uIYandexDeliveryContent}>
                    <div className={classes.uIYandexDeliveryIcon}></div>
                    <div className={classes.uIYandexDeliveryTriangle}></div>
                  </div>
                </div>
                <div className={classes.checkoutPageMetaDeliveryTime}>
                  <div className={classes.checkoutPageMetaDeliveryTimeTitle}>
                    <FormattedMessage
                      id="restaurant.cart.DeliveryTime"
                      defaultMessage="Time of delivery"
                    />
                  </div>
                  <div
                    className={classes.checkoutPageMetaDeliveryTimeValue}
                    onClick={timeClick}
                  >
                    <span>
                      {selectedItem === null ? " 20 — 30" && min : selectedItem}
                    </span>
                    <span className={classes.checkoutPageMetaPencilIcon}></span>
                  </div>
                </div>
                <div className={classes.checkoutPageMetaTotalPrice}>
                  <div className={classes.checkoutPageMetaTotalPriceTitle}>
                    <FormattedMessage
                      id="restaurant.cart.Total"
                      defaultMessage="Total"
                    />
                  </div>
                  <div className={classes.checkoutPageMetaTotalPriceValue}>
                    553 {Symbol}
                  </div>
                </div>
                <div className={classes.checkoutPageMetaDivider}></div>
                <div className={classes.checkoutPageMetaCutlery}>
                  <div className={classes.checkoutPageMetaCutleryTitle}>
                    <FormattedMessage
                      id="Checkout.AppliancesNum"
                      defaultMessage="Number of appliances"
                    />
                  </div>
                  <div className={classes.checkoutPageMetaCutleryValue}>
                    <div
                      className={classes.checkoutPageMetaCutleryValueCounter}
                    >
                      <div className={classes.uICounterRoot}>
                        <div
                          className={
                            classes.checkoutPageMetaCutleryValueCounterControl
                          }
                        >
                          -
                        </div>
                        <div
                          className={
                            classes.checkoutPageMetaCutleryValueCounterValue
                          }
                        >
                          1
                        </div>
                        <div
                          className={
                            classes.checkoutPageMetaCutleryValueCounterControl
                          }
                        >
                          +
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.checkoutPageIndexButton}>
            <div
              className={classNames(
                classes.uIAnimatedButtonRoot,
                classes.uIAnimatedButtonYellow
              )}
            >
              <FormattedMessage
                id="Checkout.ContinueCheckout"
                defaultMessage="Proceed to checkout"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={classes.checkoutPageIndexSidebarWrapper}>
        <div className={classes.checkoutPageIndexSidebar}>
          <div className={classes.appCartRoot}>
            <div className={classes.appCartContent}>
              <div className={classes.appCartTopLine}>
                <div className="text-lg font-bold mr-auto">
                  <FormattedMessage
                    id="restaurant.cart.MyOrder"
                    defaultMessage="My order"
                  />
                </div>
              </div>
              <div className={classes.appCartOrderInfo}>
                <div className={classes.appCartItem}>
                  <div className="flex">
                    <div className={classes.appCartItemInfo}>
                      <span className={classes.appCartItemName}>
                        Пицца Цыпленок Барбекю
                      </span>
                      <span className={classes.appCartItemWeight}>350 г</span>
                    </div>
                    <div className={classes.appCartItemQuantityContainer}>
                      <div className={classes.appCartItemIncrement}>+</div>
                      <div className={classes.appCartItemQuantity}>2</div>
                      <div
                        className={classNames(
                          classes.appCartItemDecrement,
                          classes.appCartItemRemove
                        )}
                      >
                        ×
                      </div>
                    </div>
                    <div className={classes.appCartItemPrice}>
                      <span>229 {Symbol}</span>
                    </div>
                  </div>
                  <div className={classes.appCartItemOptions}>
                    <div>
                      <span>Убрать: сыр моцарелла</span>
                    </div>
                    <div>
                      <span>Ароматная свинина</span>
                    </div>
                    <div>
                      <span>Ветчина</span>
                    </div>
                  </div>
                </div>
                <div className={classes.appCartItem}>
                  <div className="flex">
                    <div className={classes.appCartItemInfo}>
                      <span className={classes.appCartItemName}>Пепперони</span>
                      <span className={classes.appCartItemWeight}>350 г</span>
                    </div>
                    <div className={classes.appCartItemQuantityContainer}>
                      <div className={classes.appCartItemIncrement}>+</div>
                      <div className={classes.appCartItemQuantity}>2</div>
                      <div
                        className={classNames(
                          classes.appCartItemRemove,
                          classes.appCartItemDecrement
                        )}
                      >
                        ×
                      </div>
                    </div>
                    <div className={classes.appCartItemPrice}>
                      <span>229 {Symbol}</span>
                    </div>
                  </div>
                  <div className={classes.appCartItemOptions}>
                    <div>
                      <span>Убрать: сыр моцарелла</span>
                    </div>
                    <div>
                      <span>Ароматная свинина</span>
                    </div>
                    <div>
                      <span>Ветчина</span>
                    </div>
                  </div>
                </div>
                <div className={classes.appCartItem}>
                  <div className="flex">
                    <div className={classes.appCartPromoItemName}>
                      <FormattedMessage
                        id="restaurant.cart.Discount"
                        defaultMessage="Discount"
                      />{" "}
                      30%
                    </div>
                    <div className={classes.appCartPromoItemAmount}>
                      -144 {Symbol}
                    </div>
                  </div>
                </div>
              </div>
              <div className={classes.appCartDivider}></div>
              <div className={classes.appCartDeliveryFee}>
                <div className={classes.appCartDeliveryFeeName}>
                  <FormattedMessage
                    id="home.catalog.Delivery"
                    defaultMessage="Delivery"
                  />
                </div>
                <div className={classes.appCartDeliveryFeeValue}>
                  <span>0 {Symbol}</span>
                </div>
              </div>
            </div>
            <div className={classes.appCartMeta}>
              <div className={classes.appCartDeliveryTime}>
                <div className={classes.appCartDeliveryTimeTitle}>
                  <FormattedMessage
                    id="restaurant.cart.DeliveryTime"
                    defaultMessage="Time of delivery"
                  />
                </div>
                <div className={classes.appCartDeliveryTimeValue}>
                  <span>20 — 30 {min}</span>
                </div>
              </div>
              <div className={classes.appCartTotalPrice}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    selectedItem: state.menu.selectedItem,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      openMenu,
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectIntl(Checkout));
