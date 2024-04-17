import { style } from "@vanilla-extract/css";

export const container = style({
  border: "1px solid rgba(221, 221, 221, 1)",
  maxWidth: "448px",
  maxHeight: "318px",
});

export const titleContainer = style({
  padding: "22px 30px",
});

export const underline = style({
  backgroundColor: "rgba(221, 221, 221, 1)",
  width: "100%",
  height: "3px",
});

export const content = style({
  padding: "34px 28px",
});

export const contentPrice = style({
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "68px",
});

export const buttonBox = style({
  height: "73px",
});
