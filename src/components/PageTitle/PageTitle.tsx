import { PropsWithChildren } from 'react';
import * as styles from './PageTitle.css';

const PageTitle = ({ children }: PropsWithChildren) => {
  return (
    <header className={styles.pageTitleContainer}>
      <div className={styles.innerContainer}>
        <h2 className={styles.pageTitle}>{children}</h2>
        <hr className={styles.divideLine} />
      </div>
    </header>
  );
};

export default PageTitle;
