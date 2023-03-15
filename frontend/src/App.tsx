import { Global } from '@emotion/react';

import { Header } from '@/components/Header';
import { Layout } from '@/components/common';

import { reset } from '@/styles/reset';

export default function App() {
  return (
    <div>
      <Global styles={reset} />
      <Layout />
    </div>
  );
}
