import { styled } from "@stitches/react";

export const ProductContainer = styled("section", {
  display: "flex",
  justifyContent: "center",

  flexWrap: "wrap",
  gap: "20px",
  padding: "50px 240px",
});

export const ItemWrapper = styled("div", {
  display: "flex",

  justifyContent: "space-between",

  width: "280px",

  padding: "5px",
});

export const ItemInfo = styled("div", {
  display: "flex",
  flexDirection: "column",
});

export const Title = styled("span", {
  fontSize: '12px'
});

export const Price = styled("span", {

});

export const Image = styled("img", {
  width: "283px",
  height: "283px",
});