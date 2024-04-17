import { style } from "@vanilla-extract/css";

export const cardContainer = style({
  maxWidth: "740px",
  maxHeight: "178px",
  display: "flex",
  justifyContent: "space-between",
});

export const cardLeftSection = style({
  display: "flex",
});

export const cardDescription = style({
  display: "flex",
});

export const cardImg = style({
  maxWidth: "150%",
  height: "100%",
  objectFit: "cover",
});

export const cardTitle = style({
  marginLeft: "10px",
});

export const cardFeatureContainer = style({
  textAlign: "end",
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "column",
});
