import React, { useEffect, useState } from 'react';
import { getRecipientById } from 'api';
import { useParams } from 'react-router-dom';
import * as S from 'styles/styled/PostId';
import RecipientMessageList from 'components/RecipientMessageList';
import RecipientHeader from 'components/RecipientHeader';

function PostId() {
  const { id } = useParams();
  const [recipient, setRecipient] = useState({});
  const { backgroundColor } = recipient;

  useEffect(() => {
    const handleLoad = async () => {
      const { data } = await getRecipientById(id);
      setRecipient(() => data);
    };

    handleLoad();
  }, [id]);

  return (
    <S.Background $backgroundColor={backgroundColor}>
      <RecipientHeader recipient={recipient} id={id} />
      <RecipientMessageList id={id} />
    </S.Background>
  );
}

export default PostId;
