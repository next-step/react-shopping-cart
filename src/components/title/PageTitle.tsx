interface TitleProps {
  text: string;
}

const PageTitle = ({ text }: TitleProps) => {
  return (
    <header className="flex-col-center mt-50 mb-50">
      <h2 className="cart-section__title">{text}</h2>
      <hr className="divide-line mt-20" />
    </header>
  );
};

export default PageTitle;
