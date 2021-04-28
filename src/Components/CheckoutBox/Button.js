import styled from "styled-components";

const ButtonStyled = styled.button`
  background-color: var(--blue-0);
  color: var(--gray-0);
  padding: 0.5rem 1rem;
  border: 2px solid var(--blue-0);
  border-radius: 5px;
  font-size: 1.5rem;
  font-weight: bold;
  width: 100%;
  max-width: 25rem;

  &:hover {
    background-color: var(--gray-0);
    color: var(--blue-0);
  }

  &:active {
    box-shadow: 0px 0px 0px 2px;
    transform: scale(1.04, 1.04);
    transition-duration: 0.1s;
  }
`;

export default function Button({ name, type, onClick }) {
  return (
    <ButtonStyled onClick={onClick} type={type}>
      <p>{name}</p>
    </ButtonStyled>
  );
}
