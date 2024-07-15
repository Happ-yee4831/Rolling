import React from 'react';
import { Profile, RecentSenders, Sender, TotalSenders } from 'styles/styled/PostId';

const Wrapper = styled.div`
  position: relative;
  &::after {
    position: absolute;
    border: 1px solid;
    right: -28px;
    height: 80%;
  }
`;

function SendersProfile({ messages, count }) {
  return (
    <Wrapper>
      <RecentSenders>
        {messages?.map(message => (
          <Sender key={message.id + message.sender}>
            <Profile src={message.profileImageURL} alt="recent messages profile" />
          </Sender>
        ))}
        <Sender>+{count - 3}</Sender>
      </RecentSenders>
      <TotalSenders>
        {count}
        <span>명이 작성했어요!</span>
      </TotalSenders>
    </Wrapper>
  );
}

export default SendersProfile;
