import React, { useState } from 'react';
import { BorderButton, DropDownItem, DropDownMenu, RelativeWrapper } from 'styles/styled/PostId';
import SharedImage from 'assets/images/share-24@2x.png';
import { createPortal } from 'react-dom';
import Toast from './Toast';

function Shared() {
  const [dropDown, setDropDown] = useState(false);
  const [initToast, setInitToast] = useState(false);
  const [toast, setToast] = useState(true);

  const handleDropDown = () => {
    setDropDown(p => !p);
  };

  const handleCopyClipBoard = async () => {
    setInitToast(true);
    try {
      await navigator.clipboard.writeText(window.location.href);
      setToast(true);
    } catch (e) {
      alert('failed');
      setToast(false);
    }
  };

  return (
    <RelativeWrapper>
      <BorderButton onClick={handleDropDown}>
        <img src={SharedImage} alt="shared" width={24} height={24} />
      </BorderButton>
      {dropDown && (
        <DropDownMenu>
          <DropDownItem>카카오톡 공유</DropDownItem>
          <DropDownItem onClick={handleCopyClipBoard}>URL 공유</DropDownItem>
        </DropDownMenu>
      )}
      {initToast &&
        createPortal(<Toast message="URL이 등록되었습니다." open={toast} setOpen={setToast} />, document.body)}
    </RelativeWrapper>
  );
}

export default Shared;
