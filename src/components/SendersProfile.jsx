import React from 'react';
import styled from 'styled-components';
import { Profile, RecentSenders, Sender, TotalSenders } from 'styles/styled/PostId';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 11px;
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
