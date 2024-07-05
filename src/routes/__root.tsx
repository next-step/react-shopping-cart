import { createRootRoute, Outlet } from '@tanstack/react-router';
import Container from '@/layout/Container';
import Header from '@/layout/Header';
import Body from '@/layout/Body';
import AlertDialogContainer from '@components/common/AlertDialog/AlertDialogContainer';

export const Route = createRootRoute({
  component: () => (
    <Container>
      <Header />
      <Body>
        <Outlet />
      </Body>
      <AlertDialogContainer />
    </Container>
  ),
});
