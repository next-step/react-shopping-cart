import { Global } from '@emotion/react';

import { Layout } from '@/components/common';

import reset from '@/styles/reset';

export default function App() {
  return (
    <>
      <Global styles={reset} />
      <Layout />
    </>
  );
}
