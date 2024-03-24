import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/cart')({
  component: Cart,
});

function Cart() {
  return <div className="p-2">Hello from Cart!</div>;
}
