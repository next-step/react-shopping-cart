import { createContext, PropsWithChildren, useCallback, useMemo } from 'react';
import Image from './Image';
import Info from './Info';
import classNames from 'classnames';

export interface ICard {
  imageSrc: string;
  imageAlt: string;
  description?: string;
  title: string;
  icon?: string;
  onClickIcon?: () => void;
}

export const CardContext = createContext<ICard>({
  title: '',
  imageSrc: '',
  imageAlt: ''
});

export const CardWrapper = ({ title, children, ...props }: PropsWithChildren<ICard>) => {
  const handleClickIcon = useCallback(() => {
    props.onClickIcon?.();
  }, []);

  const contextValue = useMemo(() => ({
    title,
    onClickIcon: handleClickIcon,
    ...props
  }), [title, props]);

  return (
    <CardContext.Provider value={contextValue}>
      <div className={classNames('card')}>
        {children}
      </div>
    </CardContext.Provider>
  );
};

CardWrapper.Image = Image;
CardWrapper.Info = Info;

export default CardWrapper;
