import { styled } from "@stitches/react";

export const NavBox = styled("nav", {
  width: "100%",
  height: "80px",

  background: "#2ac1bc",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.3)",

  display: "flex",
  justifyContent: "space-around",
});

export const NavTitleBox = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor : "pointer"
});

export const NavTitle = styled("h1", {
  fontSize: "40px",
  fontWeight: "900",
  textAlign: "center",
  verticalAlign: "middle",

  color: "#ffffff",
});

export const NavButtonBox = styled("div", {
  display: "flex",
  gap: "15px",
});

export const NavButton = styled("button", {
  fontWeight: 500,
  fontSize: "24px",
  background: 'none',
  border: 'none',
  color: "#ffffff",
});
