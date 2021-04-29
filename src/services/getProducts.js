import CartHigh from "../json/acima-10-reais.json";
import CartLow from "../json/abaixo-10-reais.json";

function getProducts() {
  const data = [CartHigh.items, CartLow.items];

  return data;
}

export default getProducts;
