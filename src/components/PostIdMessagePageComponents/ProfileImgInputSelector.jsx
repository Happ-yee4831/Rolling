import { useRef, useState, useEffect } from 'react';
import {
  StyledSection,
  SelectedProfileImg,
  ProfileImgContainer,
  ProfileImgList,
  MakeImgRound,
} from '../../styles/PostIdMessageStyle';
import { fetchProfileImg } from '../../api/someApi';

function ProfileImgInputSelector({ children, setProfileImageURL }) {
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
    <StyledSection>
      <label htmlFor="profileImgURL">{children}</label>
      <SelectedProfileImg>
        <img
          src={profileImgs[0]}
          alt="기본 프로필 이미지"
          width="80px"
          height="80px"
          ref={imgRef}
          className="selected-profile-img"
        />
        <ProfileImgContainer>
          <span>프로필 이미지를 선택해 주세요!</span>
          <ProfileImgList>
            {profileImgs.map((img) => {
              return <MakeImgRound key={img} src={img} alt="샘플 프로필 이미지" onClick={handleChangeProfileImg} />;
            })}
          </ProfileImgList>
        </ProfileImgContainer>
      </SelectedProfileImg>
    </StyledSection>
  );
}

export default ProfileImgInputSelector;
