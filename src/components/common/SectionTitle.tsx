import Section from '../../layout/Section';

interface TitleType {
  text: string;
}

const SectionTitle = ({ text }: TitleType) => {
  return (
    <Section>
      <header className="flex-col-center mt-20">
        <h2 className="cart-section__title">{text}</h2>
        <hr className="divide-line mt-20" />
      </header>
    </Section>
  );
};

export default SectionTitle;
