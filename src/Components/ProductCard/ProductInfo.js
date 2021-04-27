import styled from "styled-components";

const DivStyled = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: flex-start;

  h3 {
    margin-bottom: 0.7rem;
  }

  p {
    color: var(--gray-1);
    margin: 0.5rem 0;
  }
`;

export default function ProductInfo({ title, price, discountPrice }) {
  return (
    <DivStyled>
      <h3>{title}</h3>
      <p>{`R$ ${price}`}</p>
      <h3>{`R$ ${discountPrice}`}</h3>
    </DivStyled>
  );
}
