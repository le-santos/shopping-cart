import styled from "styled-components";

const ImgStyled = styled.img`
  width: 100%;
  max-width: 8.5rem;
  height: auto;
  margin: 0 1.2rem;
  background-color: #fff;
  border: 1px solid gray;
  border-radius: 4px;
`;

export default function ProductImage({ src, alt }) {
  return <ImgStyled alt={alt} src={src} />;
}
