import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid black;
`;

export default function Header() {
  return (
    <HeaderStyled>
      <h2>Meu Carrinho</h2>
    </HeaderStyled>
  );
}
