import React, { useEffect } from 'react';
import 'styles/toast.scss';

function Toast({ message, open, setOpen }) {
  const toastClassName = () => {
    if (open) return 'toast-open toast-active';
    return 'toast-close';
  };

  const removeToast = () => {
    setOpen(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [open, setOpen]);

  return (
    <div className={`toast ${toastClassName()}`}>
      {message}
      <button type="button" onClick={removeToast}>
        X
      </button>
    </div>
  );
}

export default Toast;
