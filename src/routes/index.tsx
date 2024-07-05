import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: Index,
  loader: () => {
    throw redirect({ to: '/list' });
  },
});

function Index() {
  return (
    <div className='p-2'>
      <h3>Welcome Home!</h3>
    </div>
  );
}
