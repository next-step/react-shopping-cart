import Divider from '@components/common/Divider/Divider';
import Title from '@components/common/Title/Title';

interface OrderTitleProps {
  title: string;
}

export default function OrderTitle({ title }: OrderTitleProps) {
  return (
    <header>
      <Title
        as='h2'
        variant='title'
        css={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px',
          padding: '20px',
        }}
      >
        {title}
      </Title>

      <Divider color='gray' />
    </header>
  );
}
