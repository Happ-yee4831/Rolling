import React, { useCallback, useEffect, useState } from 'react';
import { getRecipientById, getMessagesByRecipientId } from 'api';
import { useParams } from 'react-router-dom';
import { Receiver } from 'styles/styled/PostId';
import axios from 'axios';

const throttle = (callback, throttleTime = 300) => {
  let timer;

  return (...argv) => {
    if (timer) return;
    timer = setTimeout(() => {
      callback(...argv);
      timer = null;
    }, throttleTime);
  };
};

function PostId() {
  const { id: recipientId } = useParams();
  const [recipient, setRecipient] = useState({});
  const [messages, setMessages] = useState(null);
  const [nextCursor, setNextCursor] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { name, recentMessages, topReactions } = recipient;

  const fetchMessageMore = useCallback(async () => {
    const { data } = await axios.get(nextCursor);
    setMessages(prev => prev.concat(data.results));
    setNextCursor(data.next);
    setIsLoading(false);
  }, [nextCursor]);

  useEffect(() => {
    const handleScroll = throttle(() => {
      const { scrollTop, offsetHeight } = document.documentElement;
      if (window.innerHeight + scrollTop >= offsetHeight) {
        setIsLoading(true);
      }
    }, 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isLoading && nextCursor) fetchMessageMore();
  }, [isLoading, nextCursor, fetchMessageMore]);

  useEffect(() => {
    const handleLoad = async () => {
      setIsLoading(true);
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
      setIsLoading(false);
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

        <button disabled={isLoading} type="button" onClick={fetchMessageMore}>
          더 보기
        </button>
      </div>
    </main>
  );
}

export default PostId;
