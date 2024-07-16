import styled from 'styled-components';

export const ReactionsWrapper = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const TopReaction = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  padding: 8px 12px;
  border-radius: 9999px;
  background-color: ${({ theme }) => theme.backgroundColor.grayOpacity};
`;

export const Emoji = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 16px;
`;

export const Count = styled.span`
  color: white;
`;
