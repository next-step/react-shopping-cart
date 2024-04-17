import { style } from "@vanilla-extract/css";

export const shopsPage = style({
  width: "100%",
});

export const productsContainer = style({
  display: "flex",
  width: "100%",
  justifyContent: "center",
});

export const products = style({
  display: "grid",
  maxWidth: "1250px",
  gap: "37px",
  gridTemplateColumns: "repeat(4, 1fr)",
});

export const alinkReset = style({
  textDecoration: "none",
  color: "black",
  ":active": {
    textDecoration: "none",
  },
});
