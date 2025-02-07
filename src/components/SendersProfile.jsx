import React from 'react';
import * as S from 'styles/styled/PostId';

function SendersProfile({ messages, count }) {
  return (
    <>
      <S.Wrapper>
        <S.RecentSenders>
          {count !== 0 &&
            messages?.map(message => (
              <S.Sender key={message.id + message.sender}>
                <S.Profile src={message.profileImageURL} alt="recent messages profile" />
              </S.Sender>
            ))}
          {count !== 0 && count > 3 && <S.Sender>+{count - 3}</S.Sender>}
        </S.RecentSenders>
        {count !== 0 && (
          <S.TotalSenders>
            {count}
            <span>명이 작성했어요!</span>
          </S.TotalSenders>
        )}
      </S.Wrapper>
      <S.VerticalDivider $height={28} $marginX={28} />
    </>
  );
}

export default SendersProfile;
