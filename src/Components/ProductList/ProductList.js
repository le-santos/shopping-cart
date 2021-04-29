import styled from "styled-components";
import ProductCard from "./ProductCard/ProductCard";
import FormatCurrency from "../../utils/currency";
import EmptyCart from "./EmptyCart";

const DivStyled = styled.div`
  display: flex;
  flex-flow: column;

  @media (min-width: 720px) {
    padding: 0 10%;
  }

  @media (min-width: 1080px) {
    padding: 0 20%;
  }
`;

export default function ProductList({ list, ...props }) {
  const cartList =
    list.length > 0 ? (
      list.map((item) => (
        <ProductCard
          key={item.uniqueId}
          title={item.name}
          price={FormatCurrency(item.price)}
          discountPrice={FormatCurrency(item.sellingPrice)}
          alt={item.name}
          src={item.imageUrl}
        />
      ))
    ) : (
      <EmptyCart />
    );
  return (
    <DivStyled>
      {cartList}
      {props.children}
    </DivStyled>
  );
}
