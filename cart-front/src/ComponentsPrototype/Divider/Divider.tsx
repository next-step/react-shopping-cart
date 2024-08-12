import { HtmlHTMLAttributes } from "react";

const Divider = (props: HtmlHTMLAttributes<HTMLDivElement>) => {
  return <hr {...props}></hr>;
};

export default Divider;
