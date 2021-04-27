import styled from "styled-components";

const DivStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
`;

export default function FinalPrice({ total }) {
  return (
    <DivStyled>
      <h2>Total</h2>
      <h2>{`R$ ${total}`}</h2>
    </DivStyled>
  );
}
