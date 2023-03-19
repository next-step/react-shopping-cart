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
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
