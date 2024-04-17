import { style } from "@vanilla-extract/css";

export const CardContainer = style({
  maxWidth: "280px",
  maxHeight: "360px",
});

export const CardImg = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

export const CardInfo = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "18px 12px",
});
