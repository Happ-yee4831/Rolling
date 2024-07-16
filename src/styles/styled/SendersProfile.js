import styled from 'styled-components';

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
