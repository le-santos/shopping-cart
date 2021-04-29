import styled from "styled-components";
import FinalPrice from "./FinalPrice";
import FreeShipping from "./FreeShipping";

const DivStyled = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  border-bottom: 1px solid var(--gray-1);
  border-top: 1px solid var(--gray-1);
  padding: 1rem 0;
`;

export default function TotalBox({ total }) {
  return (
    <DivStyled>
      <FinalPrice total={total} />
      {total > 1000 && <FreeShipping />}
    </DivStyled>
  );
}
