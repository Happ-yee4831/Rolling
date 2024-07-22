import styled, { css } from 'styled-components';
import { font16Regular } from './Toast';
import media from './media';

const fontFamily = {
  'Noto Sans': css`
    font-family: 'Noto Sans Korean', 'Noto Sans';
  `,
  Pretendard: css`
    font-family: Pretendard, 'Pretendard Variable';
  `,
  나눔명조: css`
    font-family: 'Nanum Myeongjo';
  `,
  '나눔손글씨 손편지체': css`
    font-family: Handletter;
  `,
};

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

export const Receiver = styled.h1`
  font-size: 28px;
  line-height: 42px;
  letter-spacing: -0.01em;
  text-align: left;
  font-weight: 700;
`;

export const RecipientSummary = styled(Container)`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr repeat(5, auto);
  align-items: center;
  padding: 13px 24px;
  background-color: white;
  ${media.mobile`
		grid-template-columns: repeat(5, auto);
		grid-template-rows: 1fr;
		justify-content: start;
		padding: 12px 20px;
		${Receiver} {
			grid-column: 1 / -1;
		}
	`}
`;

export const VerticalDivider = styled.div`
  width: 1px;
  background-color: ${({ theme }) => theme.color.grayBorder};
  height: ${({ $height }) => `${$height}px`};
  margin-left: ${({ $marginX, $marginLeft }) => `${$marginX ?? $marginLeft}px`};
  margin-right: ${({ $marginX, $marginRight }) => `${$marginX ?? $marginRight}px`};
`;

export const HorizontalDivider = styled.div`
  height: 1px;
  background-color: ${({ theme }) => theme.color.grayBorder};
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
  grid-template-columns: repeat(3, 384px);
  grid-auto-rows: 280px;
  justify-content: center;
  gap: 24px;
  /* margin: 114px auto 0; */
  margin-top: 11px;
  padding-bottom: 246px;
  min-height: 100vh;
  ${media.tablet`
		grid-template-columns: repeat(2, 352px);
		grid-auto-rows: 284px;
	`}
  ${media.mobile`
		grid-template-columns: repeat(1, 320px);
		grid-auto-rows: 230px;
	`}
`;

export const MessageCard = styled.li`
  ${({ font }) => fontFamily[font] ?? fontFamily['Noto Sans']}
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 28px 24px;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0px 2px 12px 0px #00000014;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 2px 12px 0px #00000060;
  }
`;

export const SendMessageCard = styled(MessageCard)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
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
  ${({ $width }) => $width && `width: ${$width}`}
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
  max-width: 75%;
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

export const DropDownList = styled.ul`
  position: absolute;
  border-radius: 8px;
  border: 1px solid #b6b6b6;
  background-color: white;
  box-shadow: 0px 2px 12px 0px #00000014;
`;

export const SharedList = styled(DropDownList)`
  top: 48px;
  right: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
`;

export const SharedItem = styled.li`
  ${font16Regular}
  width: 140px;
  padding: 12px 16px;
  &:hover {
    background-color: ${({ theme }) => theme.color.gray200};
  }
`;

export const ReactionsList = styled(DropDownList)`
  top: 48px;
  right: 100px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 24px;
  gap: 10px;
  ${media.tablet`
		grid-template-columns: repeat(3, 1fr);
	`}
  ${media.mobile`
		top: 48px;
  	right: 0;
	`}
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
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  padding: 6px;
  ${media.mobile`
		padding: 0px;
	`}
`;

export const BorderButton = styled(Button)`
  gap: 4px;
  border: ${({ theme }) => `1px solid ${theme.color.gray300}`};
  padding: 6px 16px;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  ${media.mobile`
		padding: 6px 8px;
	`}
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 11px;
`;

export const Profile = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
`;

export const Sender = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  background-color: white;
  border-radius: 50%;
  border: 1.4px solid white;
  ${Profile} {
    width: 28px;
    height: 28px;
  }
`;

export const RecentSenders = styled.ul`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 76px;
  height: 28px;
  ${Sender} {
    position: absolute;
  }
  ${Sender}:nth-child(2) {
    left: 14px;
    z-index: 1;
  }
  ${Sender}:nth-child(3) {
    left: 28px;
    z-index: 2;
  }
  ${Sender}:nth-child(4) {
    left: 42px;
    z-index: 2;
  }
`;

export const TotalSenders = styled.p`
  font-size: 18px;
  font-weight: 700;
  line-height: 27px;
  text-align: left;
  span {
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
    text-align: left;
  }
`;
