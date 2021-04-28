import styled from "styled-components";
import Button from "./Button";

const DivStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

export default function CheckoutBox({ onClick }) {
  return (
    <DivStyled>
      <Button type={"button"} name={"Finalizar Compra"} onClick={onClick} />
    </DivStyled>
  );
}
