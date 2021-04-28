import styled from "styled-components";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";

const DivStyled = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 1.2rem 0;
`;

export default function ProductCard({ alt, src, title, price, discountPrice }) {
  return (
    <DivStyled>
      <ProductImage alt={alt} src={src} />
      <ProductInfo title={title} price={price} discountPrice={discountPrice} />
    </DivStyled>
  );
}
