import CartHigh from "../assets/json/acima-10-reais.json";
import CartLow from "../assets/json/abaixo-10-reais.json";

function getProducts() {
  const data = [CartHigh.items, CartLow.items];

  return data;
}

export default getProducts;
