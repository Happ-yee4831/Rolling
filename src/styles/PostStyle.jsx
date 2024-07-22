import styled from 'styled-components';

const CreateButtonStyle = styled.button`
  display: block;
  width: 720px;
  padding: 14px 24px;
  margin: 0 auto;
  border-radius: 12px;
  border: none;
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: -0.18px;

  background-color: ${props => (props.disabled ? '#CCCCCC' : '#9935FF')};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${props => (props.disabled ? 0.5 : 1)};

  &:hover {
    background-color: ${props => (props.disabled ? '#CCCCCC' : '#861DEE')};
  }

  @media (max-width: 1200px) {
    margin-bottom: 24px;
  }
  @media (max-width: 768px) {
    width: 320px;
    padding: 14px 0px;
    margin-bottom: 24px;
  }
`;

const UpperLowerInterval = styled.div`
  display: flex;
  margin-top: 24px;
`;

const UnselectedButton = styled.button`
  box-sizing: content-box;
  background-color: #f6f6f6;
  border: none;
  border-radius: 6px;
  width: 90px;
  padding: 7px 16px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: -0.16px;
  &:hover {
    width: 90px;
    padding: 6px 14px;
    font-weight: 700;
    background-color: #f8f0ff;
    border: 2px solid #861dee;
    color: #861dee;
  }
  @media (max-width: 768px) {
    padding: 7px 14px;
    &:hover {
      padding: 5px 12px;
    }
  }
`;

const SelectedButton = styled.button`
  box-sizing: content-box;
  border: none;
  border-radius: 6px;
  width: 90px;
  padding: 6px 14px;
  font-weight: 700;
  background-color: #ffffff;
  border: 2px solid #861dee;
  color: #861dee;
  line-height: 26px;
  letter-spacing: -0.16px;
  @media (max-width: 768px) {
    padding: 7px 14px;
    &:hover {
      padding: 5px 12px;
    }
  }
`;

const ListInterval = styled.div`
  margin: 45px 0;
  display: flex;
  justify-content: space-between;
  @media (max-width: 1200px) {
    margin: 40px 0 340px;
  }
  @media (max-width: 768px) {
    flex-wrap: wrap;
    width: 320px;
    margin: 28px 0 82px;
    gap: 12px;
  }
`;

const ListShape = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 168px;
  height: 168px;
  border-radius: 16px;
  @media (max-width: 768px) {
    width: 154px;
    height: 154px;
  }
`;

const BackgroundColorList = styled(ListShape)`
  &.beige {
    background-color: #ffe2ad;
  }
  &.purple {
    background-color: #ecd9ff;
  }
  &.green {
    background-color: #d0f5c3;
  }
  &.blue {
    background-color: #b1e4ff;
  }
`;

const BackgroundImgList = styled(ListShape)`
  background-image: url(${props => props.src});
`;

const SubmitForm = styled.form``;

const TopContainer = styled.div`
  width: 720px;
  margin: 57px auto 0;
  .target {
    font-size: 24px;
    font-weight: 700;
    line-height: 42px;
    letter-spacing: -0.24px;
    margin-bottom: 12px;
  }
  .errorMessage {
    font-size: 12px;
    margin-top: 5px;
    color: red;
    text-indent: 2px;
  }
  @media (max-width: 1200px) {
    margin: 49px auto 0;
    .target {
      line-height: 36px;
    }
  }
  @media (max-width: 768px) {
    width: 320px;
    margin: 50px auto 0;
    .target {
      line-height: 36px;
    }
  }
`;

const ToNameInput = styled.input`
  width: 720px;
  height: 25px;
  padding: 12px 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  &::placeholder {
    font-weight: 400;
    line-height: 26px;
    letter-spacing: -0.16px;
  }
  @media (max-width: 768px) {
    width: 320px;
  }
`;

const BottomContainer = styled.div`
  width: 720px;
  margin: 50px auto 0;

  & .text .title {
    color: #181818;
    font-size: 24px;
    font-weight: 700;
    line-height: 36px;
    letter-spacing: -0.24px;
  }

  & .text .subtitle {
    color: #555;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: -0.16px;
  }
  @media (max-width: 1200px) {
    margin: 54px auto 0;
  }
  @media (max-width: 768px) {
    width: 320px;
    margin: 48px auto 0;
  }
`;

export {
  CreateButtonStyle,
  UpperLowerInterval,
  UnselectedButton,
  SelectedButton,
  ListInterval,
  ListShape,
  BackgroundColorList,
  BackgroundImgList,
  SubmitForm,
  TopContainer,
  ToNameInput,
  BottomContainer,
};
