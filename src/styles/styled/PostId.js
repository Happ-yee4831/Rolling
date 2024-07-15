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

export const VerticalDivider = styled.div`
  border: 1px solid ${({ theme }) => theme.color.grayBorder};
  height: ${({ height }) => `${height}px`};
  margin-left: ${({ marginX, marginLeft }) => `${marginX ?? marginLeft}px`};
  margin-right: ${({ marginX, marginRight }) => `${marginX ?? marginRight}px`};
`;
