import React from "react";

interface TextProps {
  text: string;
  fontSize?: string;
}

const Text: React.FC<TextProps> = ({ text, fontSize }) => {
  const style: React.CSSProperties = {};
  if (fontSize) {
    style.fontSize = fontSize;
  }

  return <span style={style}>{text}</span>;
};

export default Text;
