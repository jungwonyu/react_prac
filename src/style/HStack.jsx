import styled, { css } from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${(props) => props.gap || '0px'};
  padding: ${(props) => props.padding || '0px'};

  ${(props) => props.acenter && css`align-items: center;`}
  ${(props) => props.jcenter && css`justify-content: center;`}
`

export default function HStack({ children, ...props }) {
  return <StyledDiv {...props}>{children}</StyledDiv>
}