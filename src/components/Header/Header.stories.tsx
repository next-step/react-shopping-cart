import { BrowserRouter } from 'react-router-dom';
import Header from './Header';

export default {
  title: 'Domain/Header',
  component: Header,
};

export const Primary = () => (
  <BrowserRouter>
    <Header />
  </BrowserRouter>
);
