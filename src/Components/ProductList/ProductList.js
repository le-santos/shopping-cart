import styled from "styled-components";
import ProductCard from "./ProductCard/ProductCard";
import FormatCurrency from "../../utils/currency";

const DivStyled = styled.div`
  display: flex;
  flex-flow: column;
`;

export default function ProductList({ list }) {
  const cartList = list.map((item) => (
    <ProductCard
      key={item.uniqueId}
      title={item.name}
      price={FormatCurrency(item.price)}
      discountPrice={FormatCurrency(item.sellingPrice)}
      alt={item.name}
      src={item.imageUrl}
    />
  ));

  return <DivStyled>{cartList}</DivStyled>;
}
