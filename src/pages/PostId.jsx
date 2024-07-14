import React, { useEffect, useState } from 'react';
import getRecipientById from 'api';
import { useParams } from 'react-router-dom';
import { Receiver } from 'styles/styled/PostId';

const initialDefault = {
  name: '',
  recentMessages: [{ id: 1, profileImageURLs: 'https://avatars.githubusercontent.com/u/170175553?v=4' }],
};

function getSendersProfile(messages) {
  const recentSendersProfile = [];
  const sendersId = [];

  for (let i = 0; i < messages.length; i += 1) {
    if (sendersId.length > 4) break;
    if (sendersId.includes(messages[i].id) === false) {
      sendersId.push(messages[i].id);
      recentSendersProfile.push(messages[i].profileImageURL);
    }
  }

  return { recentSendersProfile };
}

function PostId() {
  const { id } = useParams();
  const [recipient, setRecipient] = useState(initialDefault);
  const { name, recentMessages } = recipient;
  const { recentSendersProfile } = getSendersProfile(recentMessages);
  console.log(recentSendersProfile);

  console.log(recipient);
  const handleLoad = async postId => {
    const result = await getRecipientById(postId);
    setRecipient(result);
  };

  useEffect(() => {
    handleLoad(id);
  }, [id]);

  return (
    <main>
      <div>
        <div>
          <Receiver>To. {name}</Receiver>
        </div>
        <div>
          <div>plus</div>
          {recentMessages.map(message => (
            <img key={message.id} src={message.profileImageURL} alt="profile" />
          ))}
        </div>
      </div>
    </main>
  );
}

export default PostId;
