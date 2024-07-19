import React, { useEffect, useState } from 'react';
import { getRecipientById } from 'api';
import { useParams } from 'react-router-dom';
import { Background } from 'styles/styled/PostId';
import RecipientMessageList from 'components/RecipientMessageList';
import RecipientHeader from 'components/RecipientHeader';

function PostId() {
  const { id } = useParams();
  const [recipient, setRecipient] = useState({});
  const { backgroundColor } = recipient;

  useEffect(() => {
    const handleLoad = async () => {
      const result = await getRecipientById(id);
      setRecipient(() => result);
    };

    handleLoad();
  }, [id]);

  return (
    <Background $backgroundColor={backgroundColor}>
      <RecipientHeader recipient={recipient} id={id} />
      <RecipientMessageList id={id} />
    </Background>
  );
}

export default PostId;
