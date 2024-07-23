import React, { useEffect, useState } from 'react';
import { getRecipientById } from 'api';
import { useParams } from 'react-router-dom';
import * as S from 'styles/styled/PostId';
import RecipientMessageList from 'components/RecipientMessageList';
import RecipientHeader from 'components/RecipientHeader';

function PostIdEdit() {
  const { id: recipientId } = useParams();
  const [recipient, setRecipient] = useState({});
  const { backgroundColor } = recipient;
  useEffect(() => {
    const handleLoad = async () => {
      const result = await getRecipientById(recipientId);
      setRecipient(() => result);
    };

    handleLoad();
  }, [recipientId]);

  return (
    <S.Background $backgroundColor={backgroundColor}>
      <RecipientHeader recipient={recipient} id={recipientId} />
      <RecipientMessageList recipientId={recipientId} />
    </S.Background>
  );
}

export default PostIdEdit;
