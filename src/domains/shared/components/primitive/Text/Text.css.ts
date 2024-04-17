import { recipe } from "@vanilla-extract/recipes";

export const IconButtonStyle = recipe({
  variants: {
    weight: {
      900: {
        fontWeight: "900",
      },
      700: { fontWeight: "700" },
      400: {
        fontWeight: "400",
      },
    },
    as: {
      title: {
        fontSize: "40px",
      },
      subtitle: { fontSize: "32px" },
      body: { fontSize: "24px" },
      description: { fontSize: "20px" },
      caption: { fontSize: "16px" },
    },
  },
});
