import React, { useEffect, useState } from 'react';
import thumbEmoji from 'assets/images/thumb.png';
import getRecipientById from 'api';
import { useParams } from 'react-router-dom';

const initialDefault = {
  name: '',
  recentMessages: [{ id: 1, profileImageURLs: 'https://avatars.githubusercontent.com/u/170175553?v=4' }],
};

function PostId() {
  const { id } = useParams();
  const [recipient, setRecipient] = useState(initialDefault);
  const { name, backgroundImageURL, recentMessages } = recipient;

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
        <h1>To. {name}</h1>
        <img src={backgroundImageURL} alt="background" />
        <figure>
          {recentMessages.map(message => (
            <img key={message.id} src={message.profileImageURL} alt="profile" />
          ))}
        </figure>
        <div>
          <img src={thumbEmoji} alt="emoji" />
          <p>24</p>
        </div>
        <div>
          <img src={thumbEmoji} alt="emoji" />
          <p>24</p>
        </div>
        <div>
          <img src={thumbEmoji} alt="emoji" />
          <p>24</p>
        </div>
      </div>
    </main>
  );
}

export default PostId;
