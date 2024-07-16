import React from 'react';
import { Profile, RecentSenders, Sender, TotalSenders, Wrapper } from 'styles/styled/SendersProfile';

function SendersProfile({ messages, count }) {
  return (
    <Wrapper>
      <RecentSenders>
        {messages?.map(message => (
          <Sender key={message.id + message.sender}>
            <Profile src={message.profileImageURL} alt="recent messages profile" />
          </Sender>
        ))}
        {count && count > 3 && <Sender>+{count - 3}</Sender>}
      </RecentSenders>
      {count && (
        <TotalSenders>
          {count}
          <span>명이 작성했어요!</span>
        </TotalSenders>
      )}
    </Wrapper>
  );
}

export default SendersProfile;
