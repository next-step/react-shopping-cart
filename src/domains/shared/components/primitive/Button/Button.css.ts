import { recipe } from "@vanilla-extract/recipes";

export const buttonStyle = recipe({
  variants: {
    appearance: {
      primary: {},
      secondary: {},
      outline: {},
    },
    size: {
      xlg: {
        fontSize: "32px",
        fontWeight: "700",
      },
      lg: {
        fontSize: "24px",
        fontWeight: "400",
      },
      md: {
        fontSize: "20px",
        fontWeight: "4 00",
      },
      sm: {},
    },
    onlyText: {
      true: {},
      false: {},
    },
  },

  compoundVariants: [
    {
      variants: {
        appearance: "primary",
        onlyText: true,
      },
      style: { backgroundColor: "transparent", color: "#29c2bc" },
    },
    {
      variants: {
        appearance: "primary",
        onlyText: false,
      },
      style: { backgroundColor: "#29c2bc" },
    },
    {
      variants: {
        appearance: "secondary",
        onlyText: true,
      },
      style: { backgroundColor: "transparent", color: "#73675d" },
    },
    {
      variants: {
        appearance: "secondary",
        onlyText: false,
      },
      style: {
        backgroundColor: "#73675d",
      },
    },
    {
      variants: {
        appearance: "outline",
        onlyText: true,
      },
      style: {
        backgroundColor: "transparent",
        color: "black",
      },
    },
    {
      variants: {
        appearance: "outline",
        onlyText: false,
      },
      style: {
        backgroundColor: "transparent",
        border: "1px solid grey",
        color: "black",
      },
    },
  ],
  base: {
    width: "100%",
    height: "100%",
    outline: "none",
    border: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    cursor: "pointer",
  },
});
