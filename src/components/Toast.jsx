import React, { useEffect } from 'react';
import 'styles/toast.scss';
import CloseImage from 'assets/images/close@2x.png';
import SuccessImage from 'assets/images/completed@2x.png';
import { ToastClose, ToastContainer, ToastImage, ToastMessage } from 'styles/styled/Toast';

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
    <ToastContainer open={open}>
      <ToastImage src={SuccessImage} alt="toast Success" />
      <ToastMessage>{message}</ToastMessage>
      <ToastClose onClick={removeToast}>
        <ToastImage src={CloseImage} alt="toast close" />
      </ToastClose>
    </ToastContainer>
  );
}

export default Toast;
