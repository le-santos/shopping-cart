import styled from "styled-components";
import ProductCard from "./ProductCard/ProductCard";

const DivStyled = styled.div`
  display: flex;
  flex-flow: column;
`;

export default function ProductList({ list }) {
  const cartList = list.map((item) => (
    <ProductCard
      key={item.uniqueId}
      title={item.name}
      price={item.price}
      discountPrice={item.sellingPrice}
      alt={item.name}
      src={item.imageUrl}
    />
  ));

  return <DivStyled>{cartList}</DivStyled>;
}
