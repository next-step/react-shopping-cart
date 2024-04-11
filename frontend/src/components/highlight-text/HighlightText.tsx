import { PropsWithChildren } from "react";

const HighlightText = ({ children }: PropsWithChildren) => {
  return <span className="highlight-text">{children}</span>;
};

export default HighlightText;
