import { styled } from "@stitches/react";

export const HeaderContainer = styled("header", {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  marginTop: '20px'
});

export const HeaderTitle = styled("h2", {
  fontSize: '24px',
  fontWeight: '600'
})

export const Divider = styled("hr", {
  width: '100%',
  border: '2px solid black'
})