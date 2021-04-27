import styled from "styled-components";

const DivStyled = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: flex-start;
`;

export default function ProductInfo({ title, price, discountPrice }) {
  return (
    <DivStyled>
      <h4>{title}</h4>
      <p>{price}</p>
      <p>{discountPrice}</p>
    </DivStyled>
  );
}
