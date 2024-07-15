import React, { useEffect, useState } from 'react';
import { getRecipientById, getMessagesByRecipientId } from 'api';
import { useParams } from 'react-router-dom';
import { Receiver } from 'styles/styled/PostId';
import axios from 'axios';

const initialDefault = {
  name: '',
  recentMessages: [{ id: 1, profileImageURLs: 'https://avatars.githubusercontent.com/u/170175553?v=4' }],
};

async function getMessagesByNextCursor(nextCursor) {
  if (!nextCursor) return undefined;
  try {
    const result = await axios.get(nextCursor);
    return result;
  } catch (err) {
    throw new Error('잘못 요청된 getMessagesByRecipientId입니다.');
  }
}

function PostId() {
  const { id: recipientId } = useParams();
  const [recipient, setRecipient] = useState(initialDefault);
  const [messages, setMessages] = useState();
  const [nextCursor, setNextCursor] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const { name, recentMessages, topReactions } = recipient;
  console.log(isFetching, nextCursor);

  const handleLoadMessageMore = async () => {
    const { data } = await getMessagesByNextCursor(nextCursor);

    if (data) {
      setMessages(prevMessages => [...prevMessages, ...data.results]);
      setNextCursor(data.next);
    } else {
      setMessages(() => []);
      setNextCursor(null);
    }
    setIsFetching(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, offsetHeight } = document.documentElement;
      if (window.innerHeight + scrollTop >= offsetHeight) {
        setIsFetching(true);
      }
    };
    setIsFetching(true);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isFetching && nextCursor) handleLoadMessageMore();
    else if (!nextCursor) setIsFetching(false);
  }, [isFetching]);

  useEffect(() => {
    const handleLoad = async () => {
      const results = await Promise.all([
        getRecipientById(recipientId),
        getMessagesByRecipientId({
          recipientId,
          offset: 0,
          limit: 5,
        }),
      ]);
      setRecipient(() => results[0]);
      setMessages(() => results[1].results);
      setNextCursor(() => results[1].next);
    };

    handleLoad();
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

        <button type="button" onClick={handleLoadMessageMore}>
          더 보기
        </button>
      </div>
    </main>
  );
}

export default PostId;
