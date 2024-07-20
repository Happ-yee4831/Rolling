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