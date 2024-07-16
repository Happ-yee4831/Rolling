import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const RecipientSummary = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 13px auto;
`;

export const Receiver = styled.h1`
  font-size: 28px;
  line-height: 42px;
  letter-spacing: -0.01em;
  text-align: left;
  font-weight: 700;
  flex-grow: 1;
`;

export const VerticalDivider = styled.div`
  border: 1px solid ${({ theme }) => theme.color.grayBorder};
  height: ${({ height }) => `${height}px`};
  margin-left: ${({ marginX, marginLeft }) => `${marginX ?? marginLeft}px`};
  margin-right: ${({ marginX, marginRight }) => `${marginX ?? marginRight}px`};
`;
