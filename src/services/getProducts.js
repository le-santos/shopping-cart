import CartHigh from "../assets/json/acima-10-reais.json";
import CartLow from "../assets/json/abaixo-10-reais.json";

function getProducts() {
  let products = [];

  // Para uso de API externa:
  // fetch(REACT_APP_API_URL)
  //   .then((res) => res.json())
  //   .then((data) => (products = [...data.items]))
  //   .catch((error) => console.log(error));

  // Para uso de arquivos json em assets:
  products = [CartHigh.items, CartLow.items];

  return products;
}

export default getProducts;
