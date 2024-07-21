import React from 'react';
import { Background, Receiver, RecipientSummary } from 'styles/styled/PostId';
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
      <Background>
        <RecipientSummary>
          <Receiver>To. {name}</Receiver>
          {device === 'pc' && <SendersProfile messages={recentMessages} count={messageCount} />}
          <ReactionsMenu id={id} />
          <Shared recipient={recipient} />
        </RecipientSummary>
      </Background>
    </RecipientHeaderProvider>
  );
}

export default RecipientHeader;
