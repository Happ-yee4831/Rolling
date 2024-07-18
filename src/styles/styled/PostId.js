import styled, { css } from 'styled-components';

const relationShipColors = {
  친구: css`
    background-color: ${({ theme }) => theme.color.green100};
    color: ${({ theme }) => theme.color.green500};
  `,
  지인: css`
    background-color: ${({ theme }) => theme.color.beige100};
    color: ${({ theme }) => theme.color.beige500};
  `,
  동료: css`
    background-color: ${({ theme }) => theme.color.purple100};
    color: ${({ theme }) => theme.color.purple500};
  `,
  가족: css`
    background-color: ${({ theme }) => theme.color.green100};
    color: ${({ theme }) => theme.color.green500};
  `,
};

export const Background = styled.div`
  background-color: ${({ theme, $backgroundColor }) => {
    if (theme.backgroundColor[$backgroundColor]) return theme.backgroundColor[$backgroundColor];
    return 'white';
  }};
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const RecipientSummary = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 13px 0;
  background-color: white;
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
  height: ${({ $height }) => `${$height}px`};
  margin-left: ${({ $marginX, $marginLeft }) => `${$marginX ?? $marginLeft}px`};
  margin-right: ${({ $marginX, $marginRight }) => `${$marginX ?? $marginRight}px`};
`;

export const HorizontalDivider = styled.div`
  border: 1px solid ${({ theme }) => theme.color.grayBorder};
  width: ${({ $width }) => {
    if (!$width) return 0;
    if ($width.includes('%')) {
      return $width;
    }
    return `${$width}px`;
  }};
  margin-top: ${({ $marginY, $marginTop }) => `${$marginY ?? $marginTop}px`};
  margin-bottom: ${({ $marginY, $marginBottom }) => `${$marginY ?? $marginBottom}px`};
`;

export const MessageList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin: 114px auto 0;
  padding-bottom: 246px;
`;

export const MessageCard = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 384px;
  height: 280px;
  padding: 28px 24px;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0px 2px 12px 0px #00000014;
`;

export const SendMessageCard = styled(MessageCard)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: ${({ $flex }) => $flex};
  justify-content: ${({ $content }) => $content};
  align-items: ${({ $item }) => $item};
  flex-wrap: ${({ $wrap }) => $wrap};
  gap: ${({ $gap }) => `${$gap}px`};
  margin-top: ${({ mt }) => `${mt}px`};
  padding-left: ${({ pl }) => `${pl}px`};
  flex-grow: ${({ $grow }) => $grow};
`;

export const Relation = styled.span`
  ${({ $relation }) => {
    return relationShipColors[$relation];
  }};
  align-self: flex-start;
  padding: 0 8px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.005em;
`;

export const Content = styled.p`
  width: 100%;
  height: 100%;
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: -0.01em;
  text-align: left;
  color: ${({ theme }) => theme.color.gray600};
  text-overflow: ellipsis;
`;

export const Date = styled.span`
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.005em;
  color: ${({ theme }) => theme.color.gray400};
`;

export const ScreenBlinder = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  inset: 0;
  background-color: #00000099;
  z-index: 99;
`;

export const ModalMessageCard = styled(MessageCard)`
  position: fixed;
  width: 600px;
  height: 476px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 40px;
`;

export const ModalClose = styled.button`
  padding: 10px 36px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.color.purple600};
  color: white;
  align-self: center;
`;

export const ReactionsList = styled.ul`
  position: absolute;
  top: 48px;
  right: 100px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: Hug (312px) px;
  height: Hug (134px) px;
  padding: 24px;
  gap: 10px;
  border-radius: 8px;
  border: 1px solid #b6b6b6;
  background-color: white;
`;

export const RelativeWrapper = styled.ul`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const ReactionItem = styled.li`
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
