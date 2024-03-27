import { twMerge } from "tailwind-merge";
import type { ComponentProps, ReactNode } from "react";

interface FooterProps extends ComponentProps<"footer"> {
  children: ReactNode;
}
const Footer = ({ className, children, ...props }: FooterProps) => {
  return (
    <footer
      className={twMerge("fixed bottom-0 left-0 w-dvw bg-white", className)}
      {...props}
    >
      {children}
    </footer>
  );
};

export default Footer;
