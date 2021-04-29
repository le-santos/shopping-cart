import styled from "styled-components";

const DivStyled = styled.div`
  display: block;
  text-align: end;

  button {
    border: none;
    background: none;
    padding: 1rem;
    text-decoration: underline;
  }
`;

export default function CleanCartButton({ onClick }) {
  return (
    <DivStyled>
      <button onClick={onClick}>Limpar Carrinho</button>
    </DivStyled>
  );
}
