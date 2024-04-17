import { style } from "@vanilla-extract/css";

export const orderContainer = style({
  width: "100%",
});

export const orderProductBox = style({
  padding: "38px 26px",
  border: "1px solid grey",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const orderHeader = style({
  border: "1px solid grey",
  backgroundColor: "#f6f6f6",
  padding: "36px 39px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const alinkReset = style({
  textDecoration: "none",
  color: "black",
  ":active": {
    textDecoration: "none",
  },
});

export const buttonBox = style({
  width: "138px",
  height: "47px",
});
