import { getMessagesByRecipientId } from 'api';
import axios from 'axios';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Container, MessageList, SendMessageCard } from 'styles/styled/PostId';
import PlusImage from 'assets/images/Enabled@2x.png';
import getUrlInfo from 'utils/getUrlInfo';
import { createPortal } from 'react-dom';
import { useLocation } from 'react-router-dom';
import RecipientMessage from './RecipientMessage';
import Modal from './Modal';

function RecipientMessageList({ recipientId }) {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [nextCursor, setNextCursor] = useState(null);
  const [modalMessage, setModalMessage] = useState(null);
  const target = useRef();
  const { pathname } = useLocation();

  const fetchMessages = useCallback(async () => {
    const urlInfo = getUrlInfo(nextCursor);
    if (urlInfo) {
      const { url, params } = urlInfo;
      params.limit = 6;
      const { data } = await axios.get(url, {
        params,
      });
      setMessages(prev => prev.concat(data.results));
      setNextCursor(data.next);
      setIsLoading(false);
    }
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
    if (isLoading && nextCursor) fetchMessages();
  }, [isLoading, nextCursor, fetchMessages]);

  useEffect(() => {
    const handleLoad = async () => {
      const data = await getMessagesByRecipientId({
        recipientId,
        offset: 0,
        limit: 5,
      });
      setMessages(() => data.results);
      setNextCursor(() => data.next);
    };

    handleLoad();
  }, [recipientId]);

  const onModalOpen = message => {
    setModalMessage(message);
  };

  const onModalClose = () => {
    setModalMessage(null);
  };

  const [isEdit, _] = useState(pathname.startsWith('/post') && pathname.endsWith('/edit'));

  return (
    <Container>
      <MessageList>
        <SendMessageCard>
          <img width={56} height={56} src={PlusImage} alt="add Message" />
        </SendMessageCard>
        {messages?.map(message => {
          if (isEdit) {
            return (
              <RecipientMessage
                onModal={onModalOpen}
                key={message.id}
                message={message}
                isEdit={isEdit}
                onClickTrashBtn={e => console.log('onClickTrashBtn', e)}
              />
            );
          }
          return <RecipientMessage onModal={onModalOpen} key={message.id} message={message} />;
        })}
        <div ref={target} />
      </MessageList>
      {createPortal(<Modal value={modalMessage} onModalClose={onModalClose} />, document.body)}
    </Container>
  );
}

export default RecipientMessageList;
