import styled from "styled-components";

export const InputGroup = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;
`;

export const InputGroupAppend = styled.div`
  display: flex;
  margin-left: -1px;
  > * {
    position: relative;
    z-index: 2;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;
