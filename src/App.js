import Header from "./Components/Header/Header";
import Layout from "./Components/Layout/Layout";
import ProductCard from "./Components/ProductCard/ProductCard";

function App() {
  return (
    <div className="App">
      <Layout>
        <Header />
        <ProductCard />
      </Layout>
    </div>
  );
}

export default App;
