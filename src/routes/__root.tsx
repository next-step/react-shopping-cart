import { createRootRoute, Link, Outlet } from '@tanstack/react-router';

export const Route = createRootRoute({
  component: () => (
    <header>
      <nav className="p-2 flex gap-2 justify-between max-w-[1280px] mx-auto">
        <Link to="/" className="font-bold">
          <h1>🛒 NEXTSTEP</h1>
        </Link>{' '}
        <div className="flex gap-5">
          <Link to="/about" className="[&.active]:font-bold">
            장바구니
          </Link>
          <Link to="/cart" className="[&.active]:font-bold">
            주문목록
          </Link>
        </div>
      </nav>
      <hr />
      <Outlet />
    </header>
  ),
});
