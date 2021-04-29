import styled from "styled-components";

const DivStyled = styled.div`
  display: block;
  text-align: center;
  margin: 1.2rem 0;

  p {
    font-size: 1.2rem;
  }
`;

export default function EmptyCart() {
  return (
    <DivStyled>
      <p>Carrinho vazio</p>
    </DivStyled>
  );
}
