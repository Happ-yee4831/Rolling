/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  SubmitForm,
  TopContainer,
  ToNameInput,
  BottomContainer
} from '../styles/PostStyle';
import ColorAndImageButton from '../components/PostPageComponents/ColorAndImageButton';
import BackgroundThingsList from '../components/PostPageComponents/BackgroundThingsList';
import CreateButton from '../components/PostPageComponents/CreateButton';
import { getDataBackgroundImg, postUserData } from '../api/someApi';

const Post = () => {
  const [isColor, setIsColor] = useState(true);
  const [userName, setUserName] = useState('');
  const [error, setError] = useState('');
  const [backgroundImgs, setBackgroundImgs] = useState(null);
  const [selectImg, setSelectImg] = useState(null);
  const [selectColor, setSelectColor] = useState('beige');
  const navigate = useNavigate();

  const loadBackgroundImgData = async () => {
    const { imageUrls } = await getDataBackgroundImg();
    setBackgroundImgs(imageUrls);
  };

  useEffect(() => {
    loadBackgroundImgData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('handleSubmit called');

    let sendData;
    if (isColor) {
      sendData = {
        team: '8-5',
        name: userName,
        backgroundColor: selectColor,
      };
    } else {
      sendData = {
        team: '8-5',
        name: userName,
        backgroundColor: selectColor,
        backgroundImageURL: selectImg,
      };
    }

    const { id } = await postUserData(sendData);
    navigate(`/post/${id}`);
  };

  const NameValueChange = (e) => {
    setUserName(e.target.value);
  };

  const handleBlur = () => {
    if (!userName) {
      setError('값을 입력해 주세요.');
    }
  };

  const isButtonDisabled = !userName;

  return (
    <>
      <main>
        <SubmitForm onSubmit={handleSubmit}>
          <TopContainer className="recipient_name">
            <p className="target">To.</p>
            <ToNameInput
              value={userName}
              onChange={NameValueChange}
              onBlur={handleBlur}
              placeholder="받는 사람 이름을 입력해 주세요"
            />
            {error && <p className="errorMessage">{error}</p>}
          </TopContainer>
          <BottomContainer>
            <div className="text">
              <p className="title">배경화면을 선택해 주세요.</p>
              <p className="subtitle">
                컬러를 선택하거나, 이미지를 선택할 수 있습니다.
              </p>
            </div>
            <div>
              <ColorAndImageButton setIsColor={setIsColor} isColor={isColor} />
              <BackgroundThingsList
                backgroundImgs={backgroundImgs}
                isColor={isColor}
                selectColor={selectColor}
                setSelectColor={setSelectColor}
                selectImg={selectImg}
                setSelectImg={setSelectImg}
              />
            </div>
            <CreateButton type="submit" disabled={isButtonDisabled} />
          </BottomContainer>
        </SubmitForm>
      </main>
    </>
  );
};

export default Post;
