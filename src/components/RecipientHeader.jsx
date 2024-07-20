import React from 'react';
import { Background, Flex, HorizontalDivider, Receiver, RecipientSummary, VerticalDivider } from 'styles/styled/PostId';
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
        {device === 'pc' && (
          <RecipientSummary>
            <Receiver>To. {name}</Receiver>
            <SendersProfile messages={recentMessages} count={messageCount} />
            <VerticalDivider $height={28} $marginX={28} />
            <ReactionsMenu id={id} />
            <VerticalDivider $height={28} $marginX={13} />
            <Shared recipient={recipient} />
          </RecipientSummary>
        )}
        {device === 'tablet' && (
          <RecipientSummary>
            <Receiver>To. {name}</Receiver>
            <ReactionsMenu id={id} />
            <VerticalDivider $height={28} $marginX={13} />
            <Shared recipient={recipient} />
          </RecipientSummary>
        )}
        {device === 'mobile' && (
          <>
            <RecipientSummary>
              <Receiver>To. {name}</Receiver>
            </RecipientSummary>
            <HorizontalDivider $width="100%" />
            <RecipientSummary>
              <Flex $item="center">
                <ReactionsMenu id={id} />
                <VerticalDivider $height={28} $marginX={13} />
                <Shared recipient={recipient} />
              </Flex>
            </RecipientSummary>
          </>
        )}
      </Background>
    </RecipientHeaderProvider>
  );
}

export default RecipientHeader;
