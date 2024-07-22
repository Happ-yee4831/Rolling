import React from 'react';
import * as S from 'styles/styled/PostId';
import getformatDate from 'utils/getformatDate';
import { TrashBtn } from './Buttons';

function RecipientMessage({ message, onModal, isEdit, onClickTrashBtn }) {
  const { profileImageURL, relationship, sender, content, createdAt, font } = message;

  const handleModal = () => {
    onModal(message);
  };

  return (
    // <S.MessageCard font={font} onClick={handleModal}>
    <S.MessageCard onClick={handleModal}>
      <S.Flex $gap={14} item="center">
        <S.Profile $width={56} $height={56} src={profileImageURL} alt="total message profile" />
        {(isEdit && (
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <S.Flex $flex="column" $gap="6">
              <div>From. {sender}</div>
              <S.Relation $relation={relationship}>{relationship}</S.Relation>
            </S.Flex>
            <TrashBtn onClick={onClickTrashBtn} styles={{ width: '40px', height: '40px' }} />
          </div>
        )) || (
          <S.Flex $flex="column" $gap="6">
            <div>From. {sender}</div>
            <S.Relation $relation={relationship}>{relationship}</S.Relation>
          </S.Flex>
        )}
      </S.Flex>
      <S.HorizontalDivider $width="100%" $marginY={15} />
      <S.Content>{content}</S.Content>
      <S.Date>{getformatDate(createdAt)}</S.Date>
    </S.MessageCard>
  );
}

export default RecipientMessage;
