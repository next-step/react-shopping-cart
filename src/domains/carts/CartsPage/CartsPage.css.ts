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
  margin: "16px 0 55px 0",
});

export const cartContainer = style({
  width: "100%",
  display: "flex",
  gap: "50px",
  justifyContent: "space-between",
});

export const listContainer = style({
  width: "100%",
});

export const listNavBox = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const buttonBox = style({
  width: "117px",
  height: "50px",
});

export const listTitle = style({
  marginTop: "50px",
});

export const list = style({
  display: "flex",
  flexDirection: "column",
  gap: "40px",
});

export const decisionBox = style({
  width: "448px",
  height: "318px",
});
