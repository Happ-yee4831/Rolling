import React, { useEffect, useState } from 'react';
import { getRecipientById } from 'api';
import { useParams } from 'react-router-dom';
import { Background, Receiver, RecipientSummary, VerticalDivider } from 'styles/styled/PostId';
import SendersProfile from 'components/SendersProfile';
import Reactions from 'components/ReactionsMenu';
import Shared from 'components/Shared';
import RecipientMessageList from 'components/RecipientMessageList';

function PostId() {
  const { id: recipientId } = useParams();
  const [recipient, setRecipient] = useState({});
  const { name, recentMessages, topReactions, messageCount, backgroundColor } = recipient;

  useEffect(() => {
    const handleLoad = async () => {
      const result = await getRecipientById(recipientId);
      setRecipient(() => result);
    };

    handleLoad();
  }, [recipientId]);

  return (
    <Background $backgroundColor={backgroundColor}>
      <Background>
        <RecipientSummary>
          <Receiver>To. {name}</Receiver>
          <SendersProfile messages={recentMessages} count={messageCount} />
          <VerticalDivider $height={28} $marginX={28} />
          <Reactions id={recipientId} reactions={topReactions} />
          <VerticalDivider $height={28} $marginX={13} />
          <Shared />
        </RecipientSummary>
      </Background>
      <RecipientMessageList recipientId={recipientId} />
    </Background>
  );
}

export default PostId;
