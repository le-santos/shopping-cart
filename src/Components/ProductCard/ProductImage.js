import styled from "styled-components";

const ImgStyled = styled.img`
  width: 200px;
  height: auto;
  border: 1px solid gray;
  box-shadow: 2px 2px 2px;
`;

export default function ProductImage({ src, alt }) {
  return <ImgStyled width="200" height="auto" alt={alt} src={src} />;
}
