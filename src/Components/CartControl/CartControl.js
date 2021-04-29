import styled from "styled-components";

const DivStyled = styled.div`
  position: fixed;
  display: flex;
  flex-flow: column;
  top: 0.5rem;
  right: 0.5rem;
  display: flex;
  align-items: center;

  button {
    background-color: var(--green-0);
    padding: 0;
    max-width: 4rem;
    border: 0;
    border-radius: 4px;
    box-shadow: 2px 2px 2px var(--green-1);

    &:active {
      transform: scale(1.04, 1.04);
      transition-duration: 0.1s;
    }
  }
`;

export default function CartControl({ onClick }) {
  return (
    <DivStyled>
      <button onClick={onClick}>Troca itens</button>
    </DivStyled>
  );
}
