import React, { useEffect, useState } from 'react';
import { getRecipientById, getMessagesByRecipientId } from 'api';
import { useParams } from 'react-router-dom';
import { Receiver } from 'styles/styled/PostId';
import axios from 'axios';

const initialDefault = {
  name: '',
  recentMessages: [{ id: 1, profileImageURLs: 'https://avatars.githubusercontent.com/u/170175553?v=4' }],
};

export async function getMessagesByNextCursor(nextCursor) {
  try {
    const result = await axios.get(nextCursor);
    return result.data;
  } catch (err) {
    throw new Error('잘못 요청된 getMessagesByRecipientId입니다.');
  }
}

function PostId() {
  const { id: recipientId } = useParams();
  const [recipient, setRecipient] = useState(initialDefault);
  const [messages, setMessages] = useState();
  const [nextCursor, setNextCursor] = useState(null);
  const { name, recentMessages, topReactions, messageCount, reactionCount } = recipient;
  console.log(messageCount, reactionCount);

  const handleLoadMessageMore = async () => {
    const nextMessages = await getMessagesByNextCursor(nextCursor);
    console.log(nextMessages);
    setMessages(prevMessages => [...prevMessages, ...nextMessages.results]);
  };

  const handleLoad = async postId => {
    const results = await Promise.all([
      getRecipientById(postId),
      getMessagesByRecipientId({
        recipientId: postId,
        offset: 0,
        limit: 5,
      }),
    ]);
    console.log(results);
    setRecipient(() => results[0]);
    setMessages(() => results[1].results);
    setNextCursor(() => results[1].next);
  };

  useEffect(() => {
    handleLoad(recipientId);
  }, [recipientId]);

  return (
    <main>
      <div>
        <div>
          <Receiver>To. {name}</Receiver>
          {recentMessages?.map(message => (
            <li key={message.id + message.sender}>
              <img width={12} height={12} src={message.profileImageURL} alt="recent messages profile" />
            </li>
          ))}
          {topReactions?.map(reaction => (
            <span key={reaction.id}>{reaction.emoji}</span>
          ))}
        </div>
        <ul>
          <li>plus</li>
          {messages?.map(message => {
            const { id, profileImageURL } = message;
            return (
              <li key={id}>
                <img width={200} height={200} src={profileImageURL} alt="total message profile" />
              </li>
            );
          })}
        </ul>
        <div onClick={handleLoadMessageMore}>target</div>
      </div>
    </main>
  );
}

export default PostId;
