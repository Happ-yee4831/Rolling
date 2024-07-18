import React from 'react';
import { Background, Receiver, RecipientSummary, VerticalDivider } from 'styles/styled/PostId';
import useResponsive from 'hooks/useResponsive';
import RecipientHeaderProvider from 'contexts/RecipientHeaderProvider';
import SendersProfile from './SendersProfile';
import Shared from './Shared';
import ReactionsMenu from './ReactionsMenu';

function RecipientHeader({ recipient, id }) {
  const device = useResponsive();
  const { name, recentMessages, topReactions, messageCount } = recipient;

  return (
    <RecipientHeaderProvider>
      <Background>
        <RecipientSummary>
          <Receiver>To. {name}</Receiver>
          {device === 'pc' && <SendersProfile messages={recentMessages} count={messageCount} />}
          <VerticalDivider $height={28} $marginX={28} />
          <ReactionsMenu id={id} topReactions={topReactions} />
          <VerticalDivider $height={28} $marginX={13} />
          <Shared />
        </RecipientSummary>
      </Background>
    </RecipientHeaderProvider>
  );
}

export default RecipientHeader;
