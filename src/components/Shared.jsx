import React, { useContext, useState } from 'react';
import { createPortal } from 'react-dom';
import * as S from 'styles/styled/PostId';
import SharedImage from 'assets/images/share-24@2x.png';
import { RecipientHeaderContext } from 'contexts/RecipientHeaderProvider';
import shareKakao from 'utils/shareKakao';
import Toast from './Toast';

function Shared({ recipient }) {
  const [initToast, setInitToast] = useState(false);
  const [toast, setToast] = useState(true);
  const { dropdowns, handleDropdownToggle } = useContext(RecipientHeaderContext);
  const { isSharedOpen } = dropdowns;

  const handleCopyClipBoard = async () => {
    setInitToast(true);
    try {
      await navigator.clipboard.writeText(window.location.href);
      setToast(true);
    } catch (e) {
      setToast(false);
    }
  };

  return (
    <S.RelativeWrapper>
      <S.BorderButton onClick={() => handleDropdownToggle('isSharedOpen')}>
        <img src={SharedImage} alt="shared" width={24} height={24} />
      </S.BorderButton>
      {isSharedOpen && (
        <S.SharedList>
          <S.SharedItem onClick={() => shareKakao(window.location.href, recipient)}>카카오톡 공유</S.SharedItem>
          <S.SharedItem onClick={handleCopyClipBoard}>URL 공유</S.SharedItem>
        </S.SharedList>
      )}
      {initToast &&
        createPortal(<Toast message="URL이 등록되었습니다." open={toast} setOpen={setToast} />, document.body)}
    </S.RelativeWrapper>
  );
}

export default Shared;
