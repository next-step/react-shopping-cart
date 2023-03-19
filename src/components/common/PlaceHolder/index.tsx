type Props = {
  quantity?: number;
  width?: string;
  height?: string;
};

const PlaceHolder = ({
  quantity = 1,
  width = '200px',
  height = '200px',
}: Props) => {
  return (
    <>
      {Array.from({ length: quantity }).map((_, index) => (
        <div
          key={index}
          className="animated-bg"
          style={{
            width,
            height,
          }}
        />
      ))}
    </>
  );
};

export default PlaceHolder;
