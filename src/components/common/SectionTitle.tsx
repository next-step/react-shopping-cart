import Section from '../frame/Section';

interface TitleType {
  text: string;
}

const SectionTitle = ({ text }: TitleType) => {
  return (
    <Section>
      <header className="flex-col-center mt-50 mb-50">
        <h2 className="cart-section__title">{text}</h2>
        <hr className="divide-line mt-20" />
      </header>
    </Section>
  );
};

export default SectionTitle;
