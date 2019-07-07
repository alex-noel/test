import styled from "styled-components";

import { getFlexBasic } from "./functions";

type Props = {
  span: number;
  xs: number;
  sm: number;
  md: number;
  lg: number;
};

export const Column = styled.div<Props>`
  padding: 0 15px;

  ${props => getFlexBasic(props.span || 12)}

  @media ${props => props.theme.query.min.xs} {
    ${props => getFlexBasic(props.xs)}
  }

  @media ${props => props.theme.query.min.sm} {
    ${props => getFlexBasic(props.sm)}
  }

  @media ${props => props.theme.query.min.md} {
    ${props => getFlexBasic(props.md)}
  }

  @media ${props => props.theme.query.min.lg} {
    ${props => getFlexBasic(props.lg)}
  }
`;
