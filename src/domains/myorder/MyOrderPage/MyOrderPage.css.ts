import { style } from "@vanilla-extract/css";

export const container = style({
  width: "100%",
  display: "flex",
  justifyContent: "center",
});

export const section = style({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  width: "1320px",
});

export const titleContainer = style({
  marginTop: "62px",
  marginBottom: "55px",
});

export const underLine = style({
  width: "100%",
  height: "4px",
  backgroundColor: "black",
  margin: "0 0 55px 0",
});

export const priceSection = style({
  display: "flex",
  justifyContent: "flex-end",
  width: "100%",
});

export const priceBox = style({
  width: "500px",
  marginTop: "55px",
});

export const priceDetail = style({
  display: "flex",
  justifyContent: "space-between",
});
