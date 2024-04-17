import { style } from "@vanilla-extract/css";

export const productContainer = style({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  marginTop: "60px",
});

export const productTitle = style({
  marginTop: "21px",
});

export const underline = style({
  backgroundColor: "rgba(221, 221, 221, 1)",
  width: "100%",
  height: "3px",
  marginTop: "33px",
  marginBottom: "33px",
});

export const priceBox = style({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  marginBottom: "57px",
});

export const buttonBox = style({
  height: "100px",
});
