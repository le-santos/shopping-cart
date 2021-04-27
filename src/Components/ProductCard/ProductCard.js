import styled from "styled-components";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";

const DivStyled = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export default function ProductCard() {
  return (
    <DivStyled>
      <ProductImage
        alt="product"
        src="http://codeby.vteximg.com.br/arquivos/ids/159959-800-1029/truffon-meio-amargo.png?v=636930938547630000"
      />
      <ProductInfo
        title="Título do Produto"
        price="1,25"
        discountPrice="1,10"
      />
    </DivStyled>
  );
}
