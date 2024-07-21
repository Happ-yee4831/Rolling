import React, { useEffect } from 'react';
import 'styles/toast.scss';
import CloseImage from 'assets/images/close@2x.png';
import SuccessImage from 'assets/images/completed@2x.png';
import * as S from 'styles/styled/Toast';

function Toast({ message, open, setOpen }) {
  const removeToast = () => {
    setOpen(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(false);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [open, setOpen]);

  return (
    <S.ToastContainer open={open}>
      <S.ToastImage src={SuccessImage} alt="toast Success" />
      <S.ToastMessage>{message}</S.ToastMessage>
      <S.ToastClose onClick={removeToast}>
        <S.ToastImage src={CloseImage} alt="toast close" />
      </S.ToastClose>
    </S.ToastContainer>
  );
}

export default Toast;
