import { ShoppingProvider } from 'pages/shopping/modules/ShoppingContext';
import { RouterProvider } from 'react-router-dom';
import router from 'routes';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/globalStyles';
import theme from 'styles/theme';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ShoppingProvider>
          <RouterProvider router={router} />
        </ShoppingProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
