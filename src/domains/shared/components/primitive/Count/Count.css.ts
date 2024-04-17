import { style } from "@vanilla-extract/css";

export const countContainer = style({
  display: "flex",
  width: "114px",
  height: "60",
  border: "1px solid grey",
  justifyContent: "space-between",
});

export const countText = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
});

export const button = style({
  width: "42px",
  height: "30px",
});
