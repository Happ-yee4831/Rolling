import styled from 'styled-components';

export const RelativeWrapper = styled.ul`
  position: relative;
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
`;

export const Count = styled.span`
  color: white;
`;

export const Button = styled.button`
  border-radius: 6px;
  padding: 6px;
`;

export const BorderButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border: ${({ theme }) => `1px solid ${theme.color.gray300}`};
  padding: 6px 16px;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`;

export const DropDownItem = styled.li``;

export const DropDownMenu = styled.ul`
  position: absolute;
  top: 48px;
  right: 0px;
  padding: 10px 0;
  border-radius: 8px;
  border: ${({ theme }) => `1px solid ${theme.color.gray300}`};
  ${DropDownItem} {
    display: flex;
    align-items: center;
    width: 106px;
    height: 26px;
    padding: 12px 16px;
    opacity: 0px;
    &:hover {
      background-color: ${({ theme }) => theme.color.gray200};
    }
  }
`;
