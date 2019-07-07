import styled from "styled-components";

const Button = styled.button`
  display: inline-block;
  font-weight: 400;
  color: ${props => props.theme.color.black};
  text-align: center;
  vertical-align: middle;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.375em 0.75em;
  font-size: 1em;
  line-height: 1.5;
  border-radius: 0.25em;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;

export default Button;
