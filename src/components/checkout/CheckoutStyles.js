export default (theme) => ({
  checkoutPageIndexRoot: {
    display: "flex",
    minHeight: "calc(100vh - 130px)",
    alignItems: "stretch",
    marginBottom: "10px",
  },
  checkoutPageIndexContentWrapper: {
    flex: "1 1 auto",
    [theme.breakpoints.down("md")]: {
      width: "300px",
    },
  },
  checkoutPageIndexSidebarWrapper: {
    flex: "0 0 310px",
    position: "relative",
    marginLeft: "10px",
    [theme.breakpoints.down("md")]: {
      flex: "0 0 260px",
    },
  },
  checkoutPageIndexContent: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  checkoutPageIndexFormWithMeta: {
    flex: "1 1 auto",
    display: "flex",
    borderRadius: "4px",
    flexDirection: "column",
    backgroundColor: "#f2f2f2",
  },
  checkoutPageIndexButton: {
    marginTop: "10px",
  },
  checkoutPageIndexFormWrapper: {
    flex: "1 1 auto",
    padding: "13px 40px",
    overflowX: "auto",
    overflowY: "auto",
    [theme.breakpoints.down("md")]: {
      padding: "13px 8px",
    },
  },
  checkoutPageIndexMeta: {
    flex: "0 0 auto",
  },
  checkoutPageIndexForm: {
    maxWidth: "400px",
  },
  checkoutPageFormGroup: {
    //'padding': '10px 0',
  },
  checkoutPageFormAddressTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "12px",
    marginTop: "12px",
  },
  checkoutPageFormAddressInputs: {
    margin: "12px 0",
  },
  uIInputComponentContainer: {
    display: "flex",
    border: "1px solid #cecece",
    position: "relative",
    overflow: "hidden",
    fontSize: "16px",
    background: "#ffffff",
    boxShadow: "inset 0 1px 3px 0 rgba(0, 0, 0, 0.2)",
    lineHeight: "1.15",
    borderRadius: "4px",
  },
  disabledInput: {
    backgroundColor: "#e6e6e6",
    height: "32px",
    padding: "0px 8px",
  },
  uIInputComponentInput: {
    flex: "1 1 auto",
    height: "100%",
    resize: "vertical",
    border: "none",
    padding: "7px 10px",
    outline: "none",
    fontSize: "16px",
    boxShadow: "none",
    lineHeight: "1.15",
    borderRadius: "0",
    backgroundColor: "transparent",
  },
  checkoutPageFormAddressInput: {
    flex: "1",
    margin: "0 5px",
    marginBottom: "10px",
  },
  uIInputComponentLabel: {
    color: "#b0b0b0",
    display: "block",
    fontSize: "14px",
    marginBottom: "5px",
  },
  marginFirstAddress: {
    margin: "0px 5px",
  },
  radioRoot: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  radioContentDescription: {
    color: "#b0b0b0",
    fontSize: "14px",
    marginBottom: "10px",
  },
  yellowButton: {
    flex: "0 0 auto",
    width: "auto",
    height: "auto",
    fontSize: "14px",
    minHeight: "auto",
    borderRadius: "0",
    background: "rgb(255, 224, 51)",
    fontWeight: "bold",
    padding: "0 8px",
    cursor: "default",
    display: "flex",
    alignItems: "center",
  },
  paymentDesWrapper: {
    paddingLeft: "28px",
    marginBottom: "8px",
  },
  checkoutPageMetaRoot: {
    width: "100%",
    display: "flex",
    padding: "20px 40px",
    position: "relative",
    borderTop: "solid 1px #dbdbdb",
    [theme.breakpoints.down("md")]: {
      padding: "20px 8px",
    },
  },
  checkoutPageMetaDelivery: {
    width: "37px",
    height: "42px",
    position: "relative",
    marginRight: "15px",
  },
  checkoutPageMetaDeliveryTime: {},
  checkoutPageMetaTotalPrice: {
    marginLeft: "60px",
    marginRight: "auto",
    [theme.breakpoints.down("md")]: {
      marginLeft: "8px",
    },
  },
  checkoutPageMetaDivider: {
    margin: "-20px 40px",
    padding: "20px 0",
    position: "relative",
    borderLeft: "solid 1px #dbdbdb",
    [theme.breakpoints.down("md")]: {
      margin: "-20px 8px",
    },
  },
  checkoutPageMetaCutlery: {
    display: "flex",
    marginTop: "10px",
    alignItems: "center",
  },
  uIYandexDeliveryContent: {
    width: "28px",
    backgroundColor: "#ffe033",
    borderTopLeftRadius: "3px",
    borderBottomLeftRadius: "3px",
  },
  uIYandexDeliveryIcon: {
    width: "24px",
    height: "24px",
    padding: "9px 0",
    zIndex: "2",
    position: "relative",
    boxSizing: "content-box",
    marginLeft: "5px",
    backgroundSize: "100%",
    backgroundImage:
      "url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoMjB2MjBIMHoiLz48ZyBzdHJva2U9IiMwMDAiPjxwYXRoIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik04Ljg1NyA5LjE0M2MwIC43Ni0xLjE0MyAxLjQ1NS0xLjE0MyAyLjU0NyAwIC42Mi40OTkuODEgMS4xNDMuODFIMTBjMS4xMjYgMCA2LjA4LTQuNTQyIDUuMTQyLTYuOTkiLz48cGF0aCBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik0xNi4xODkgMTMuNDFhMS43MTQgMS43MTQgMCAxIDEtMy4xODkuODc1YzAtLjE4Mi4xMzItLjYxNy4zMzMtLjc5OCIvPjxwYXRoIGQ9Ik0xMy4wMTUgNC4wMDVjMi43NzQuMDM1IDQuODI1IDcuNDg5IDQuODI1IDkuMDgxIDAgLjI5Ni0uMTg4LjU3NC0uNTYzLjgzNS0uNjcyLS42MTQtLjg3My0uNTA5LTEuMTYyLS41MDltLTMuMS42OTRjLS4yODIuNDYyLTIuODI1LjM5My0zLjI1Mi4zOTRNOC42ODYgOS42MDVMNC40NSA5LjQ4N2EuNzM2LjczNiAwIDAgMS0uNzM3LS43MzZ2LS4xOTRjMC0uNDI1LjM5LTEuMTA2LjgxNC0xLjA4bDMuOTY5LjU1MWMuMzg4LjAyNS40NzcuMzguNDc3Ljc3IDAgLjQwNy4xMTkuODA3LS4yODguODA3eiIvPjxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZD0iTTMuNTI1IDEyLjcyOWMtLjA5MS4wNS0uMjEyLjE0NC0uMzYuMjgyLS4xNi4xNjItLjI0OC4yNTQtLjI2My4yNzZhMS42OCAxLjY4IDAgMCAwLS4zMy45OTkgMS43MTQgMS43MTQgMCAxIDAgMy40MjggMCIvPjxwYXRoIGQ9Ik00LjI4NiA5LjE0M0M0LjI4NiAxMC4yODYgMiAxMC43OSAyIDEyLjc5OGMwIDAgLjQyOC4yOTIuOTQ2LjUybTMuMDY2Ljk3N2MuNTM4LjEyNSAxLjA2Ny4yMDUgMS41NDIuMjA1aDMuMjA1TTEzLjA0MyA0SDExIi8+PC9nPjwvZz48L3N2Zz4=)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  uIYandexDeliveryTriangle: {
    top: "6px",
    right: "-6px",
    width: "30px",
    height: "30px",
    zIndex: "1",
    position: "absolute",
    transform: "scaleX(0.4) rotate(45deg)",
    backgroundColor: "#ffe033",
    borderTopRightRadius: "4px",
  },
  checkoutPageMetaDeliveryTimeTitle: {
    color: "#b0b0b0",
    fontSize: "14px",
    paddingBottom: "7px",
  },
  checkoutPageMetaDeliveryTimeValue: {
    fontSize: "25px",
    cursor: "pointer",
  },
  checkoutPageMetaPencilIcon: {
    width: "14px",
    height: "14px",
    margin: "2px 0 2px 8px",
    display: "inline-block",
    backgroundSize: "100%",
    backgroundImage:
      "url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTEuNzY1IDUuMDlsLTIuOTEtMi45My02Ljk2NCA3LjAwOCAyLjkxIDIuOTI5IDYuOTY0LTcuMDA4em0tOC4yMSA4LjI2MmwtMi45MTEuNjI4Yy0uNDE2LjEwNC0uNzI4LS4yMS0uNjI0LS42MjhsLjcyOC0yLjkyOGMwLS4xMDUuMTA0LS4yMS4xMDQtLjIxbDIuOTEgMi45MjljMCAuMTA1LS4xMDQuMTA1LS4yMDguMjF6bTEwLjI5LTEwLjI1YS41MDguNTA4IDAgMCAwIDAtLjczMkwxMS42Ni4xNzNjLS4yMDgtLjIwOS0uNTItLjIwOS0uNzI3LS4xMDRMOS43OSAxLjIxOWwyLjkxIDIuOTI5IDEuMTQ0LTEuMDQ2eiIgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJub256ZXJvIi8+PC9zdmc+)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  checkoutPageMetaTotalPriceTitle: {
    color: "#b0b0b0",
    fontSize: "14px",
    paddingBottom: "7px",
  },
  checkoutPageMetaTotalPriceValue: {
    fontSize: "25px",
  },
  checkoutPageMetaCutleryTitle: {
    color: "#000000",
    marginRight: "25px",
    paddingBottom: "0",
    fontSize: "14px",
    [theme.breakpoints.down("md")]: {
      marginRight: "0px",
    },
  },
  checkoutPageMetaCutleryValue: {},
  checkoutPageMetaCutleryValueCounter: {
    border: "solid 1px #cecece",
    display: "inline-block",
    background: "#eeeeee",
    borderRadius: "4px",
    [theme.breakpoints.down("md")]: {
      marginLeft: "4px",
    },
  },
  uICounterRoot: {
    display: "flex",
    textAlign: "center",
    alignItems: "center",
    lineHeight: "23px",
  },
  checkoutPageMetaCutleryValueCounterControl: {
    margin: "2px 6px",
    fontSize: "28px",
    fontWeight: "400",
    width: "24px",
    height: "24px",
    cursor: "pointer",
    lineHeight: "24px",
    userSelect: "none",
  },
  checkoutPageMetaCutleryValueCounterValue: {
    width: "46px",
    margin: "0",
    border: "solid 1px #cecece",
    padding: "2px 0",
    borderTop: "none",
    background: "#ffffff",
    boxShadow: "inset 0 1px 3px 0 rgba(0, 0, 0, 0.2)",
    borderBottom: "none",
    minWidth: "24px",
    fontSize: "16px",
    lineHeight: "24px",
    [theme.breakpoints.down("md")]: {
      width: "36px",
    },
  },
  uIAnimatedButtonRoot: {
    color: "#000000",
    background: "rgb(255, 224, 51)",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  uIAnimatedButtonYellow: {
    width: "100%",
    height: "100%",
    border: "none",
    padding: "0 24px",
    overflow: "hidden",
    fontSize: "16px",
    minHeight: "41px",
    userSelect: "none",
    borderRadius: "4px",
    transitionDuration: "200ms",
    transitionProperty: "background-color, color",
  },
  checkoutPageIndexSidebar: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  appCartOrderInfo: {},
  appCartDeliveryTime: {
    flex: "1 1 auto",
  },
  appCartTotalPrice: {
    flex: "1 1 auto",
  },
  appCartDeliveryTimeTitle: {
    color: "#b0b0b0",
    padding: "1px 0 3px 0",
    fontSize: "14px",
  },
  appCartDeliveryTimeValue: {
    padding: "2px 0",
    fontSize: "25px",
  },
});