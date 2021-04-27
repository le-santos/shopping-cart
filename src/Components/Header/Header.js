import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid var(--gray-1);
  padding: 1rem 0;
  box-shadow: 0px 1px 4px;
`;

export default function Header() {
  return (
    <HeaderStyled>
      <h2>Meu Carrinho</h2>
    </HeaderStyled>
  );
}
