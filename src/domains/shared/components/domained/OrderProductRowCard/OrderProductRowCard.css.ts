import { style } from "@vanilla-extract/css";

export const cardContainer = style({
  maxWidth: "740px",
  maxHeight: "178px",
  display: "flex",
});

export const cardImg = style({
  maxHeight: "120px",
  maxWidth: "120px",
  objectFit: "cover",
});

export const cardInfo = style({
  marginLeft: "12px",
});

export const cardQuantity = style({
  marginTop: "4px",
});
