import React from "react";

interface TextProps {
  text: string;
  className?: string;
}

const Text: React.FC<TextProps> = ({ text, className }) => {
  return <span className={className}>{text}</span>;
};

export default Text;
