import FlexContainer from 'components/FlexContainer';
import HorizontalBar from 'components/HorizontalBar';
import Title from 'components/Title';
import { PropsWithChildren } from 'react';

interface PageTitleProps extends PropsWithChildren {
  titleColor: string;
  horizontalBarColor: string;
}

const PageTitle = ({
  titleColor,
  horizontalBarColor,
  children,
}: PageTitleProps) => {
  return (
    <FlexContainer direction="column" alignItems="center">
      <Title color={titleColor} fontSize="30px" fontWeight="bold">
        {children}
      </Title>
      <HorizontalBar thickness="5px" color={horizontalBarColor} />
    </FlexContainer>
  );
};

export default PageTitle;
