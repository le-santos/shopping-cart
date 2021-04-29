import Layout from "./Components/Layout/Layout";
import TotalBox from "./Components/TotalBox/TotalBox";
import CheckoutBox from "./Components/CheckoutBox/CheckoutBox";
import ProductList from "./Components/ProductList/ProductList";
import getProducts from "./services/getProducts";
import { useEffect, useState } from "react";

function App() {
  const [products, setproducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const items = getProducts();
    setproducts([...items]);
  }, []);

  useEffect(() => {
    const sum = products.reduce(
      (acc, item) => acc + item.sellingPrice * item.quantity,
      0
    );
    setTotalPrice(sum);
  }, [products]);

  return (
    <Layout className="App">
      <ProductList list={products} />
      <TotalBox total={totalPrice} />
      <CheckoutBox />
    </Layout>
  );
}

export default App;
