import Layout from "./Components/Layout/Layout";
import TotalBox from "./Components/TotalBox/TotalBox";
import CheckoutBox from "./Components/CheckoutBox/CheckoutBox";
import ProductList from "./Components/ProductList/ProductList";

function App() {
  return (
    <Layout className="App">
      <ProductList />
      <TotalBox total={"9,21"} />
      <CheckoutBox />
    </Layout>
  );
}

export default App;
