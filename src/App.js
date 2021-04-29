import Layout from "./Components/Layout/Layout";
import TotalBox from "./Components/TotalBox/TotalBox";
import CheckoutBox from "./Components/CheckoutBox/CheckoutBox";
import ProductList from "./Components/ProductList/ProductList";
import getProducts from "./services/getProducts";
import { useEffect, useState } from "react";
import CartControl from "./Components/CartControl/CartControl";

function App() {
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cart, setCart] = useState(0);

  useEffect(() => {
    const [itemsHigh, itemsLow] = getProducts();
    cart === 0 ? setProducts([...itemsHigh]) : setProducts([...itemsLow]);
  }, [cart]);

  useEffect(() => {
    const sum = products.reduce(
      (acc, item) => acc + item.sellingPrice * item.quantity,
      0
    );
    setTotalPrice(sum);
  }, [products]);

  const toggleCart = () => {
    cart === 0 ? setCart(1) : setCart(0);
  };

  const cleanCart = () => {
    setProducts([]);
  };

  return (
    <Layout className="App">
      <CartControl onClick={toggleCart} />
      <button onClick={cleanCart}>Limpar carrinho</button>
      <ProductList list={products} />
      <TotalBox total={totalPrice} />
      <CheckoutBox />
    </Layout>
  );
}

export default App;
