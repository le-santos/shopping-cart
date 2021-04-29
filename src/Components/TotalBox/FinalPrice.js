import styled from "styled-components";
import FormatCurrency from "../../utils/currency";

const DivStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
`;

export default function FinalPrice({ total }) {
  return (
    <DivStyled>
      <h2>Total</h2>
      <h2>{FormatCurrency(total)}</h2>
    </DivStyled>
  );
}
