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
