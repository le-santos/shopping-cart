import styled from "styled-components";
import ProductCard from "./ProductCard/ProductCard";

const DivStyled = styled.div`
  display: flex;
  flex-flow: column;
`;

export default function ProductList({ ...props }) {
  return (
    <DivStyled>
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </DivStyled>
  );
}
