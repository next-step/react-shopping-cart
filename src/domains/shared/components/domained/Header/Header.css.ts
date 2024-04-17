import { style } from "@vanilla-extract/css";

export const headerBox = style({
  backgroundColor: "#29c2bc",
  display: "flex",
  justifyContent: "center",
  width: "100vw",
  boxShadow:
    "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
});

export const innerContainer = style({
  width: "70%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const link = style({
  textDecoration: "none",
});

export const navList = style({
  listStyle: "none",
  display: "flex",
  gap: "40px",
});
