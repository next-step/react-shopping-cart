import { useState } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import SnackBar from '../components/SnackBar/SnackBar';
import { ProductList } from './products/-components';

export const Home = () => {
  const [showSnackBar, setShowSnackBar] = useState(false);
  const handleCloseSnackBar = () => setShowSnackBar(false);

  return (
    <>
      <ProductList setShowSnackBar={setShowSnackBar} />
      <SnackBar
        open={showSnackBar}
        onClose={handleCloseSnackBar}
        message='장바구니에 추가했습니다'
      />
    </>
  );
};

export const Route = createFileRoute('/')({
  component: Home,
});
