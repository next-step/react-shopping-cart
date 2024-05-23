type TitleProps = {
  variant: "cart" | "order";
  text: string;
};
export default function Title({ variant, text }: TitleProps) {
  return (
    <header className="flex-col-center mt-20">
      <h2 className={`${variant}-section__title`}>{text}</h2>
      <hr className="divide-line mt-20" />
    </header>
  );
}
