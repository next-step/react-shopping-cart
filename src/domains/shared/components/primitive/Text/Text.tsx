import { createElement, ReactHTML } from "react";
import { IconButtonStyle } from "./Text.css";

interface Text {
  tag?: keyof ReactHTML;
  as: "title" | "subtitle" | "body" | "description" | "caption";
  children: string | number;
  color?: string;
  weight?: 900 | 700 | 400;
}

export default function Text({
  tag = "div",
  color = "black",
  children,
  as,
  weight = 400,
}: Text) {
  return createElement(tag, {
    style: { color },
    className: IconButtonStyle({ as, weight }),
    children,
  });
}
