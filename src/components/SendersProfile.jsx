import React from 'react';
import { Profile, RecentSenders, Sender, TotalSenders } from 'styles/styled/PostId';

function SendersProfile({ messages, count }) {
  return (
    <>
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
    </>
  );
}

export default SendersProfile;
