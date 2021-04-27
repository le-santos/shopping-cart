import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid var(--gray-1);
`;

export default function Header() {
  return (
    <HeaderStyled>
      <h2>Meu Carrinho</h2>
    </HeaderStyled>
  );
}
