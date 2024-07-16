import React, { useCallback, useEffect, useRef, useState } from 'react';
import { getRecipientById, getMessagesByRecipientId } from 'api';
import { useParams } from 'react-router-dom';
import { Container, Receiver, RecipientSummary, VerticalDivider } from 'styles/styled/PostId';
import axios from 'axios';
import SendersProfile from 'components/SendersProfile';
import Reactions from 'components/Reactions';

function PostId() {
  const { id: recipientId } = useParams();
  const [recipient, setRecipient] = useState({});
  const [messages, setMessages] = useState(null);
  const [nextCursor, setNextCursor] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const target = useRef();
  const { name, recentMessages, topReactions, messageCount } = recipient;
  console.log(recipient);

  const fetchMessageMore = useCallback(async () => {
    const { data } = await axios.get(nextCursor);
    setMessages(prev => prev.concat(data.results));
    setNextCursor(data.next);
    setIsLoading(false);
  }, [nextCursor]);

  useEffect(() => {
    const { current } = target;
    const handleObserve = entries => {
      const { isIntersecting } = entries[0];
      if (isIntersecting) setIsLoading(true);
    };
    const observer = new IntersectionObserver(handleObserve);
    if (current) {
      observer.observe(current);
    }
    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
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
          limit: 12,
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
    <Container>
      <RecipientSummary>
        <Receiver>To. {name}</Receiver>
        <SendersProfile messages={recentMessages} count={messageCount} />
        <VerticalDivider height={28} marginX={28} />
        <Reactions reactions={topReactions} />
      </RecipientSummary>
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

      <button ref={target} style={{ visibility: 'hidden', height: '0px' }} type="button" onClick={fetchMessageMore}>
        더 보기
      </button>
    </Container>
  );
}

export default PostId;
