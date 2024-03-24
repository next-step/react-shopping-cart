import { createLazyFileRoute } from '@tanstack/react-router';
import { products } from '../../db.json';

export const Route = createLazyFileRoute('/')({
  component: Index,
});

function Index() {
  console.log(products);
  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
    </div>
  );
}
