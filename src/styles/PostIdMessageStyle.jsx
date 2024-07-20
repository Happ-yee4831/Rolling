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

  & button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 320px;
    background-color: #ffffff;
  }

  & li {
    padding: 12px 16px;
    color: #555555;
    line-height: 26px;
  }

  & li:hover {
    background-color: #f6f6f6;
  }

  & .toggle-options {
    position: relative;
    margin: 0;
    padding: 0;
  }

  & ul {
    position: ${(props) => (props.last ? 'static' : 'absolute')};
    width: 320px;
    padding-top: 10px;
    padding-bottom: 10px;
    border: 1px solid #cccccc;
    border-radius: 8px;
    background-color: #ffffff;
    box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
    z-index: 1;
  }

  & p.message {
    display: none;
    &.error {
      display: block;
      margin-top: 4px;
      color: #dc3a3a;
      font-size: 12px;
      font-weight: 400;
      line-height: 18px;
    }
  }

  &.toggle-optons > button {
    margin: 0;
    padding: 0;
    width: auto;
    border: 0;
    border-radius: 0;
    line-height: 0;
    background-color: transparent;
  }

  & button > img {
    width: 16px;
    height: 16px;
  }

  & .selected-profile-img {
    width: 80px;
    height: 80px;
    border-radius: 100px;
  }
`;

const ProfileImgList = styled.div`
  display: flex;
  gap: 4px;
  @media (max-width: 767px) {
    flex-wrap: wrap;
  }
`;

const MakeImgRound = styled.img`
  display: inline-block;
  width: 56px;
  height: 56px;
  border-radius: 100px;
  border: 1px solid #eeeeee;
  @media (max-width: 767px) {
    width: 40px;
    height: 40px;
  }
`;

const ProfileImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  & span {
    color: #555555;
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
  }
`;

const SelectedProfileImg = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  @media (max-width: 767px) {
    gap: 20px;
  }
`;

export {
  StyledSection,
  ProfileImgList,
  MakeImgRound,
  ProfileImgContainer,
  SelectedProfileImg,
};