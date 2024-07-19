import styled, { css, keyframes } from 'styled-components';

const toastInBottom = keyframes`
	from {
    transform: translate(-50%, 300%);
  }
  to {
    transform: translate(-50%, 0);
  }
`;

const toastOutBottom = keyframes`
	from {
    transform: translate(-50%, 0);
  }
  to {
    transform: translate(-50%, 300%);
  }
`;

export const font28Bold = css`
  font-family: Pretendard;
  font-size: 28px;
  font-weight: 700;
  line-height: 42px;
  letter-spacing: -0.01em;
  text-align: left;
`;

export const font16Regular = css`
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: -0.01em;
  text-align: left;
`;

export const ToastContainer = styled.div`
  position: fixed;
  bottom: 70px;
  left: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  width: 524px;
  height: 64px;
  padding: 19px 30px;
  border-radius: 8px;
  z-index: 20;
  background-color: #000000cc;
  transform: translate(-50%, 300%);

  ${({ open }) =>
    open
      ? css`
          transform: translate(-50%, 0);
          animation: 1s ${toastInBottom};
        `
      : css`
          animation: 1s ${toastOutBottom};
        `}
`;

export const ToastMessage = styled.span`
  flex-grow: 1;
  ${font16Regular}
  color: white;
`;

export const ToastImage = styled.img`
  width: 24px;
  height: 24px;
`;

export const ToastClose = styled.button`
  background-color: transparent;
`;
