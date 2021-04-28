import Layout from "./Components/Layout/Layout";
import TotalBox from "./Components/TotalBox/TotalBox";
import CheckoutBox from "./Components/CheckoutBox/CheckoutBox";
import ProductList from "./Components/ProductList/ProductList";
import getProducts from "./services/getProducts";
import { useEffect, useState } from "react";

function App() {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    const items = getProducts();
    setproducts([...items]);
  }, []);

  return (
    <Layout className="App">
      <ProductList list={products} />
      <TotalBox total={"9,21"} />
      <CheckoutBox />
    </Layout>
  );
}

export default App;
