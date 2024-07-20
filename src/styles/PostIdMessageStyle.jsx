/* eslint-disable */
import styled from 'styled-components';



const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;

  & label {
    color: #181818;
    font-size: 24px;
    font-weight: 700;
    line-height: 36px;
  }

  & input,
  & button {
    padding: 12px 16px;
    border-radius: 8px;
    border: 1px solid #cccccc;
    line-height: 26px;
    cursor: pointer;
  }

  & input:focus,
  & button.focus {
    border: 2px solid #555555;
  }

  & input::placeholder,
  & button {
    color: #555555;
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
    text-align: left;
  }

  & input {
    width: 100%;
  }

  & input.error {
    border: 1px solid #dc3a3a;
  }
`;    