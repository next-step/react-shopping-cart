interface TitleType {
  text: string;
}

const Title = ({ text }: TitleType) => {
  return (
    <header className="flex-col-center mt-50 mb-50">
      <h2 className="cart-section__title">{text}</h2>
      <hr className="divide-line mt-20" />
    </header>
  );
};

export default Title;
