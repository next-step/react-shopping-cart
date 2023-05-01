type Props = {
  handleDeleteAll: () => void;
  text: string;
};

const Button = ({ handleDeleteAll, text }: Props) => {
  return (
    <button className="delete-button" onClick={() => handleDeleteAll()}>
      {text}
    </button>
  );
};

export default Button;
