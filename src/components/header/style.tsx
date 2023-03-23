import { styled } from "@stitches/react";

export const HeaderWrapper = styled("header", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

export const GlobalNavButtonBox = styled("div", {
  display: "flex",
  gap: "5px",

  margin: "10px 0",
});

export const GlobalNavButton = styled("a", {
  backgroundColor: '#ffffff',
  border: '1px solid #222222',
  borderRadius: '8px',
  boxSizing: 'border-box',
  color: '#222222',
  cursor: 'pointer',
  display: 'inline-block',
  fontFamily: "Circular, -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', sans-serif",
  fontSize: '16px',
  fontWeight: 600,
  lineHeight: '20px',
  margin: 0,
  outline: 'none',
  padding: '13px 23px',
  position: 'relative',
  textAlign: 'center',
  textDecoration: 'none',
  touchAction: 'manipulation',
  transition: 'box-shadow 0.2s, -ms-transform 0.1s, -webkit-transform 0.1s, transform 0.1s',
  userSelect: 'none',
  width: 'auto',

  "&::focusVisible": {
    boxShadow: "#222222 0 0 0 2px, rgba(255, 255, 255, 0.8) 0 0 0 4px",
    transition: "box-shadow 0.2s",
  },

  "&::active": {
    backgroundColor: "#f7f7f7",
    borderColor: "#000000",
    transform: "scale(0.96)",
  },

  "&::disabled": {
    borderColor: "#dddddd",
    color: "#dddddd",
    cursor: "not-allowed",
    opacity: 1,
  },
});
