import styled from "styled-components";

const DivStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
  margin: 0.7rem 2rem;
  border-radius: 22px;
  background-color: var(--green-0);
  color: var(--green-1);

  p {
    font-size: 1.3rem;
    padding: 0 0.5rem;
    text-align: center;
  }
`;

export default function FreeShipping() {
  return (
    <DivStyled>
      <p>Parabéns, sua compra tem frete grátis!</p>
    </DivStyled>
  );
}
