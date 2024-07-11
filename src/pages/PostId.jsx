import React, { useState } from 'react';
import thumbEmoji from 'assets/images/thumb.png';
import dummyRecipient from 'api/dummy/dummy';

function PostId() {
  const [recipient] = useState(dummyRecipient);
  const { name, recentMessages } = recipient;
  console.log(recipient);
  return (
    <main>
      <div>
        <h1>To. {name}</h1>
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
