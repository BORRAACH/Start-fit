import styled from "@emotion/styled";

const flexFullCenter = `
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UnoderedList = styled.ul`
  display: flex;
  gap: 1.5rem;
`;

const ContentHeader = styled.header`
  width: 100%;

  display: flex;
  justify-content: space-between;

  padding: 3rem 6rem 3rem 6rem;
`;

const BoxIcon = styled.div`
  border-radius: 10px;

  width: ${(props) => props.w};
  height: ${(props) => props.h};

  border: 2px solid #000;
  padding: 10px;

  ${flexFullCenter}
`;

export { ContentHeader, UnoderedList, BoxIcon };
