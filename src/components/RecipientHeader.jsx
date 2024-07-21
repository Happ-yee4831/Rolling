import React from 'react';
import * as S from 'styles/styled/PostId';
import useResponsive from 'hooks/useResponsive';
import RecipientHeaderProvider from 'contexts/RecipientHeaderProvider';
import SendersProfile from './SendersProfile';
import Shared from './Shared';
import ReactionsMenu from './ReactionsMenu';

function RecipientHeader({ recipient, id }) {
  const device = useResponsive();
  const { name, recentMessages, messageCount } = recipient;

  return (
    <RecipientHeaderProvider>
      <S.Background>
        <S.RecipientSummary>
          <S.Receiver>To. {name}</S.Receiver>
          {device === 'pc' && <SendersProfile messages={recentMessages} count={messageCount} />}
          <ReactionsMenu id={id} />
          <Shared recipient={recipient} />
        </S.RecipientSummary>
      </S.Background>
    </RecipientHeaderProvider>
  );
}

export default RecipientHeader;
