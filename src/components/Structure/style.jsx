import styled from "styled-components";

const Container = styled.div`
  width: ${(props) => (props.w ? `${props.w}%` : "100%")};
  display: flex;
  

  padding: ${(props) => props.padding}
  padding-left: ${(props) => props.paddingLeft}
  padding-right: ${(props) => props.paddingRight}
  

  margin-top: 1rem;
`;

export { Container };
