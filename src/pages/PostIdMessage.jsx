/* eslint-disable */
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { FormContainer, CreateButtonStyle } from '../styles/PostIdMessageStyle';
import FromNameInput from '../components/PostIdMessagePageComponents/FromNameInput';
import ProfileImgInputSelector from '../components/PostIdMessagePageComponents/ProfileImgInputSelector';
import TextContentBox from '../components/PostIdMessagePageComponents/TextContentBox';
import RelationshipAndFontSelector from '../components/PostIdMessagePageComponents/RelationshipAndFontSelector';
import { createMessage } from '../api/someApi';

const PostIdMessage = () => {
  const [sender, setSender] = useState('');
  const [profileImageURL, setProfileImageURL] = useState('https://ibb.co/cvKLyF5');
  const [relationship, setRelationship] = useState('');
  const [content, setContent] = useState('');
  const [font, setFont] = useState('');
  const navigate = useNavigate();

  const { id } = useParams();

  const handleSubmit = async e => {
    e.preventDefault();
    const messageData = {
      team: '8-5',
      recipientId: id,
      sender,
      profileImageURL,
      relationship,
      content,
      font,
    };

    await createMessage(messageData);
    navigate(`/post/${id}`);
  };

  const isButtonDisabled = !sender || !content;

  return (
    <>
      <FormContainer onSubmit={handleSubmit}>
        <FromNameInput sender={sender} setSender={setSender}>
          From.
        </FromNameInput>
        <ProfileImgInputSelector profileImageURL={profileImageURL} setProfileImageURL={setProfileImageURL}>
          프로필 이미지
        </ProfileImgInputSelector>
        <RelationshipAndFontSelector
          optionType="relationship"
          relationship={relationship}
          setRelationship={setRelationship}>
          상대와의 관계
        </RelationshipAndFontSelector>
        <TextContentBox content={content} setContent={setContent}>
          내용을 입력해 주세요
        </TextContentBox>
        <RelationshipAndFontSelector optionType="font" last font={font} setFont={setFont}>
          폰트 선택
        </RelationshipAndFontSelector>
        <CreateButtonStyle type="submit" disabled={isButtonDisabled}>
          생성하기
        </CreateButtonStyle>
      </FormContainer>
    </>
  );
};

export default PostIdMessage;
