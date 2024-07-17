import React from 'react';
import * as S from 'styles/styled/PostId';
import { Profile } from 'styles/styled/SendersProfile';
import getformatDate from 'utils/getformatDate';

function RecipientMessage({ message, onModal }) {
  const { profileImageURL, relationship, sender, content, createdAt } = message;

  const handleModal = () => {
    onModal(message);
  };

  return (
    <S.MessageCard onClick={handleModal}>
      <S.Flex $gap={14} item="center">
        <Profile $width={56} $height={56} src={profileImageURL} alt="total message profile" />
        <S.Flex $flex="column" $gap="6">
          <div>From. {sender}</div>
          <S.Relation $relation={relationship}>{relationship}</S.Relation>
        </S.Flex>
      </S.Flex>
      <S.HorizontalDivider $width="100%" $marginY={15} />
      <S.Content>{content}</S.Content>
      <S.Date>{getformatDate(createdAt)}</S.Date>
    </S.MessageCard>
  );
}

export default RecipientMessage;
