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
});

export const underLine = style({
  width: "100%",
  height: "4px",
  backgroundColor: "black",
  margin: "55px 0 55px 0",
});

export const orderSection = style({
  width: "100%",
});

export const orderBox = style({
  marginBottom: "40px",
});
