import { Outlet } from 'react-router-dom';
import { Header, AppLayout, ContentsLayout } from './components';
import { SWRConfig } from 'swr';
import fetcher from './api/fetcher';
import { Suspense } from 'react';

function App() {
  return (
    <AppLayout>
      <Header />
      <ContentsLayout>
        <SWRConfig
          value={{
            fetcher,
            suspense: true,
          }}
        >
          <Suspense fallback={<div>loading...</div>}>
            <Outlet />
          </Suspense>
        </SWRConfig>
      </ContentsLayout>
    </AppLayout>
  );
}

export default App;
