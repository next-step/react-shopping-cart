import { PropsWithChildren } from 'react';
import { css } from '@styled-system/css';
import { flex } from '@styled-system/patterns';

export const PaymentsDisplay = ({ children }: PropsWithChildren) => (
  <main
    className={css({
      position: 'relative',
      backgroundColor: 'white',
      width: '375px',
      minWidth: '375px',
      height: '700px',
      border: `1px solid #d2d2d2`,
      textAlign: 'left',
      overflowY: 'scroll',
      zIndex: 'overlay',
    })}
  >
    <PaymentsDisplayLayout>{children}</PaymentsDisplayLayout>
  </main>
);

const PaymentsDisplayLayout = ({ children }: PropsWithChildren) => (
  <section
    className={flex({
      flexDirection: 'column',
      height: '100%',
      padding: '16px 24px',
    })}
  >
    {children}
  </section>
);

const PaymentsDisplayHeader = ({ children }: PropsWithChildren) => (
  <header
    className={css({
      width: '100%',
      minHeight: '30px',
    })}
  >
    {children}
  </header>
);

const PaymentsDisplayBody = ({ children }: PropsWithChildren) => (
  <section
    className={flex({
      flexDirection: 'column',
      gap: '20px',
      flexGrow: 1,
    })}
  >
    <div
      className={flex({
        flexDirection: 'column',
        gap: '20px',
        flex: '1 0 auto',
      })}
    >
      {children}
    </div>
  </section>
);

const PaymentsDisplayFooter = ({ children }: PropsWithChildren) => (
  <footer
    className={flex({
      flexDirection: 'column',
      justifyContent: 'flex-end',
      width: '100%',
      height: '300px',
      minHeight: '30px',
    })}
  >
    {children}
  </footer>
);

PaymentsDisplay.Root = PaymentsDisplay;
PaymentsDisplay.Header = PaymentsDisplayHeader;
PaymentsDisplay.Body = PaymentsDisplayBody;
PaymentsDisplay.Footer = PaymentsDisplayFooter;

PaymentsDisplay.displayName = 'PaymentsDisplay';
