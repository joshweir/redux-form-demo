import styled from "styled-components";

export default styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  color: #0000ff;
  cursor: ${({ disabled }) => (disabled ? "auto" : "pointer")};
  border: 2px solid #0000ff;
  border-radius: 3px;
  float: ${({ right }) => (right ? "right" : "none")};
  position: ${({ absolute }) => (absolute ? "absolute" : "inherit")};
  opacity: ${({ disabled }) => (disabled ? "0.4" : "0.75")};
  &:hover {
    opacity: ${({ disabled }) => (disabled ? "0.4" : "1")};
  }
`;
