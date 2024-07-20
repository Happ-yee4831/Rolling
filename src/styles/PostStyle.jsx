/* eslint-disable */
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
    background-color: #F8F0FF;
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

export {
  CreateButtonStyle,
  UpperLowerInterval,
  UnselectedButton,
  SelectedButton,
  ListInterval,
}