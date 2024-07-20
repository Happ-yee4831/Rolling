/* eslint-disable */
import { useRef, useState, useEffect } from 'react';

import { fetchProfileImg } from '../../api/someApi';

const ProfileImgInputSelector = ({ children, setProfileImageURL }) => {
  const imgRef = useRef();
  const [profileImgs, setProfileImgs] = useState([]);

  const handleChangeProfileImg = (e) => {
    imgRef.current.src = e.target.src;
    setProfileImageURL(e.target.src);
  };

  const getData = async () => {
    const { imageUrls } = await fetchProfileImg();
    setProfileImgs(imageUrls);
  };

  useEffect(() => {
    getData();
  }, []);

  return (

  );
}