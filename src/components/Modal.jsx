import React from 'react';
import * as S from 'styles/styled/PostId';
import { Profile } from 'styles/styled/SendersProfile';
import getformatDate from 'utils/getformatDate';

function Modal({ value, onModalClose }) {
  if (value === null) {
    return null;
  }
  const { profileImageURL, relationship, sender, content, createdAt } = value;
  return (
    <S.ScreenBlinder>
      <S.ModalMessageCard as="div">
        <S.Flex $width="100%" $gap={14} $item="center" $content="space-between">
          <Profile $width={56} $height={56} src={profileImageURL} alt="total message profile" />
          <S.Flex $flex="column" $gap="6" $grow="1">
            <div>From. {sender}</div>
            <S.Relation $relation={relationship}>{relationship}</S.Relation>
          </S.Flex>
          <S.Date>{getformatDate(createdAt)}</S.Date>
        </S.Flex>
        <S.HorizontalDivider $width="100%" $marginY={15} />
        <S.Content>{content}</S.Content>
        <S.ModalClose type="button" onClick={onModalClose}>
          확인
        </S.ModalClose>
      </S.ModalMessageCard>
    </S.ScreenBlinder>
  );
}

export default Modal;
