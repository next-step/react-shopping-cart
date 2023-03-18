import CartList from './components/CartList';

function Cart() {
  return (
    <section className="cart-section">
      <header className="flex-col-center mt-20">
        <h2 className="cart-section__title">장바구니</h2>
        <hr className="divide-line mt-20" />
      </header>
      <CartList />
    </section>
  );
}

export default Cart;
